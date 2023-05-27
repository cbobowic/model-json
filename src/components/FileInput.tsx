import Input from "@mui/material/Input";
import { useEffect, useRef, useState } from "react";
import Button from "@mui/material/Button";
import theme from "./ButtonTheme";
import { ThemeProvider } from "@mui/material/styles";
import * as tf from "@tensorflow/tfjs";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import Backdrop from "@mui/material/Backdrop";
import Resizer from "react-image-file-resizer";
import { model as m } from "../Constants";

interface FileInputProps {
  onError: (error: Error) => void;
}

enum Prediction {
  FAKE,
  REAL,
  LOADING,
  IDLE,
}

function FileInput({ onError }: FileInputProps) {
  const [model, setModel] = useState<tf.GraphModel | null>(null);
  const [predictions, setPredictions] = useState<number[]>([]);
  const [outputState, setOutputState] = useState<Prediction>(Prediction.IDLE);

  useEffect(() => {
    async function loadModel() {
      // console.log("Loading model...")
      if (model === null) {
        const newModel = await tf.loadGraphModel(m);
        setModel(newModel);
      }
    }

    if (model === null) {
      loadModel();
    }
  }, [model]);


  // Handles file input
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const resizeFile = (file: File) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        256,
        256,
        "JPEG",
        100,
        0,
        (uri) => {
          resolve(uri);
        },
        "file"
      );
    });

  /**
   * Used to handle when a file is uploaded to the file input.
   *
   * @param event file upload event
   * @returns nothing
   */
  async function handleFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const files = event.target.files;
    if (files !== null && files.length > 0) {
      const rawFile = files[0];
      if (
        rawFile.type !== "image/jpeg" &&
        rawFile.type !== "image/png" &&
        rawFile.type !== "image/jpg"
      ) {
        onError(new Error("Error: Please select a *.jpeg, *.jpg, or *.png file!"));
        setOutputState(Prediction.IDLE);
        setPredictions([]);
        return;
      }
      const file = (await resizeFile(rawFile)) as File;

      setOutputState(Prediction.LOADING);

      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = async () => {
        try {
          const tensor = tf.browser.fromPixels(img);
          const resized = tf.image.resizeBilinear(tensor, [256, 256]).toFloat();
          tensor.dispose();
          const batched = resized.expandDims(0);
          resized.dispose();
          if (model === null) {
            throw new Error("Error: The model could not be loaded! This is likely an issue on my end. Please try again later :(");
          }
          const predictions = model.predict(batched) as tf.Tensor;
          const values = (await predictions.array()) as number[][];
          setPredictions(values[0]);
          if (values[0][0] > values[0][1]) {
            setOutputState(Prediction.FAKE);
          } else {
          setOutputState(Prediction.REAL);
          }
        } catch (e) {
          onError(e as Error);
          setOutputState(Prediction.IDLE);
          setPredictions([]);
          return;
        }
      };
    }
  }


  // Handles color of the output alert
  function getColor() {
    switch (outputState) {
      case Prediction.FAKE:
        return "error";
      case Prediction.REAL:
        return "success";
      case Prediction.LOADING:
        return "info";
      case Prediction.IDLE:
        return "info";
    }
  }

  // Handles text of the output alert
  function getAlertText() {
    switch (outputState) {
      case Prediction.FAKE:
        return `The model is ${(100 * predictions[0]).toFixed(
          2
        )}% certain that this image is fake!`;
      case Prediction.REAL:
        return `The model is ${(100 * predictions[1]).toFixed(
          2
        )}% certain that this image is real!`;
      case Prediction.LOADING:
        return "Loading...";
      case Prediction.IDLE:
        return "Upload an image to get started!";
    }
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Button
          aria-label="file input"
          variant="outlined"
          color="black"
          onClick={handleButtonClick}
        >
          Upload File
        </Button>
      </ThemeProvider>
      <Input
        type="file"
        inputRef={fileInputRef}
        onChange={handleFileUpload}
        style={{ display: "none" }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "2rem",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem",
        }}
      >
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={outputState === Prediction.LOADING}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        {(outputState === Prediction.FAKE ||
          outputState === Prediction.REAL) && (
          <Alert aria-label="model result" severity="info" color={getColor()}>
            {getAlertText()}
          </Alert>
        )}
      </Box>
    </>
  );
}

export default FileInput;
