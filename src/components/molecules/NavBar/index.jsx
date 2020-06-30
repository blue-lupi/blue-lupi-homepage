//#region > Imports
//> React
import React, { Component } from "react";

//> Router DOM
import { BrowserRouter as Router } from "react-router-dom";

//> MDB
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBContainer,
  MDBMask,
  MDBView,
} from "mdbreact";

//> Images
// Logo of Blue Lupi (white)
import lupiLogoWhite from "../../../assets/logo_white.png";

//> SCSS
import "./navbar.scss";
//#endregion

//#region > Components
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <Router>
        <MDBNavbar
          color="unique-color"
          fixed="top"
          dark
          expand="md"
          scrolling
          scrollingNavbarOffset={100}
          transparent
        >
          <MDBNavbarBrand href="/">
            <img src={lupiLogoWhite} alt="Logo" className="navlogo" />
          </MDBNavbarBrand>
          {!this.state.isWideEnough && (
            <MDBNavbarToggler onClick={this.onClick} />
          )}
          <MDBCollapse isOpen={this.state.collapse} navbar>
            <MDBNavbarNav right>
              <MDBNavItem active>
                <MDBNavLink to="#">Home</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#">Link</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#">Link</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </Router>
    );
  }
}
//#endregion

//#region > Exports
export default NavBar;
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Werbeagentur Christian Aichner
 */
