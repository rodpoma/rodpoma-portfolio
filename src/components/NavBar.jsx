import React, {useState} from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBIcon,
  MDBView,
  MDBMask,
  MDBHamburgerToggler,
  MDBCollapse,
} from "mdbreact";
import PWL from "./assets/Portfolio website logo INIT.png";

const Navbar = () => {
  const [burger, setBurger] = useState(false);
  const toggleBurger = () => {
    setBurger(!burger);
  };
  return (
    <MDBNavbar color="blue-gradient" dark expand="md">
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

        <MDBHamburgerToggler className="mobileNav" onClick={toggleBurger} />
        <MDBCollapse isOpen={burger === true}>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="#!">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Link</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Profile</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbarNav>
    </MDBNavbar>
  );
};

export default Navbar;
