import { useCallback, useEffect, useState } from "react";
import theme from "../ButtonTheme";
import { ThemeProvider } from "@mui/material/styles";
import * as tf from "@tensorflow/tfjs";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import Backdrop from "@mui/material/Backdrop";
import { model as m } from "../../Constants";
import FileUploader from "./FileLoader";
import { useModelLoader } from "./ModelLoader";

interface FileInputProps {
  onError: (error: Error) => void;
}

export enum ModelState {
  FAKE,
  REAL,
  LOADING,
  IDLE,
  MODEL_LOADING,
}

function FileInput({ onError }: FileInputProps) {
  const [model, setModel] = useState<tf.GraphModel | null>(null);
  const [predictions, setPredictions] = useState<number[]>([]);
  const [outputState, setOutputState] = useState<ModelState>(
    ModelState.MODEL_LOADING
  );

  // const { model, outputState, setOutputState } = useModelLoader();

  useEffect(() => {
    async function loadModel() {
      try {
      const newModel = await tf.loadGraphModel(m);
      setModel(newModel);
      } catch {
        onError(new Error("Error: The model could not be loaded! This is likely an issue on my end. Please try again later :("));
        setOutputState(ModelState.MODEL_LOADING);
        return;
      }
    }

    if (model === null) {
      console.log("Loading model...");
      loadModel();
      console.log("Model loaded!");
    }

    if (model !== null && outputState === ModelState.MODEL_LOADING) {
      setOutputState(ModelState.IDLE);
    }
  }, [model, outputState]);

  
  // Handles color of the output alert
  function getResultAlertColor() {
    switch (outputState) {
      case ModelState.FAKE:
        return "error";
      case ModelState.REAL:
        return "success";
      case ModelState.LOADING:
        return "info";
      case ModelState.IDLE:
        return "info";
    }
  }

  // Handles text of the output alert
  function getResultAlertText() {
    switch (outputState) {
      case ModelState.FAKE:
        return `The model is ${(100 * predictions[0]).toFixed(
          2
        )}% certain that this image is fake!`;
      case ModelState.REAL:
        return `The model is ${(100 * predictions[1]).toFixed(
          2
        )}% certain that this image is real!`;
      case ModelState.LOADING:
        return "Loading...";
      case ModelState.IDLE:
        return "Upload an image to get started!";
    }
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <FileUploader
          onError={onError}
          model={model}
          outputState={outputState}
          setOutputState={setOutputState}
          setPredictions={setPredictions}
        />
      </ThemeProvider>
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
          open={outputState === ModelState.LOADING}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        {(outputState === ModelState.FAKE ||
          outputState === ModelState.REAL) && (
          <Alert aria-label="model result" severity="info" color={getResultAlertColor()}>
            {getResultAlertText()}
          </Alert>
        )}
      </Box>
    </>
  );
}

export default FileInput;
