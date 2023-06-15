import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { pageBoxProps } from "../../components/PageBoxProps";
import { headStyle, iconStyle, paraStyle } from "../../components/TextStyle";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { motion as m } from "framer-motion";
import { email } from "../../Constants";
import { useState } from "react";

function Eventify() {
  const AnimatedMailOutlineIcon = m(MailOutlineIcon);
  const [isMobile] = useState(window.innerWidth < 600);

  return (
    <Box {...pageBoxProps}>
      <Typography
        aria-label="eventify heading"
        sx={{ ...headStyle, textAlign: "center" }}
      >
        Eventify
      </Typography>
      <Typography
        sx={{ ...headStyle, textAlign: "center", fontSize: ["1.4rem", "2rem"] }}
      >
        Overview
      </Typography>
      <Typography sx={{ ...paraStyle }}>
        Eventify is a web application created in Fall 2023 for CSCI 0320:
        Introduction to Software Engineering. It allows users to find and
        publish live events in their area that match their music taste. The
        application utilizes the Spotify API to retrieve the user's top artists
        and genres. This information is then sent to the Ticketmaster API to
        find live events that match the user's music preference. The user also
        has the option to create their own live events, which is intended for
        smaller, more local gatherings. The application consists of a TypeScript
        React frontend, a Spark Java backend proxy server, and a FireBase
        database.
      </Typography>
      <figure
        aria-label="eventify dataflow"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          minWidth: isMobile ? "100%" : "70%",
        }}
      >
        <img
          style={{
            maxWidth: "80%",
            margin: "2rem 2rem 0rem 2rem",
          }}
          src="\images\eventify-dataflow.png"
          alt="Dataflow diagram of Eventify."
        ></img>
        <figcaption
          style={{
            fontStyle: "italic",
            fontSize: "0.8rem",
            textAlign: "center",
          }}
        >
          Figure: Dataflow diagram of Eventify.
        </figcaption>
      </figure>
      <Typography
        sx={{ ...headStyle, textAlign: "center", fontSize: ["1.4rem", "2rem"] }}
      >
        Contribution
      </Typography>
      <Typography sx={{ ...paraStyle }}>
        I was responsible for the integration of the Spotify API on the backend
        proxy server. This involved writing a Spark API handler that retrieved
        and stored the users top artists, subsequently retreived each artist's
        top genres, enumerated and stored the genres, and returned the most
        common genres to the frontend. I also developed the frontend Spotify user
        authentification, which prompts the user to log in to Spotify and then
        sends the user's access token to the backend proxy.
      </Typography>
      <figure
        aria-label="eventify login"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          minWidth: isMobile ? "100%" : "70%",
        }}
      >
        <img
          style={{
            maxWidth: "80%",
            margin: "2rem 2rem 0rem 2rem",
            border: "1px solid black",
          }}
          src="\images\eventify-screenshot.png"
          alt="Screenshot of Eventify login page."
        ></img>
        <figcaption style={{ fontStyle: "italic", fontSize: "0.8rem" }}>
          Figure: Eventify Login Page.
        </figcaption>
      </figure>
      <Typography sx={{ ...paraStyle }}>
        One of the main concerns of this project was data security. Eventify
        does not store any personal or login information on the backend, which
        helps to reduce the risk of a data breach. Additionally, the Eventify
        Spotify authorization requests a narrow scope, which limits the webapp
        to reading the user's top artists. Additionally, common defensive
        programming techniques were used such as deep copies and private
        modifiers where possible.
        <br />
        <br /> The project is undeployed and, due to course policy, the
        repository is private. However, I am happy to answer any questions about
        the project, my contributions, or the technologies used!
      </Typography>

      <a href={`mailto:${email}`}>
        <AnimatedMailOutlineIcon
          aria-label="email icon"
          whileHover={{ scale: 1.2 }}
          sx={{ ...iconStyle, fontSize: "3rem", margin: "2rem" }}
        />
      </a>
    </Box>
  );
}

export default Eventify;
