import React from "react";
import {MDBCol, MDBIcon, MDBBtn, MDBContainer, MDBAnimation} from "mdbreact";
import PWL from "./assets/Portfolio website logo.png";

const Landing = () => {
  return (
    <MDBContainer className="cards" fluid>
      <MDBCol className="pink-text text-center mt-5">
        <MDBAnimation type="shake" delay=".7s" className="flex-center">
          <img src={PWL} alt="" height="200" />
        </MDBAnimation>
        <hr className="hr-light my-4 w-75" />
        <MDBBtn outline rounded color="white">
          <MDBIcon icon="file-alt" /> Download Resume
        </MDBBtn>
      </MDBCol>
    </MDBContainer>
  );
};

export default Landing;
