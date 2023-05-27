import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { textStyle } from "../components/TextStyle";
import { motion as m } from "framer-motion";

function Home() {
  return (
    <Box
      component={m.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      sx={{
        justifyContent: "flex-start",
        flexGrow: 1,
        height: "100%",
        padding: "2%",
        boxSizing: "border-box",
      }}
    >
      <Typography
        sx={{ ...textStyle, fontSize: ["3rem", "4rem"], marginLeft: "1%" }}
        variant="h4"
      >
        Colden Bobowick
      </Typography>
      <Typography sx={{ ...textStyle, lineHeight: "3" }}>
        Brown University '25
      </Typography>
      <Typography sx={textStyle}>
        Applied Mathematics - Computer Science
      </Typography>
    </Box>
  );
}

export default Home;
