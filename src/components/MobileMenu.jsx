import React from "react";
import {
  MDBContainer,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBBtn,
  MDBIcon,
  MDBAnimation,
} from "mdbreact";

const MobileMenu = () => {
  return (
    <MDBContainer fluid>
      <MDBNav className="mobileMenu">
        <MDBNavItem>
          <MDBNavLink className="mobile-link" to="/about">
            <MDBAnimation type="fadeIn" delay=".3s">
              <MDBBtn outline rounded color="white">
                <MDBIcon icon="user-astronaut" /> About
              </MDBBtn>
            </MDBAnimation>
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink className="mobile-link" to="/skills">
            <MDBAnimation type="fadeIn" delay=".6s">
              <MDBBtn outline rounded color="white">
                <MDBIcon icon="tools" /> Skills
              </MDBBtn>
            </MDBAnimation>
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink className="mobile-link" to="/projects">
            <MDBAnimation type="fadeIn" delay=".9s">
              <MDBBtn outline rounded color="white">
                <MDBIcon icon="code" /> Projects
              </MDBBtn>
            </MDBAnimation>
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink className="mobile-link" to="/contact">
            <MDBAnimation type="fadeIn" delay="1.2s">
              <MDBBtn outline rounded color="white">
                <MDBIcon icon="envelope" /> Contact
              </MDBBtn>
            </MDBAnimation>
          </MDBNavLink>
          <div className="flex-center white-text">
            <a
              href="https://www.linkedin.com/in/rodrigopoma/"
              className="mr-3 mt-2"
            >
              <MDBAnimation type="fadeIn" delay="1.5s">
                <MDBIcon fab icon="linkedin" className="white-text" size="3x" />
              </MDBAnimation>
            </a>
            <a href="https://github.com/rodpoma" className="ml-3 mt-2">
              <MDBAnimation type="fadeIn" delay="1.8s">
                <MDBIcon
                  fab
                  icon="github-square"
                  className="white-text"
                  size="3x"
                />
              </MDBAnimation>
            </a>
          </div>
        </MDBNavItem>
      </MDBNav>
    </MDBContainer>
  );
};

export default MobileMenu;
