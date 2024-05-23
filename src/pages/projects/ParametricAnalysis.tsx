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
        Attitude Determination Algorithms
      </Typography>

      <Typography
        sx={{ ...headStyle, textAlign: "center", fontSize: ["1.4rem", "2rem"] }}
      >
        Overview
      </Typography>
      <Typography sx={{ ...paraStyle }}>
      The Attitude Determination and Control Systems (ADCS) subgroup of Brown Space Engineering (BSE) was tasked with developing a low-power and low-mass attitude control system with ~10° accuracy for PVDx, a 3U cubesat set to launch in May 2025. As ADCS Team Lead, I am tasked with navigating a wide array of narrow engineering constraints. For example, PVDx has a maximum mass for launch, which must be shared between all subgroups. ADCS was given a 1.5kg mass budget. Additionally, PVDx will operate under very minimal power. Magnetorquers may only run intermittently and must adhere to voltage and timing constraints. The system must adhere to harsh spatial constraints as well; the design must be fully contained in a 90x90x30mm rectangular prism. Finally, since the primary mission of PVDx is to make space accessible to minimally-funded organizations, components of the attitude system must be built in-house or purchased at a minimal cost.
        <br />
        <br />
      </Typography>

      <Typography
        sx={{ ...headStyle, textAlign: "center", fontSize: ["1.4rem", "2rem"] }}
      >
        MATLAB Simulation
      </Typography>
      <Typography sx={{ ...paraStyle }}>
      Significant progress has been made towards creating a comprehensive orbital simulation via MATLAB Simulink, which would enable the team to efficiently test various control algorithms. The project consists of three main sections: Mission Configuration, Orbital Simulation, and Visualization. While MATLAB provides support for orbital calculations and visualization in Simulink, our algorithm requires real-time magnetic data as input, so a custom simulated magnetometer was designed. 
      </Typography>

      <figure
        aria-label="magnetometer simulation figure"
        style={{
          display: "flex",
          flexDirection: "column",
            minWidth: isMobile ? "80%" : "60%",
            alignItems: "center",
        }}
      >
        <img
          src="\images\magnetometer_ss (1).png"
          alt="simulated magnetometer"
          style={{ border: "1px solid black", maxWidth: isMobile ? "100%" : "60%" }}
        />
        <figcaption
          style={{
            fontStyle: "italic",
            textAlign: "center",
            fontSize: "0.8rem",
          }}
        >
          Figure: Simulated magnetometer designed using real-time magnetic data rotated using current state quaternions.
        </figcaption>
      </figure>
      <Typography sx={{ ...paraStyle }}>
      The B-dot algorithm is a tried-and-true cubesat detumbling procedure during which the derivative of the Earth's B-field (the B-dot) is calculated and a magnetic dipole of the negative vector is produced. The simulation has shown promising results, with convergence to near-zero velocities in under one orbit.      
      </Typography>
      <figure
        aria-label="b-dot simulation results figure"
        style={{
          display: "flex",
          flexDirection: "column",
            minWidth: isMobile ? "80%" : "60%",
            alignItems: "center",
        }}
      > 
        <img
          src="\images\b_dot_conv_ex (1).png"
          alt="b-dot simulation results"
          style={{ border: "1px solid black", maxWidth: isMobile ? "100%" : "60%" }}
        />
        <figcaption
          style={{
            fontStyle: "italic",
            textAlign: "center",
            fontSize: "0.8rem",
          }}
        >
          Figure: Example of simulated B-dot convergence to near-zero angular velocities, in degrees.
        </figcaption>
      </figure>
      <Typography sx={{ ...paraStyle }}>
      Current work includes implementation of the Mahony Attitude Algorithm and our novel two-step extended Kalman filter algorithm.
      </Typography>
      <Typography
        sx={{ ...headStyle, textAlign: "center", fontSize: ["1.4rem", "2rem"] }}
      >
        Magnetorquer Design
      </Typography>

      <Typography sx={{ ...paraStyle }}>
      The actuation system consists of two orthogonal Permalloy core magnetorquers and a third orthogonal air core magnetorquer. For the core, Permalloy 80 was selected over carbon steel and electrical steel due to the high magnetic permeability, low cost, and accessibility of the material. Additionally, previous missions have utilized Permalloy rods. 
        <br />
        <br />
      For the coils, enameled copper wire was selected due to the low resistance of copper and the protection from short-circuiting that enamel provides. The gauge was chosen as 30 AWG because it can support a large enough current for the purposes of a magnetorquer while also having a small wire radius, allowing for more coils within given geometric constraints.
      <br />
        <br />
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
          Figure: Surface defined by the magnetic dipole as a function of core length and radius.
        </figcaption>
      </figure>
      <Typography sx={{ ...paraStyle }}>
      The dimensions of the magnetorquers were determined by geometric constraints provided by the Structures team and then tested via numerical simulation.
      Given a 45 mm maximum length and 20 mm maximum diameter for the core magnetorquers, the radius of the core vs the number of layers of coils needed to be balanced. A parametric analysis, while not provably optimal, gave reasonable candidates for radius and coil depth by testing resultant dipole moment and wire resistance for every possible combination of dimensions (up to manufacturing precision tolerance) that fit the structural constraints at 80°C.        <br />
        <br />
      </Typography>
      <figure
        aria-label="param analysis points figure"
        style={{
          display: "flex",
          flexDirection: "column",
            minWidth: isMobile ? "80%" : "60%",
            alignItems: "center",
        }}
      >
        <img
          src="\images\dipole_points (1).png"
          alt="magnetic dipole points for magnetorquer design"
          style={{ border: "1px solid black", maxWidth: isMobile ? "100%" : "60%" }}
        />
        <figcaption
          style={{
            fontStyle: "italic",
            textAlign: "center",
            fontSize: "0.8rem",
          }}
        >
          Figure: Viable points for magnetorquer design based on geometric constraints. (Credit: <a href='https://github.com/mcapoor'>mcapoor</a>)
        </figcaption>
      </figure>

      <Typography sx={{ ...paraStyle }}>
        The parametric analysis was used to determine the optimal length and
        radius of the magnetorquers. Although final design choices are subject
        to change, the analysis has been instrumental in narrowing down the
        potential options. <br />
        <br /> Check out the full MATLAB and Python code on GitHub!
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
