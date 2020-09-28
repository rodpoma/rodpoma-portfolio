import React from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBIcon,
  MDBView,
  MDBMask,
} from "mdbreact";
import PWL from "./assets/Portfolio website logo INIT.png";

const Navbar = () => {
  return (
    <MDBNavbar color="blue-gradient" dark expand="md" fixed="top">
      <MDBNavbarBrand href="/" className="ml-5">
        <img src={PWL} alt="" height="60" />
      </MDBNavbarBrand>
      <MDBNavbarNav className="web" right>
        <MDBView hover>
          <MDBNavItem>
            <MDBNavLink className="icon-link" to="/about">
              <MDBIcon icon="user-astronaut" className="white-text" size="3x" />
              <MDBMask className="icon-hover">
                <h5 className="pink-text bold">About</h5>
              </MDBMask>
            </MDBNavLink>
          </MDBNavItem>
        </MDBView>
        <MDBView hover zoom>
          <MDBNavItem>
            <MDBNavLink className="icon-link" to="/skills">
              <MDBIcon icon="tools" className="white-text" size="3x" />
              <MDBMask className="icon-hover">
                <h5 className="pink-text bold">Skills</h5>
              </MDBMask>
            </MDBNavLink>
          </MDBNavItem>
        </MDBView>
        <MDBView hover zoom>
          <MDBNavItem>
            <MDBNavLink className="icon-link" to="/projects">
              <MDBIcon icon="code" className="white-text" size="3x" />
              <MDBMask className="icon-hover">
                <h5 className="pink-text bold">Projects</h5>
              </MDBMask>
            </MDBNavLink>
          </MDBNavItem>
        </MDBView>
        <MDBView hover zoom>
          <MDBNavItem>
            <MDBNavLink className="icon-link" to="/contact">
              <MDBIcon icon="envelope" className="white-text" size="3x" />
              <MDBMask className="icon-hover">
                <h6 className="pink-text bold">Contact</h6>
              </MDBMask>
            </MDBNavLink>
          </MDBNavItem>
        </MDBView>
      </MDBNavbarNav>
    </MDBNavbar>
  );
};

export default Navbar;
