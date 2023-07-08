import Alert from "@mui/material/Alert"
import Backdrop from "@mui/material/Backdrop"
import CircularProgress from "@mui/material/CircularProgress"
import { ModelState } from "./ModelLoader"

/**
 * Props for the ModelUIFeedback component.
 */
interface ModelUIFeedbackProps {
    outputState: ModelState;
    predictions: number[];
}

/**
 * Handles loading backdrop and output alerts (non-error) for the model.
 */
export default function ModelUIFeedback({ outputState, predictions }: ModelUIFeedbackProps) {

  function getResultAlertColor() {
    switch (outputState) {
      case ModelState.FAKE:
        return "error";
      case ModelState.REAL:
        return "success";
    }
  }

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
    }
  }


    return (
        <>
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
      </>
    )
}