import Box from "@mui/material/Box";
import { useLocation, useNavigate } from "react-router-dom";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { motion as m } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

function HomeButtonContainer(props: any) {
  const loc = useLocation();
  const nav = useNavigate();

  // HANDLING HOME CLICK
  const AnimatedHomeRoundedIcon = m(HomeRoundedIcon);
  const [isHomeAnimatingOut, setIsHomeAnimatingOut] = useState(false);

  const usePrevLocation = (location: any) => {
    const prevLocRef = useRef(location);

    useEffect(() => {
      prevLocRef.current = location;
    }, [location]);

    return prevLocRef.current;
  };
  const prevLoc = usePrevLocation(loc);

  function handleHomeClick() {
    setIsHomeAnimatingOut(true);
    setIsArrowAnimatingOut(true);
    setTimeout(() => {
      nav("/");
      setIsHomeAnimatingOut(false);
      setIsArrowAnimatingOut(false);
    }, 300);
  }

  // HANDLING BACK CLICK
  const AnimatedKeyboardBackspaceIcon = m(KeyboardBackspaceIcon);

  const [isArrowAnimatingOut, setIsArrowAnimatingOut] = useState(false);
  const isVisible =
    loc.pathname.startsWith("/projects") && loc.pathname !== "/projects";

  function handleArrowClick() {
    setIsArrowAnimatingOut(true);
    setTimeout(() => {
      setIsArrowAnimatingOut(false);
      nav("/projects");
    }, 300);
  }

  return (
    <Box
      sx={{
        display: "flex",
        width: "100vw",
        height: "auto",
        justifyContent: "flex-start",
        alignItems: "flex-end",
        overflow: "auto",
      }}
    >
      <AnimatedHomeRoundedIcon
        aria-label="home button"
        visibility={loc.pathname === "/" ? "hidden" : "visible"}
        initial={{ opacity: prevLoc.pathname === "/" ? 0 : 1 }}
        animate={{ opacity: isHomeAnimatingOut ? 0 : 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        fontSize="large"
        whileHover={{ scale: 1.2 }}
        sx={{ position: "absolute", cursor: "pointer" }}
        onClick={handleHomeClick}
      />
      <AnimatedKeyboardBackspaceIcon
        aria-label="back button"
        visibility={isVisible ? "visible" : "hidden"}
        initial={{
          opacity:
            prevLoc.pathname.startsWith("/projects") &&
            prevLoc.pathname !== "/projects"
              ? 1
              : 0,
        }}
        animate={{ opacity: isArrowAnimatingOut ? 0 : 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        fontSize="large"
        whileHover={{ scale: 1.2 }}
        sx={{ position: "absolute", cursor: "pointer", marginBottom: "2rem" }}
        onClick={handleArrowClick}
      />
      {props.children}
    </Box>
  );
}

export default HomeButtonContainer;
