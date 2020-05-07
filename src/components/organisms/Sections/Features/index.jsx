//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

//> CSS
import "./features.scss";

class Features extends React.Component {
  renderReasons = (data) => {
    let width =
      data.whyColumns.length === 4 || data.whyColumns.length === 8 ? "3" : "4";

    let rtn = data.whyColumns.map((reason, i) => {
      return (
        <MDBCol md={width} key={i}>
          <img
            src={
              process.env.REACT_APP_BASEURL +
              this.props.images.find((image) => {
                return parseInt(image.id) === reason.value.Column_image;
              }).urlLink
            }
            className="img-fluid mb-3"
            alt={reason.value.Column_head}
          />
          <h2>{reason.value.Column_head}</h2>
          <p
            className="lead"
            dangerouslySetInnerHTML={{ __html: reason.value.Column_subhead }}
          ></p>
          <p
            dangerouslySetInnerHTML={{ __html: reason.value.Column_paragraph }}
          ></p>
        </MDBCol>
      );
    });

    return rtn;
  };

  render() {
    const { data } = this.props;

    return (
      <section id="features">
        <MDBContainer>
          <h2 className="text-center font-weight-bold">{data.whyHead}</h2>
          <MDBRow className="m-0 mt-5 text-center">
            {this.renderReasons(data)}
          </MDBRow>
        </MDBContainer>
      </section>
    );
  }
}

export default Features;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Werbeagentur Christian Aichner
 */
