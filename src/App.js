import React from "react";
import {Container} from "react-bootstrap";
import AboutMe from "./components/AboutMe.jsx";
import ContactMe from "./components/ContactMe.jsx";
import Landing from "./components/Landing.jsx";
import Nav from "./components/Nav.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";

import "./App.css";

const App = () => {
  return (
    <Container>
      <Nav />
      <Container>
        <Landing />
        <AboutMe />
        <Skills />
        <Projects />
        <ContactMe />
      </Container>
    </Container>
  );
};

export default App;
