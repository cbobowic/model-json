import { useEffect, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import { model as m } from "../../Constants";

enum ModelState {
  FAKE,
  REAL,
  LOADING,
  IDLE,
  MODEL_LOADING,
}

function useModelLoader() {
    const [model, setModel] = useState<tf.GraphModel | null>(null);
    const [outputState, setOutputState] = useState<ModelState>(
      ModelState.MODEL_LOADING
    );
  
    useEffect(() => {
      async function loadModel() {
        const newModel = await tf.loadGraphModel(m);
        setModel(newModel);
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
  
    return { model, outputState, setOutputState };
  }

  export { ModelState, useModelLoader }