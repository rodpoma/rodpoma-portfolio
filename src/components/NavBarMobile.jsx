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
    <MDBNavbar color="blue-gradient" dark expand="md" className="nav" fixed="top">
      <MDBNavbarBrand href="/">
        <img src={PWL} alt="" height="30" />
      </MDBNavbarBrand>
      <MDBNavItem>
        <MDBNavLink to="/mobileMenu">
          <MDBIcon icon="bars" className="white-text" size="lg" />
        </MDBNavLink>
      </MDBNavItem>
    </MDBNavbar>
  );
};

export default NavBarMobile;
