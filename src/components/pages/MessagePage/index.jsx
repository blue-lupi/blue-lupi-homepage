//> React
// Contains all the functionality necessary to define React components
import React from "react";
// Router
import { withRouter } from "react-router-dom";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import { MDBContainer } from "mdbreact";

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
              <h2>Impressum</h2>
              <p dangerouslySetInnerHTML={{ __html: data.about }}></p>
            </div>
          )}
          {this.props.location.pathname === "/privacy" && (
            <div className="text-left">
              <h2>Datenschutzerklärung</h2>
              <p dangerouslySetInnerHTML={{ __html: data.privacy }}></p>
            </div>
          )}
          {this.props.location.pathname === "/agb" && (
            <div className="text-left">
              <h2>Allgemeine Geschäfts- und Nutzungsbedingungen</h2>
              <p dangerouslySetInnerHTML={{ __html: data.gtc }}></p>
            </div>
          )}
          {this.props.location.pathname === "/shipping" && (
            <div className="text-left">
              <h2>Versand- und Zahlungsinformationen</h2>
              <p dangerouslySetInnerHTML={{ __html: data.shipping }}></p>
            </div>
          )}
          {this.props.location.pathname === "/widerruf" && (
            <div className="text-left">
              <h2>Widerruf</h2>
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
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
