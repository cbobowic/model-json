import { motion as m } from "framer-motion";

const pageBoxProps = {
  component: m.div,
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.3, ease: "easeInOut" },
  sx: {
    flexGrow: 1,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    paddingTop: "0%",
    alignItems: "center",
  },
};

export { pageBoxProps };
