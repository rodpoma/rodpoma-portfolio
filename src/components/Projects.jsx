import React from "react";
import {
  MDBContainer,
  MDBMedia,
  MDBBtn,
  MDBView,
  MDBMask,
  MDBAnimation,
} from "mdbreact";
import AR from "./assets/AR.JPG";
import WynIt from "./assets/WynIt.JPG";

const Projects = () => {
  return (
    <MDBContainer className="projects" fluid>
      <MDBMedia>
        <MDBMedia>
          <MDBAnimation type="fadeInLeft" delay=".3s">
            <MDBMedia left href="#">
              <MDBView hover zoom>
                <MDBMedia
                  object
                  src={AR}
                  alt="Generic placeholder image"
                  className="mr-5"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
                <MDBMask className="flex-center">
                  <MDBBtn
                    gradient="peach"
                    href="https://artroulette.herokuapp.com/"
                  >
                    Website
                  </MDBBtn>
                  <MDBBtn
                    gradient="peach"
                    href="https://github.com/rodpoma/C38_midterm_frances_natalia_rod"
                  >
                    Source
                  </MDBBtn>
                </MDBMask>
              </MDBView>
            </MDBMedia>
          </MDBAnimation>
        </MDBMedia>
        <MDBMedia>
          <MDBAnimation type="fadeInRight" delay=".3s">
            <MDBMedia left href="#">
              <MDBView hover zoom>
                <MDBMedia
                  object
                  src={WynIt}
                  alt="Generic placeholder image"
                  className="ml-5"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
                <MDBMask className="flex-center">
                  <MDBBtn gradient="blue" href="https://wynit.herokuapp.com/">
                    Website
                  </MDBBtn>
                  <MDBBtn
                    gradient="blue"
                    href="https://github.com/rodpoma/c38_final_timer"
                  >
                    Source
                  </MDBBtn>
                </MDBMask>
              </MDBView>
            </MDBMedia>
          </MDBAnimation>
        </MDBMedia>
      </MDBMedia>
    </MDBContainer>
  );
};

export default Projects;
