import React from "react";
import AboutMe from "./components/AboutMe.jsx";
import ContactMe from "./components/ContactMe.jsx";
import Landing from "./components/Landing.jsx";
import NavBar from "./components/NavBar.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Footer from "./components/Footer.jsx";
import {Container} from "react-bootstrap";
import {BrowserRouter, Route} from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Container>
        <Route path="/" exact component={Landing} />
        <Route path="/about" component={AboutMe} />
        <Route path="/skills" component={Skills} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={ContactMe} />
      </Container>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
