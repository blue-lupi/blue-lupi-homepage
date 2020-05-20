//> React
// Contains all the functionality necessary to define React components
import React from "react";
// Router
import { Link, withRouter } from "react-router-dom";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import { MDBContainer, MDBBtn, MDBIcon } from "mdbreact";

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
              <hr />
              {localStorage.getItem("cookie") ? (
                <>
                  <p className="green-text">Sie haben Cookies akzeptiert.</p>
                  <p>
                    <MDBIcon icon="check-circle" className="green-text mr-2" />
                    Essenziell
                  </p>
                  {JSON.parse(localStorage.getItem("cookie")).marketing ? (
                    <p>
                      <MDBIcon
                        icon="check-circle"
                        className="green-text mr-2"
                      />
                      Marketing
                    </p>
                  ) : (
                    <p>
                      <MDBIcon icon="times-circle" className="red-text mr-2" />
                      Marketing
                    </p>
                  )}
                  {JSON.parse(localStorage.getItem("cookie")).statistics ? (
                    <p>
                      <MDBIcon
                        icon="check-circle"
                        className="green-text mr-2"
                      />
                      Statistiken
                    </p>
                  ) : (
                    <p>
                      <MDBIcon icon="times-circle" className="red-text mr-2" />
                      Statistiken
                    </p>
                  )}
                  <MDBBtn
                    onClick={() => {
                      localStorage.removeItem("cookie");
                      window.location.reload();
                    }}
                    color="danger"
                    size="sm"
                  >
                    Einwilligung zurückziehen
                  </MDBBtn>
                </>
              ) : (
                <p className="red-text">
                  Sie haben die Cookies nicht akzeptiert.
                </p>
              )}
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
