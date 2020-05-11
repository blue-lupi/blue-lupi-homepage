//> React
// Contains all the functionality necessary to define React components
import React from "react";
// React Router
import { Link } from "react-router-dom";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBFooter,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBBtn,
  MDBIcon,
} from "mdbreact";

//> CSS
import "./footer.scss";

//> Images
/*import payPalImg from "../../../assets/content/trusted/paypal.png";
import masterCardImg from "../../../assets/content/trusted/mastercard.png";
import visaCardImg from "../../../assets/content/trusted/visa.png";
import sofortImg from "../../../assets/content/trusted/sofort.png";*/

class Footer extends React.Component {
  state = {};

  render() {
    const { sections, images } = this.props;

    // Get trusted partners logos
    const trusted =
      sections &&
      sections.find(
        (section) => section.__typename === "Home_S_SmallTrustedBlock"
      );

    return (
      <MDBFooter color="white" className="font-small text-dark pt-4">
        <MDBContainer className="text-center text-md-left py-3">
          <MDBRow className="d-flex justify-content-center">
            <MDBCol md="5" className="text-left">
              <p className="font-weight-bold lead mb-2">Zahlungsarten</p>
              <div className="trusted"></div>
            </MDBCol>
            <MDBCol md="4" className="text-left">
              <p className="font-weight-bold lead mb-2">
                Bei uns kaufen Sie sicher
              </p>
              <div className="trusted">
                {trusted &&
                  trusted.trustedPartner.map((partner, i) => {
                    return (
                      <img
                        src={
                          process.env.REACT_APP_BASEURL +
                          images.find((image) => {
                            return (
                              parseInt(image.id) === partner.value.partner_logo
                            );
                          }).urlLink
                        }
                        alt="Partner"
                        key={i}
                      />
                    );
                  })}
              </div>
            </MDBCol>
          </MDBRow>
          <MDBRow className="flex-center mt-3 align-items-initial">
            <MDBCol md="3" className="text-center">
              <p className="font-weight-bold lead text-left mb-2">
                Rechtliches
              </p>
              <Link to="about">
                <li className="list-unstyled">Impressum</li>
              </Link>
              <Link to="privacy">
                <li className="list-unstyled">Datenschutzerklärung</li>
              </Link>
              <Link to="agb">
                <li className="list-unstyled">Nutzungsbedingungen</li>
              </Link>
            </MDBCol>
            <MDBCol md="3" className="text-center">
              <p className="font-weight-bold lead text-left mb-2">
                Sicheres Gefühl
              </p>
              <Link to="cancellation">
                <li className="list-unstyled">Widerruf</li>
              </Link>
              <Link to="shipping">
                <li className="list-unstyled">Versand</li>
              </Link>
            </MDBCol>
            <MDBCol md="3" className="text-left">
              <p className="font-weight-bold lead text-left mb-2">
                Kundensupport
              </p>
              <p>+43 660 4590412</p>
              <p className="font-weight-bold mt-3">Kontakt über Facebook</p>
              <div>
                <a
                  href="https://www.facebook.com/bluelupi/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MDBBtn color="blue" className="w-100 m-0">
                    <MDBIcon fab icon="facebook-messenger" />
                    Facebook Messenger
                  </MDBBtn>
                </a>
              </div>
              <p className="font-weight-bold mt-3">Kontakt per E-Mail</p>
              <div>
                <a href="mailto:office@blue-lupi.at">
                  <MDBBtn color="elegant" className="w-100 m-0">
                    <MDBIcon far icon="envelope" />
                    E-Mail
                  </MDBBtn>
                </a>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3 text-dark">
          <MDBContainer fluid>
            <div>
              &copy; {new Date().getFullYear()} Copyright: Andreas Macnik
              <p className="my-2 font-weight-bold">
                Made with
                <i
                  className="fas fa-heart pulse red-text ml-1 mr-1"
                  aria-hidden="true"
                ></i>
                by
                <a
                  href="https://www.aichner-christian.com/?ref=macnik"
                  target="_blank"
                  className="ml-1 text-dark underlined"
                  rel="noopener noreferrer"
                >
                  Werbeagentur Christian Aichner
                </a>
              </p>
            </div>
            <div>
              <small>
                Stable release
                <span className="pl-2 pr-2">·</span>
                Version v{process.env.REACT_APP_VERSION}
                <span className="pl-2 pr-2">·</span>
                <a
                  href="https://github.com/blue-lupi/blue-lupi-homepage"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-dark"
                >
                  <MDBIcon fab icon="github" className="pr-2" />
                  View on GitHub
                </a>
                <span className="pl-2 pr-2">·</span>
                <a
                  href="https://github.com/blue-lupi/blue-lupi-homepage/issues/new?template=bug_report.md"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-dark"
                >
                  <MDBIcon icon="bug" className="pr-2" />
                  Report bug
                </a>
              </small>
            </div>
          </MDBContainer>
        </div>
      </MDBFooter>
    );
  }
}

export default Footer;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Werbeagentur Christian Aichner
 */
