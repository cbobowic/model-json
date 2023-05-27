import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { headStyle, iconStyle } from "../components/TextStyle";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { email, linkedin, github } from "../Constants";
import { motion as m } from "framer-motion";

function Contact() {
  const AnimatedLinkedInIcon = m(LinkedInIcon);
  const AnimatedGitHubIcon = m(GitHubIcon);
  const AnimatedMailOutlineIcon = m(MailOutlineIcon);

  return (
    <Box
      component={m.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      sx={{ flexGrow: 1, height: "100%" }}
    >
      <Typography aria-label="contact heading" sx={headStyle}>
        Contact
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: ["column", "row"],
          alignItems: "center",
          gap: "20%",
          rowGap: "2rem",
          marginTop: "10%",
        }}
      >
        <a href={linkedin} target="_blank" rel="noreferrer">
          <AnimatedLinkedInIcon
            aria-label="linkedin icon"
            whileHover={{ scale: 1.2 }}
            sx={iconStyle}
          />
        </a>
        <a href={github} target="_blank" rel="noreferrer">
          <AnimatedGitHubIcon
            aria-label="github icon"
            whileHover={{ scale: 1.2 }}
            sx={iconStyle}
          />
        </a>
        <a href={`mailto:${email}`}>
          <AnimatedMailOutlineIcon
            aria-label="email icon"
            whileHover={{ scale: 1.2 }}
            sx={iconStyle}
          />
        </a>
      </Box>
      <Box sx={{ marginTop: "10%", paddingLeft: "10%", paddingRight: "10%" }}>
        <Typography
          sx={{
            fontFamily: "Lato, san-serif",
            marginLeft: "8%",
            marginRight: "8%",
            textAlign: "center",
            fontSize: ["1rem", "1.4rem"],
          }}
        >
          Feel free to reach out to me on any of these platforms! I always look
          forward to meeting new people, chatting about cool projects, and
          receiving feedback!
        </Typography>
      </Box>
    </Box>
  );
}

export default Contact;
