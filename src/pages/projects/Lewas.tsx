import Box from "@mui/material/Box";
import { pageBoxProps } from "../../components/PageBoxProps";
import Typography from "@mui/material/Typography";
import { headStyle, iconStyle, paraStyle } from "../../components/TextStyle";
import Link from "@mui/material/Link";
import { motion as m } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import { email, lewas } from "../../Constants";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DownloadButton from "../../components/DownloadButton";
import { useState } from "react";

function Lewas() {
  const AnimatedGitHubIcon = m(GitHubIcon);
  const AnimatedMailOutlineIcon = m(MailOutlineIcon);
  const [isMobile] = useState(window.innerWidth < 600);

  return (
    <Box {...pageBoxProps}>
      <Typography
        aria-label="lewas heading"
        sx={{ ...headStyle, textAlign: "center" }}
      >
        LEWAS Data Art Generator
      </Typography>
      <Typography
        sx={{ ...headStyle, textAlign: "center", fontSize: ["1.4rem", "2rem"] }}
      >
        Overview
      </Typography>
      <Typography sx={{ ...paraStyle }}>
        The Learning Enhanced Watershed Assessment System (
        <Link
          href="http://lewas.ictas.vt.edu/"
          target="_blank"
          rel="noreferrer"
          color={"#000000"}
        >
          LEWAS
        </Link>
        ) Laboratory at Virginia Tech is a research lab that studies and
        monitors water quality of the local watershed. Its purpose is to enhance
        water sustainability education and research at Virginia Tech. As an
        undergraduate data science researcher in Summer 2022, I designed and
        developed a data-driven art generator that uses LEWAS data to create
        unique art pieces that raise awareness about the importance of water
        quality. <br />
        <br />
        LEWAS has been collecting water quality data from the Stroubles Creek
        watershed since 2016. Since data is collected every 10-60 seconds, the
        large amounts of data are stored in a database that is not easily
        accessible to the public. The goal of this project was to improve the
        accessibility of LEWAS data in a creative way. My solution was the LEWAS
        Data Art Generator, a python script that cleans and processes water
        quality data and displays it in a handful of visually appealing ways.
      </Typography>
      <Typography
        sx={{ ...headStyle, textAlign: "center", fontSize: ["1.4rem", "2rem"] }}
      >
        Contributions
      </Typography>
      <Typography sx={{ ...paraStyle }}>
        Throughout the summer, I balanced my time between overhauling and
        improving the Online Watershed Learning System (OWLS) website and
        building the LEWAS Data Art Generator. The largest hurdle to overcome
        was my lack of technical experience at the time. I had never worked with
        JavaScript, HTML, or CSS before, so I taught myself the basics of web
        development and used my newfound knowledge to improve the OWLS website.
        I also had very limited experience with Python, so the LEWAS Data Art
        Generator was a great opportunity to refine my Python skills. <br />
        <br />
        The art generator was built with pandas, NumPy, and matplotlib. Having
        no prior experience with these libraries, I taught myself how to clean
        and preprocess the data. I also learned how to use matplotlib to create
        a variety of visualizations.
      </Typography>
      <figure
        aria-label="salinity"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          minWidth: isMobile ? "80%" : "60%",
        }}
      >
        <img
          style={{
            maxWidth: isMobile ? "100%" : "50%",
          }}
          src="\images\salinity_circle.jpg"
          alt="Salinity Circle art generated by the LEWAS Data Art Generator."
        ></img>
        <figcaption
          style={{
            fontStyle: "italic",
            maxWidth: isMobile ? "100%" : "50%",
            fontSize: "0.8rem",
            textAlign: "center",
          }}
        >
          Figure: Water salinity data generated by the LEWAS Data Art Generator.
          Consists of 6 years of water salinity data, from January (top)
          clockwise to December. Data credit: LEWAS Lab.
        </figcaption>
      </figure>
      <Typography sx={{ ...paraStyle }}>
        One piece of art that has been particularly impactful is the Salinity
        circle, shown above. The data is normalized and color-coded. Blue,
        central points represent low salinity and green, outer points represent
        high salinity. The circle demonstrates the dangerous salinity spikes
        that occur particularly in the winter months due to heavy road salt
        usage and nearby construction. This piece was displayed near Stroubles
        Creek, where the data was collected.
        <br />
        <br />
        One of the most challenging aspects of this project was optimization.
        Having such little experience with Python, my minimum viable product was
        naive and took upwards of 15 minutes to run. Throughout the summer, I
        learned about vectorization with NumPy and optimized my code to run in
        less than 200ms.
      </Typography>
      <Typography sx={{ ...paraStyle }}>
        Feel free to check out the LEWAS Data Art Generator on GitHub!
      </Typography>
      <a href={lewas} target="_blank" rel="noreferrer">
        <AnimatedGitHubIcon
          whileHover={{ scale: 1.2 }}
          sx={{ ...iconStyle, fontSize: "3rem", margin: "1rem" }}
        />
      </a>
      <Typography sx={{ ...paraStyle, marginBottom: "1rem" }}>
        Or access the poster presentation for this project:
      </Typography>
      <DownloadButton
        text={"Download"}
        link={"/bobowick-generator-poster.pdf"}
        name={"bobowick-data-art-poster.pdf"}
      />

      <Typography
        sx={{ ...headStyle, textAlign: "center", fontSize: ["1.4rem", "2rem"] }}
      >
        OWLS Website Development
      </Typography>
      <Typography sx={{ ...paraStyle }}>
        The Online Watershed Learning System (OWLS) website allows users to view
        and interact with LEWAS data. The website was built with JavaScript,
        HTML, and CSS and features a interactive graph that displays water
        quality data. The graph had a variety of issues. First of all, the user
        interface was outdated and misleading, which led users to believe that
        the graph was loading when it was in fact sitting idle. Additionally,
        the graph attempted to query every datapoint in the given time range,
        which was simply infeasible in a web application setting. <br />
        <br />
        I worked with another researcher to entirely restructure the JavaScript
        logic for the graph. We changed the graph to query a subset of the data
        to reduce loading times and latency without decreasing graph resolution.
        We also restructured the user interface to be more intuitive and
        responsive. <br />
        <br />
      </Typography>
      <figure
        aria-label="old owls"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          minWidth: isMobile ? "80%" : "60%",
        }}
      >
        <img
          style={{
            maxWidth: isMobile ? "100%" : "50%",
            border: "1px solid black",
          }}
          src="\images\old-website.png"
          alt="Screenshot of the old OWLS website."
        ></img>
        <figcaption
          style={{
            fontStyle: "italic",
            maxWidth: isMobile ? "100%" : "50%",
            fontSize: "0.8rem",
            textAlign: "center",
          }}
        >
          Figure: Old OWLS website.
        </figcaption>
      </figure>
      <figure
        aria-label="new owls"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          minWidth: isMobile ? "80%" : "60%",
        }}
      >
        <img
          style={{
            maxWidth: isMobile ? "100%" : "50%",
            border: "1px solid black",
          }}
          src="\images\new-website.png"
          alt="Screenshot of the new OWLS website."
        ></img>
        <figcaption
          style={{
            fontStyle: "italic",
            fontSize: "0.8rem",
            maxWidth: isMobile ? "100%" : "50%",
            textAlign: "center",
          }}
        >
          Figure: New and restructured OWLS website.
        </figcaption>
      </figure>
      <Typography sx={{ ...paraStyle, marginBottom: "1rem" }}>
        Access the poster presentation for this project:
      </Typography>
      <DownloadButton
        text={"Download"}
        link={"/bobowick-website-poster.pdf"}
        name={"bobowick-website-poster.pdf"}
      />

      <Typography sx={{ ...paraStyle, marginTop: "1rem" }}>
        Although the OWLS website requires a login to view, I am happy to answer
        any questions!
      </Typography>
      <a href={`mailto:${email}`}>
        <AnimatedMailOutlineIcon
          aria-label="mail icon"
          whileHover={{ scale: 1.2 }}
          sx={{ ...iconStyle, fontSize: "3rem", margin: "1rem" }}
        />
      </a>
    </Box>
  );
}

export default Lewas;
