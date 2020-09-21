import React from "react";
import {
  MDBContainer,
  MDBMedia,
  MDBBtn,
  MDBView,
  MDBMask,
  MDBAnimation,
  MDBCard,
} from "mdbreact";
import AR from "./assets/AR.JPG";
import WynIt from "./assets/WynIt.JPG";
import MediaQuery from "react-responsive";
import WynItLogo from "./assets/Wyn-it logo v3.png";
import ARLogo from "./assets/LOGO.png";

const Projects = () => {
  return (
    <MDBContainer className="projects" fluid>
      <MediaQuery minDeviceWidth={1201}>
        <MDBMedia>
          <MDBMedia>
            <MDBAnimation type="fadeInLeft" delay=".3s">
              <MDBMedia>
                <MDBView hover zoom>
                  <MDBMedia
                    object
                    src={AR}
                    alt="ArtRoulette"
                    className="mr-2"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                  <MDBMask className="flex-center">
                    <MDBContainer>
                      <MDBContainer className="red-text text-center mb-2">
                        <MDBCard className="py-2">
                          <strong>Art Roulette</strong>
                          <p>
                            An App focues around a Quiz that leads you to an art
                            gallery. Each gallery is pulled from the Harvard Art
                            Museums API.
                          </p>
                        </MDBCard>
                      </MDBContainer>
                      <MDBContainer className="flex-center">
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
                      </MDBContainer>
                    </MDBContainer>
                  </MDBMask>
                </MDBView>
              </MDBMedia>
            </MDBAnimation>
          </MDBMedia>
          <MDBMedia>
            <MDBAnimation type="fadeInRight" delay=".3s">
              <MDBMedia>
                <MDBView hover zoom>
                  <MDBMedia
                    object
                    src={WynIt}
                    alt="Wynit"
                    className="ml-2"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                  <MDBMask className="flex-center">
                    <MDBContainer>
                      <MDBContainer className="pink-text text-center mb-2">
                        <MDBCard className="py-2">
                          <strong>WynIt Productivity Timer</strong>
                          <p>
                            A timer/scheduler application that also stores work
                            sessions and lets you plan ahead for future ones.
                          </p>
                        </MDBCard>
                      </MDBContainer>
                      <MDBContainer className="flex-center">
                        <MDBBtn
                          gradient="blue"
                          href="https://wynit.herokuapp.com/"
                        >
                          Website
                        </MDBBtn>
                        <MDBBtn
                          gradient="blue"
                          href="https://github.com/rodpoma/c38_final_timer"
                        >
                          Source
                        </MDBBtn>
                      </MDBContainer>
                    </MDBContainer>
                  </MDBMask>
                </MDBView>
              </MDBMedia>
            </MDBAnimation>
          </MDBMedia>
        </MDBMedia>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={1200}>
        <MDBAnimation type="fadeInLeft" delay=".3s">
          <MDBContainer className="white-text text-center mb-2">
            <strong>Art Roulette</strong>
            <p>
              An App focues around a Quiz that leads you to an art gallery. Each
              gallery is pulled from the Harvard Art Museums API.
            </p>
          </MDBContainer>
          <MDBContainer className="flex-direction-column flex-center mb-5">
            <MDBMedia
              object
              src={ARLogo}
              alt="Wyn-It logo"
              className="mr-2 mb-2"
              style={{
                width: "120px",
                height: "auto",
              }}
            />
            <div className="flex-center">
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
            </div>
          </MDBContainer>
        </MDBAnimation>
        <MDBAnimation type="fadeInLeft" delay=".3s">
          <MDBContainer className="white-text text-center mb-2">
            <strong>WynIt Productivity Timer</strong>
            <p>
              A timer/scheduler application that also stores work sessions and
              lets you plan ahead for future ones.
            </p>
          </MDBContainer>
          <MDBContainer className="flex-direction-column flex-center">
            <MDBMedia
              object
              src={WynItLogo}
              alt="AR Logo"
              className="ml-2 mb-2"
              style={{
                width: "120px",
                height: "auto",
              }}
            />
            <div className="flex-center">
              <MDBBtn gradient="blue" href="https://wynit.herokuapp.com/">
                Website
              </MDBBtn>
              <MDBBtn
                gradient="blue"
                href="https://github.com/rodpoma/c38_final_timer"
              >
                Source
              </MDBBtn>
            </div>
          </MDBContainer>
        </MDBAnimation>
      </MediaQuery>
    </MDBContainer>
  );
};

export default Projects;
