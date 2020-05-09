//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import { MDBRow, MDBCol } from "mdbreact";

//> CSS
import "./trust.scss";

class Trust extends React.Component {
  render() {
    const { data, images, size } = this.props;

    return (
      <section
        id="trust"
      >
        <MDBRow className="flex-center m-0">
          {data.trustedPartner.map((company, i) => {
            return (
              <MDBCol key={i} md="2" className="text-center">
                <a
                  href={company.value.partner_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={
                      process.env.REACT_APP_BASEURL +
                      images.find((image) => {
                        return (
                          parseInt(image.id) === company.value.partner_logo
                        );
                      }).urlLink
                    }
                    alt="Partner logo"
                    className={
                      size
                        ? size === "sm"
                          ? "img-fluid my-1"
                          : "img-fluid my-3"
                        : "img-fluid my-3"
                    }
                  />
                </a>
              </MDBCol>
            );
          })}
        </MDBRow>
      </section>
    );
  }
}

export default Trust;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Werbeagentur Christian Aichner
 */
