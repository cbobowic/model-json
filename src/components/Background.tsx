import Box from "@mui/material/Box";

function Background(props: any) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        overflow: "auto",
        minHeight: "100vh",
        width: "100vw",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "right",
          alignItems: "top",
          height: "calc(100vh - 50px)",
          width: "calc(100vw - 50px)",
          outline: "solid",
          outlineColor: "black",
          outlineWidth: "2px",
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
}

export default Background;
