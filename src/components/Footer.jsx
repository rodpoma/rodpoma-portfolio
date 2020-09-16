import React from "react";
import {MDBContainer, MDBCol, MDBRow, MDBFooter, MDBIcon} from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="blue-gradient" className="footer">
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          <MDBRow>
            <MDBCol>
              <span className="mr-5 align-text-center">Connect with me!</span>
              <span>LinkedIn: </span>
              <a href="https://linkedin.com/in/rodrigpoma" className="mr-5">
                <MDBIcon fab icon="linkedin" className="white-text" size="lg" />
              </a>
              <span>Github: </span>
              <a href="https://github.com/rodpoma" className="mr-5">
                <MDBIcon
                  fab
                  icon="github-square"
                  className="white-text"
                  size="lg"
                />
              </a>
            </MDBCol>
            <MDBCol>
              &copy; {new Date().getFullYear()} Copyright:
              <a href="https://www.rodpoma.com"> rodpoma.com </a>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
