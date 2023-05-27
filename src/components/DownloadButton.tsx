import Button from "@mui/material/Button";
import theme from "./ButtonTheme";
import { ThemeProvider } from "@mui/material/styles";

const DownloadButton = ({ text, link, name }: any) => {
  const handleDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = link; // Specify the path to your PDF file
    downloadLink.download = name; // Specify the filename for the downloaded file
    downloadLink.click();
  };

  return (
    <ThemeProvider theme={theme}>
      <Button variant="outlined" color={"black"} onClick={handleDownload}>
        {text}
      </Button>
    </ThemeProvider>
  );
};

DownloadButton.defaultProps = {
  text: "Download",
  link: "/bobowick_cs1430_term_poster.pdf",
  name: "bobowick_cs1430_term_poster.pdf",
};

export default DownloadButton;
