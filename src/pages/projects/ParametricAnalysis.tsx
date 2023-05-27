import Box from "@mui/material/Box";
import { pageBoxProps } from "../../components/PageBoxProps";
import Typography from "@mui/material/Typography";
import { headStyle, iconStyle, paraStyle } from "../../components/TextStyle";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion as m } from "framer-motion";
import { parametric } from "../../Constants";
import { useState } from "react";

function ParametricAnalysis() {
  const AnimatedGitHubIcon = m(GitHubIcon);
  const [isMobile] = useState(window.innerWidth < 600);

  return (
    <Box {...pageBoxProps}>
      <Typography
        aria-label="magnetorquer heading"
        sx={{ ...headStyle, textAlign: "center" }}
      >
        Magnetorquer Parametric Analysis
      </Typography>

      <Typography
        sx={{ ...headStyle, textAlign: "center", fontSize: ["1.4rem", "2rem"] }}
      >
        Overview
      </Typography>
      <Typography sx={{ ...paraStyle }}>
        The Attitude Determination and Control Systems subgroup of Brown Space
        Engineering was tasked with developing a low-power and low-mass attitude
        control system with ~10° accuracy for the 3U cubesat PVDx. The team must
        consider a multitude of constraints. <strong>Mass:</strong> PVDx has a
        maximum mass for launch, which must be shared between all subgroups.
        ADCS was given a 1.5kg mass budget. <strong>Power:</strong> PVDx will be
        operate with very minimal power. Magnetorquers can only run
        intermittently and must adhere to voltage and timing constraints.{" "}
        <strong>Spatial:</strong> The system must fit within the satellite, be
        positioned near the edges, and avoid high voltage wires.{" "}
        <strong>Price:</strong> Since PVDx is intended to increase accessibility
        to space, components of the attitude system must be purchased or built
        at a minimal cost.
        <br />
        <br />
        Magnetorquers are solenoids that generate a magnetic dipole which
        interacts with the Earth's magnetic field to position the satellite in a
        specific direction. Magnetorquers that are longer with larger radii
        produce greater dipoles, so there are many tradeoffs to consider when
        selecting a length and radius. As Attitude Determination and Control
        Lead, I wrote a parametric analysis in MATLAB to determine possible
        combinations of length and radius that yield the desired dipole.
      </Typography>
      <figure
        aria-label="param analysis figure"
        style={{
          display: "flex",
          flexDirection: "column",
            minWidth: isMobile ? "80%" : "60%",
            alignItems: "center",
        }}
      >
        <img
          src="\images\magnetorquer-param-analysis.png"
          alt="magnetorquer parametric analysis"
          style={{ border: "1px solid black", maxWidth: isMobile ? "100%" : "60%" }}
        />
        <figcaption
          style={{
            fontStyle: "italic",
            textAlign: "center",
            fontSize: "0.8rem",
          }}
        >
          Figure: Parametric analysis of magnetorquer length and radius.
        </figcaption>
      </figure>
      <Typography sx={{ ...paraStyle }}>
        The parametric analysis was used to determine the optimal length and
        radius of the magnetorquers. Although final design choices are subject
        to change, the analysis has been instrumental in narrowing down the
        potential options. <br />
        <br /> Check out the full MATLAB code on GitHub!
      </Typography>
      <a href={parametric} target="_blank" rel="noreferrer">
        <AnimatedGitHubIcon
          aria-label="github icon"
          whileHover={{ scale: 1.2 }}
          sx={{ ...iconStyle, fontSize: "3rem", margin: "2rem" }}
        />
      </a>
    </Box>
  );
}

export default ParametricAnalysis;
