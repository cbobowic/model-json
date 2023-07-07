import Resizer from "react-image-file-resizer";
import { ModelState } from "./FileInput";
import * as tf from "@tensorflow/tfjs";
import { useRef } from "react";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";


async function resizeFile(file: File) {
  return new Promise((resolve) => {
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
}

interface FileUploaderProps {
  onError: (error: Error) => void;
  model: tf.GraphModel | null;
  outputState: ModelState;
  setPredictions: React.Dispatch<React.SetStateAction<number[]>>;
  setOutputState: React.Dispatch<React.SetStateAction<ModelState>>;
}

function FileUploader({
  onError,
  model,
  outputState,
  setPredictions,
  setOutputState,
}: FileUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleButtonClick() {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }

  async function handleFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
    try {
      const img = await processFile(event);
      if (img === undefined){
        return;
    }
      img.onload = async () => {
        try {
          processImage(img);
        } catch (e) {
          onError(e as Error);
          setOutputState(ModelState.IDLE);
          setPredictions([]);
        }
      };
    } catch (e) {
      onError(e as Error);
    }
  }

  async function processFile(event: React.ChangeEvent<HTMLInputElement>) {
    setOutputState(ModelState.LOADING);
    const files = event.target.files;
    if (files === null || files.length <= 0) {
      setOutputState(ModelState.IDLE);
      setPredictions([]);
      return;
    }
    const rawFile = files[0];
    if (
      rawFile.type !== "image/jpeg" &&
      rawFile.type !== "image/png" &&
      rawFile.type !== "image/jpg"
    ) {
      setOutputState(ModelState.IDLE);
      setPredictions([]);
      throw new Error("Error: Please select a *.jpeg, *.jpg, or *.png file!");
    }
    const file = (await resizeFile(rawFile)) as File;

    const img = new Image();
    img.src = URL.createObjectURL(file);
    return img;
  }

  async function processImage(img: HTMLImageElement) {
    if (model === null) {
      setOutputState(ModelState.MODEL_LOADING);
      setPredictions([]);
      throw new Error(
        "Error: The model could not be loaded! This is likely an issue on my end. Please try again later :("
      );
    }

    const tensor = tf.browser.fromPixels(img);
    const resized = tf.image.resizeBilinear(tensor, [256, 256]).toFloat();
    tensor.dispose();
    const batched = resized.expandDims(0);
    resized.dispose();
    const predTensor = model.predict(batched) as tf.Tensor;
    const values = (await predTensor.array()) as number[][];
    setPredictions(values[0]);
    if (values[0][0] > values[0][1]) {
      setOutputState(ModelState.FAKE);
    } else {
      setOutputState(ModelState.REAL);
    }
  }

  return (
    <>
      <Input
        type="file"
        inputRef={fileInputRef}
        onChange={handleFileUpload}
        style={{ display: "none" }}
      />
      <Button
        aria-label="file input"
        variant="outlined"
        color="black"
        onClick={handleButtonClick}
        disabled={outputState === ModelState.MODEL_LOADING}
      >
        {outputState === ModelState.MODEL_LOADING
          ? "Loading Model"
          : "Upload image"}
      </Button>
    </>
  );
}

export default FileUploader;
