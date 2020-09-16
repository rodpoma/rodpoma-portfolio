import React from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBIcon,
} from "mdbreact";
import PWL from "./assets/Portfolio website logo.png";

const Navbar = () => {
  return (
    <MDBNavbar color="blue-gradient" dark expand="md">
      <MDBNavbarBrand href="/" className="ml-5">
        <img src={PWL} alt="" height="60" />
      </MDBNavbarBrand>
      <MDBNavbarNav right>
        <MDBNavItem>
          <MDBNavLink className="white-text ml-2 mr-5" to="/about">
            <MDBIcon icon="user-astronaut" className="white-text" size="3x" />
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink className="white-text ml-2 mr-5" to="/skills">
            <MDBIcon icon="tools" className="white-text" size="3x" />
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink className="white-text ml-2 mr-5" to="/projects">
            <MDBIcon icon="code" className="white-text" size="3x" />
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink className="white-text ml-2 mr-5" to="/contact">
            <MDBIcon icon="envelope" className="white-text" size="3x" />
          </MDBNavLink>
        </MDBNavItem>
      </MDBNavbarNav>
    </MDBNavbar>
  );
};

export default Navbar;
