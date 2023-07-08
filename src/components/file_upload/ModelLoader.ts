import { useEffect, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import { model as m } from "../../Constants";

/**
 * Enum for the different states of the model.
 */
enum ModelState {
  FAKE,
  REAL,
  LOADING,
  IDLE,
  MODEL_LOADING,
}


/**
 * Loads the model once on render and updates output state accordingly.
 */
function useModelLoader(onError: (error: Error) => void) {
    const [model, setModel] = useState<tf.GraphModel | null>(null);
    const [outputState, setOutputState] = useState<ModelState>(
      ModelState.MODEL_LOADING
    );
  
    useEffect(() => {
        async function loadModel() {
          if (model !== null) {
            return;
          }
          try {
            const newModel = await tf.loadGraphModel(m);
            setModel(newModel);
            setOutputState(ModelState.IDLE);
          } catch {
            onError(
              new Error(
                "Error: The model could not be loaded! This is likely an issue on my end. Please refresh or try again later :("
              )
            );
            setOutputState(ModelState.MODEL_LOADING);
          }
        }
      
        loadModel();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
  
    return { model, outputState, setOutputState };
  }

  export { ModelState, useModelLoader }