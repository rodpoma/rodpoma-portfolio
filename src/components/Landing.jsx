import React from "react";
import {MDBCol, MDBIcon, MDBBtn, MDBContainer, MDBAnimation} from "mdbreact";
import PWL from "./assets/Portfolio website logo.png";
import Resume from "./assets/Rodrigo Poma Resume- ATS 09_2020.pdf";

const Landing = () => {
  return (
    <MDBContainer className="cards" fluid>
      <MDBCol className="pink-text text-center mt-5">
        <MDBAnimation type="bounceInLeft" delay=".7s" className="flex-center">
          <img src={PWL} alt="" height="200" />
        </MDBAnimation>
        <hr className="hr-light my-4 w-75" />
        <MDBAnimation type="bounceInRight" delay=".7s">
          <a href={Resume} download="Rodrigo Poma Resume">
            <MDBBtn outline rounded color="white">
              <MDBIcon icon="file-alt" /> Download Resume
            </MDBBtn>
          </a>
        </MDBAnimation>
      </MDBCol>
    </MDBContainer>
  );
};

export default Landing;
