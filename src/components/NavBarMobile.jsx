import React from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavItem,
  MDBNavLink,
  MDBIcon,
} from "mdbreact";
import PWL from "./assets/Portfolio website logo INIT.png";

const NavBarMobile = () => {
  return (
    <MDBNavbar color="blue-gradient" dark expand="md" className="nav">
      <MDBNavbarBrand href="/" className="ml-5">
        <img src={PWL} alt="" height="30" />
      </MDBNavbarBrand>
      {/* <MDBNavItem>
        <MDBNavLink to="/about">
          <MDBIcon icon="user-astronaut" className="white-text" />
        </MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink to="/skills">
          <MDBIcon icon="tools" className="white-text" />
        </MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink to="/projects">
          <MDBIcon icon="code" className="white-text" />
        </MDBNavLink>
      </MDBNavItem> */}
      <MDBNavItem>
        <MDBNavLink to="/contact">
          <MDBIcon icon="envelope" className="white-text" />
        </MDBNavLink>
      </MDBNavItem>
    </MDBNavbar>
  );
};

export default NavBarMobile;
