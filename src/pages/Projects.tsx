import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import { headStyle, projStyle } from "../components/TextStyle";
import { pageBoxProps } from "../components/PageBoxProps";
import { motion as m } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Projects() {
  const nav = useNavigate();

  return (
    <Box {...pageBoxProps}>
      <Typography
        aria-label="projects heading"
        sx={{ ...headStyle, marginBottom: "4rem" }}
      >
        Projects
      </Typography>
      <Typography
  sx={{ ...projStyle, textAlign: "center" }}
        component={m.div}
        whileHover={{ fontWeight: 800 }}
        transition={{ duration: 0.05 }}
        onClick={() => nav("/projects/stylegan-face-detection")}
      >
        StyleGAN Synthetic Face Detection
      </Typography>
      <Divider
        variant="middle"
        sx={{ width: "15%", borderWidth: "1px", borderColor: "black" }}
      />
      <Typography
        sx={{ ...projStyle, textAlign: "center" }}
        component={m.div}
        whileHover={{ fontWeight: 800 }}
        transition={{ duration: 0.05 }}
        onClick={() => nav("/projects/magnetorquer-parametric-analysis")}
      >
        Attitude Determination Algorithms 
      </Typography>
      <Divider
        variant="middle"
        sx={{ width: "15%", borderWidth: "1px", borderColor: "black" }}
      />
      <Typography
        sx={{ ...projStyle, textAlign: "center" }}
        component={m.div}
        whileHover={{ fontWeight: 800 }}
        transition={{ duration: 0.05 }}
        onClick={() => nav("/projects/eventify")}
      >
        Eventify Web Application
      </Typography>
      <Divider
        variant="middle"
        sx={{ width: "15%", borderWidth: "1px", borderColor: "black" }}
      />
      <Typography
        sx={{ ...projStyle, textAlign: "center" }}
        component={m.div}
        whileHover={{ fontWeight: 800 }}
        onClick={() => nav("/projects/lewas-art-generator")}
        transition={{ duration: 0.05 }}
      >
        LEWAS Data Art Generator
      </Typography>
    </Box>
  );
}

export default Projects;
