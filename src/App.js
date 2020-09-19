import React from "react";
import AboutMe from "./components/AboutMe.jsx";
import ContactMe from "./components/ContactMe.jsx";
import Landing from "./components/Landing.jsx";
import NavBar from "./components/NavBar.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Footer from "./components/Footer.jsx";
import {MDBContainer, MDBView} from "mdbreact";
import {BrowserRouter, Route} from "react-router-dom";

import "./App.css";
import "mdbreact/dist/css/mdb.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import MHI from "./components/assets/MIAMI_HEAT_VICE_WAVE_INTRO[youtubetomp4.org].mp4";
require("dotenv").config();

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <MDBContainer id="videobackground" fluid>
        <MDBView>
          <video
            className="video-intro"
            playsInline
            autoPlay
            loop
            style={{
              objectFit: "cover",
              width: "100vw",
              position: "fixed",
              top: 0,
              left: 0,
            }}
          >
            <source src={MHI} type="video/mp4" />
          </video>
          <Route path="/" exact component={Landing} />
          <Route path="/about" component={AboutMe} />
          <Route path="/skills" component={Skills} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={ContactMe} />
        </MDBView>
      </MDBContainer>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
