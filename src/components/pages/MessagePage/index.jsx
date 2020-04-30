//> React
// Contains all the functionality necessary to define React components
import React from "react";
// Router
import { Link, withRouter } from "react-router-dom";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import { MDBContainer, MDBBtn } from "mdbreact";

class MessagePage extends React.Component {
  render() {
    const { globalState } = this.props;
    const data = globalState ? globalState.page : null;

    if (!data || !this.props.location) {
      return (
        <div className="py-5 my-5 flex-center">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    } else {
      return (
        <MDBContainer id="message" className="py-5 my-5 text-center">
          {this.props.location.pathname === "/about" && (
            <div className="text-left">
              <Link to="/">
                <MDBBtn color="elegant" className="mb-4">
                  Zurück
                </MDBBtn>
              </Link>
              <h2>Impressum</h2>
              <p dangerouslySetInnerHTML={{ __html: data.about }}></p>
            </div>
          )}
          {this.props.location.pathname === "/privacy" && (
            <div className="text-left">
              <Link to="/">
                <MDBBtn color="elegant" className="mb-4">
                  Zurück
                </MDBBtn>
              </Link>
              <p dangerouslySetInnerHTML={{ __html: data.privacy }}></p>
            </div>
          )}
          {this.props.location.pathname === "/agb" && (
            <div className="text-left">
              <Link to="/">
                <MDBBtn color="elegant" className="mb-4">
                  Zurück
                </MDBBtn>
              </Link>
              <p dangerouslySetInnerHTML={{ __html: data.gtc }}></p>
            </div>
          )}
          {this.props.location.pathname === "/shipping" && (
            <div className="text-left">
              <Link to="/">
                <MDBBtn color="elegant" className="mb-4">
                  Zurück
                </MDBBtn>
              </Link>
              <p dangerouslySetInnerHTML={{ __html: data.shipping }}></p>
            </div>
          )}
          {this.props.location.pathname === "/cancellation" && (
            <div className="text-left">
              <Link to="/">
                <MDBBtn color="elegant" className="mb-4">
                  Zurück
                </MDBBtn>
              </Link>
              <p
                dangerouslySetInnerHTML={{ __html: data.cancellationPolicy }}
              ></p>
            </div>
          )}
        </MDBContainer>
      );
    }
  }
}

export default withRouter(MessagePage);

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Werbeagentur Christian Aichner
 */
