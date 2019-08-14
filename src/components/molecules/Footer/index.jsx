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

class Footer extends React.Component{
    render(){
        return(
            <MDBFooter color="elegant-color">
                <MDBContainer className="text-center text-md-left pt-4">
                    <MDBRow>
                        <MDBCol md="4">
                            <h5 className="title">Dienste</h5>
                            <hr className="agency-red mb-4 mt-0 d-inline-block" />
                            <ul>
                            <li className="list-unstyled">
                                <Link to="/service/online-presence">
                                <   MDBIcon icon="globe" />Shop
                                </Link>
                            </li>
                            </ul>
                        </MDBCol>
                        <MDBCol md="4">
                            <h5 className="title">Nützliche Links</h5>
                            <hr className="agency-red mb-4 mt-0 d-inline-block" />
                            <ul>
                            <li className="list-unstyled">
                                <Link to="/faq">
                                    <MDBIcon icon="question" />FAQ
                                </Link>
                            </li>
                            </ul>
                        </MDBCol>
                        <MDBCol md="4">
                            <h5 className="title">Kontakt</h5>
                            <hr className="agency-red mb-4 mt-0 d-inline-block" />
                            <ul>
                            <li className="list-unstyled">
                                <MDBIcon icon="home" />Kärnten, Austria
                            </li>
                            <li className="list-unstyled">
                                <a href="mailto:ci@s.co">
                                    <MDBIcon far icon="envelope" />ci@s.co
                                </a>
                            </li>
                            <li className="list-unstyled">
                                <a href="tel:004368120502754">
                                    <MDBIcon icon="phone" />+43 111 123 123 12
                                </a>
                            </li>
                            <hr />
                            <li className="list-unstyled">
                                <Link to="/about">
                                    <MDBIcon far icon="file-alt" />Impressum
                                </Link>
                            </li>
                            <li className="list-unstyled">
                                <Link to="/privacy">
                                    <MDBIcon icon="balance-scale" />Datenschutzerklärung
                                </Link>
                            </li>
                            </ul>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid>
                        &copy; 2017 - {new Date().getFullYear()} Copyright: Blue Lupi
                        <p className="my-2 font-weight-bold">
                            Made with <i className="fas fa-heart pulse red-text" aria-hidden="true"></i> by <a href="https://www.aichner-christian.com">Werbeagentur Christian Aichner</a>
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
