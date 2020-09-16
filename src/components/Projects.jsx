import React from "react";
import {MDBContainer, MDBMedia, MDBBtn} from "mdbreact";
import AR from "./assets/AR.JPG";
import WynIt from "./assets/WynIt.JPG";

const Projects = () => {
  return (
    <MDBContainer fluid className="projects">
      <MDBMedia list className="mb-5">
        <MDBMedia>
          <MDBMedia left href="#">
            <MDBMedia
              object
              src={AR}
              alt="Generic placeholder image"
              height="300"
              className="mr-5"
            />
            <MDBBtn gradient="blue" href="https://artroulette.herokuapp.com/">
              Website
            </MDBBtn>
            <MDBBtn
              gradient="blue"
              href="https://github.com/rodpoma/C38_midterm_frances_natalia_rod"
            >
              Source Code
            </MDBBtn>
          </MDBMedia>
        </MDBMedia>

        <MDBMedia className="mt-5">
          <MDBMedia left href="#">
            <MDBMedia
              object
              src={WynIt}
              alt="Generic placeholder image"
              height="300"
              className="mr-5"
            />
            <MDBBtn gradient="blue" href="https://wynit.herokuapp.com/">
              Website
            </MDBBtn>
            <MDBBtn
              gradient="blue"
              href="https://github.com/rodpoma/c38_final_timer"
            >
              Source Code
            </MDBBtn>
          </MDBMedia>
        </MDBMedia>
      </MDBMedia>
    </MDBContainer>
  );
};

export default Projects;
