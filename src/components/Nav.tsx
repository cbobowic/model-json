import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { navStyle } from "./TextStyle";
import { useLocation, useNavigate } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { motion as m } from "framer-motion";
import "./Sliding.css";

function Nav() {
  const nav = useNavigate();
  const location = useLocation();
  const isMobile = useMediaQuery("(max-width: 600px)");
  const handleClick = (path: string) => {
    nav(path);
  };

  function displayShortName() {
    if (location.pathname === "/") {
      return false;
    } else if (isMobile) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <>
      <Box marginTop={"6vh"} marginBottom={"6vh"} paddingRight={"0.8vw"}>
        <Divider
          component={m.div}
          animate={{
            height: location.pathname === "/" ? "0rem" : "100%",
          }}
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{
            height: "100%",
            borderLeft: "1px solid black",
            borderRight: "1px solid black",
          }}
        />
      </Box>
      <Box
        sx={{
          minHeight: "100%",
          paddingLeft: ["1%", "3%"],
          paddingRight: ["2%", "3%"],
          display: "flex",
        }}
      >
        <Box
          id="nav-box"
          component={m.div}
          animate={{ height: location.pathname === "/" ? "20%" : "90%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column-reverse",
            alignItems: "end",
            marginBottom: "4vh",
            height: "auto",
            minHeight: "20%",
            alignSelf: "flex-end",
          }}
        >
          <Typography
            className="a"
            component={m.div}
            animate={{
              textDecoration:
                location.pathname === "/contact" ? "underline" : "none",
            }}
            sx={{ ...navStyle }}
            onClick={() => handleClick("/contact")}
          >
            {displayShortName() ? "C" : "Contact"}
          </Typography>
          <Typography
            className="a"
            aria-label="projects nav"
            component={m.div}
            animate={{
              textDecoration:
                location.pathname === "/projects" ? "underline" : "none",
            }}
            sx={{ ...navStyle }}
            onClick={() => handleClick("/projects")}
          >
            {displayShortName() ? "P" : "Projects"}
          </Typography>
          <Typography
            className="a"
            component={m.div}
            animate={{
              textDecoration:
                location.pathname === "/about" ? "underline" : "none",
            }}
            sx={{ ...navStyle }}
            onClick={() => handleClick("/about")}
          >
            {displayShortName() ? "A" : "About"}
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default Nav;
