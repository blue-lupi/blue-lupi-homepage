//> React
// Contains all the functionality necessary to define React components
import React from 'react';

// Links (replaces <a> tags)
import { Link } from 'react-router-dom';

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBFooter,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBIcon,
} from 'mdbreact';

//> Data
const data = {
  email: "info@bluelupi.at",
  tel: "+43 111 123 123 12",
}

class Footer extends React.Component{
  render(){
    return(
      <MDBFooter color="elegant-color">
        <MDBContainer className="text-center py-3">
          <Link
          to="/about"
          >
          Impressum
          </Link>
          <span className="pl-2 pr-2">·</span>
          <Link
          to="/terms"
          >
          Terms and Conditions
          </Link>
          <span className="pl-2 pr-2">·</span>
          <Link
          to="/privacy"
          >
          Datenschutz
          </Link>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; 2017 - {new Date().getFullYear()} Copyright: Blue Lupi
            <p className="my-2 font-weight-bold">
              Made with
              <i className="fas fa-heart pulse red-text ml-1 mr-1" aria-hidden="true"></i>
              by
              <a
              href="https://www.aichner-christian.com" 
              target="_blank"
              className="ml-1"
              rel="noopener noreferrer"
              >
              Werbeagentur Christian Aichner
              </a>
            </p>
          </MDBContainer>
        </div>
      </MDBFooter>
    );
  }
}

export default Footer;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
