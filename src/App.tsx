import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Background from "./components/Background";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import HomeButtonContainer from "./components/HomeButtonContainer";
import FaceDetection from "./pages/projects/FaceDetection";
import ParametricAnalysis from "./pages/projects/ParametricAnalysis";
import Eventify from "./pages/projects/Eventify";
import Lewas from "./pages/projects/Lewas";
import "./components/Scrollbar.css";

const App: React.FC = () => {
  return (
    <Router>
      <Background>
        <HomeButtonContainer>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />

            <Route
              path="/projects/stylegan-face-detection"
              element={<FaceDetection />}
            />
            <Route
              path="/projects/magnetorquer-parametric-analysis"
              element={<ParametricAnalysis />}
            />
            <Route path="/projects/eventify" element={<Eventify />} />
            <Route path="/projects/lewas-art-generator" element={<Lewas />} />
          </Routes>
        </HomeButtonContainer>
        <Nav />
      </Background>
    </Router>
  );
};

export default App;
