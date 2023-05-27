const textStyle = {
  fontFamily: "Lato, sans-serif",
  fontWeight: 400,
  letterSpacing: ".1rem",
  color: "inherit",
  textDecoration: "none",
  cursor: "default",
  marginLeft: "1.5%",
  fontSize: ["1.1rem", "1.3rem"],
};

const paraStyle = {
  fontFamily: "Lato, san-serif",
  marginLeft: "8%",
  marginRight: "8%",
  textAlign: "center",
  fontSize: "1.05rem",
};

const headStyle = {
  fontFamily: "Lato, san-serif",
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  lineHeight: "1.5",
  padding: "2rem 1rem 1rem 1rem",
  fontSize: ["2rem", "3.5rem"],
  cursor: "default",
};

const projStyle = {
  lineHeight: "2",
  fontSize: ["1rem", "2rem"],
  marginTop: "1rem",
  marginBottom: "1rem",
  fontFamily: "Lato, san-serif",
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  cursor: "pointer",
};

const navStyle = {
  ...textStyle,
  fontSize: "1.6rem",
  lineHeight: 2,
  cursor: "pointer",
  textUnderlineOffset: "0.3rem",
  textDecorationThickness: "5px",
};

const iconStyle = { fontSize: ["2.5rem", "5rem"], color: "black" };

export { textStyle, paraStyle, headStyle, navStyle, iconStyle, projStyle };
