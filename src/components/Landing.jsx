import React from "react";
import {MDBCol, MDBIcon, MDBBtn, MDBContainer, MDBAnimation} from "mdbreact";
import PWL from "./assets/Portfolio website logo.png";
import Resume from "./assets/Rodrigo Poma Resume- ATS 09_2020.pdf";
import MediaQuery from "react-responsive";

const Landing = () => {
  return (
    <MDBContainer className="cards" fluid>
      <MDBCol className="pink-text text-center mt-5">
        <MDBAnimation type="bounceInLeft" delay=".7s" className="flex-center">
          <img src={PWL} alt="" className="logo" />
        </MDBAnimation>
        <hr className="hr-light my-4 w-75" />
        <MDBAnimation type="bounceInRight" delay=".7s">
          <a href={Resume} download="Rodrigo Poma Resume">
            <MDBBtn outline rounded color="white">
              <MDBIcon icon="file-alt" /> Download Resume
            </MDBBtn>
          </a>
          <MediaQuery maxDeviceWidth={1200}>
            <div className="flex-center white-text">
              <a
                href="https://www.linkedin.com/in/rodrigopoma/"
                className="mr-3 mt-2"
              >
                <MDBIcon fab icon="linkedin" className="white-text" size="3x" />
              </a>
              <a href="https://github.com/rodpoma" className="ml-3 mt-2">
                <MDBIcon
                  fab
                  icon="github-square"
                  className="white-text"
                  size="3x"
                />
              </a>
            </div>
          </MediaQuery>
        </MDBAnimation>
      </MDBCol>
    </MDBContainer>
  );
};

export default Landing;
