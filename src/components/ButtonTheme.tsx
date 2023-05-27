import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    black: {
      main: "#000000",
      contrastText: "#fff",
    },
  },
});

declare module "@mui/material/styles" {
  interface Palette {
    black: Palette["primary"];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    black?: PaletteOptions["primary"];
  }
}

// @babel-ignore-comment-in-output Update the Button's color prop options
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    black: true;
  }
}

export default theme;
