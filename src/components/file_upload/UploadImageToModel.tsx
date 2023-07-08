import { useState } from "react";
import theme from "../ButtonTheme";
import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import FileUploader from "./FileLoader";
import { useModelLoader } from "./ModelLoader";
import ModelUIFeedback from "./ModelUIFeedback";

/**
 * Props for the UploadImageToModel component.
 */
interface UploadImageToModelProps {
  onError: (error: Error) => void;
}

/**
 * Main component for interactive model upload.
 */
function UploadImageToModel({ onError }: UploadImageToModelProps) {
  const [predictions, setPredictions] = useState<number[]>([]);
  const { model, outputState, setOutputState } = useModelLoader(onError);

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
        <ModelUIFeedback outputState={outputState} predictions={predictions}/>
      </Box>
    </>
  );
}

export default UploadImageToModel;
