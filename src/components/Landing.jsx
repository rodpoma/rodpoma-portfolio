import React from "react";
import {MDBBtn, MDBContainer} from "mdbreact";

const Landing = () => {
  return (
    <MDBContainer className="flex-center">
      <a href="/somefile.txt" download>
        <MDBBtn gradient="blue">Download Resume</MDBBtn>
      </a>
    </MDBContainer>
  );
};

export default Landing;
