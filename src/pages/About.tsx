import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { paraStyle, headStyle } from "../components/TextStyle";
import { pageBoxProps } from "../components/PageBoxProps";

function About() {
  return (
    <Box {...pageBoxProps}>
      <Typography aria-label="about heading" sx={headStyle}>
        About
      </Typography>
      <Typography paragraph sx={paraStyle}>
        Hello! I am a student at Brown University studying Applied Mathematics
        and Computer Science. I have experience in software development,
        computer vision, and data science research. So far, I have worked in
        Java (Maven, JUnit, and Spark), Python (pandas, NumPy, and TensorFlow),
        TypeScript (React, Jest, Material-UI, and framer-motion), and MATLAB. I
        am passionate about making an impact at scale, so I am always looking
        for opportunities to learn as a software engineer. My work style is
        relatively detail-oriented with a focus on optimized solutions. With
        additional experience in business and entrepreneurship from the Tuck
        Business Bridge Program at Dartmouth, I look for value that I can bring
        to the table in any project.
      </Typography>
      <img
        aria-label="Colden Bobowick headshot"
        src="\images\colden-bobowick-headshot.jpg"
        height={"175vh"}
        style={{
          border: "solid",
          borderColor: "black",
          borderWidth: "2px",
          marginBottom: "1.5%",
          marginTop: "0.5%",
        }}
        alt="Headshot of Colden Bobowick"
      />
      <Typography paragraph sx={{ ...paraStyle, paddingBottom: "4%" }}>
        As an undergraduate student, I have been involved in a variety of
        hackathons, organizations, and projects. I am currently the Attitude
        Determination and Control System Lead for Brown Space Engineering, where
        I am leading a team to design and implement a magnetorquer control
        system for a cubesat. I have participated in Hack@Brown and the Brown
        Mathematical Contest in Modeling, worked as a Teaching Assistant for a
        course on data structures and algorithms, and conducted research in
        computer vision and data science. I am also a member of Students Demand
        Action, a student-led organization that advocates for gun violence
        prevention.
      </Typography>
    </Box>
  );
}

export default About;
