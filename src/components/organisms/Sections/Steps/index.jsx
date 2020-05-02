//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

//> CSS
import "./steps.scss";

class Story extends React.Component {
  renderSteps = (data) => {
    let rtn = data.stepsSteps.map((step, i) => {
      if (i % 2 !== 1) {
        // img L
        return (
          <React.Fragment key={i}>
            <MDBCol md="6">
              <img
                src={
                  process.env.REACT_APP_BASEURL +
                  this.props.images.find((image) => {
                    return parseInt(image.id) === step.value.step_image;
                  }).urlLink
                }
                className="img-fluid mb-5"
                alt={step.value.step_head}
              />
            </MDBCol>
            <MDBCol md="6" className="pr-5 pl-5">
              <h2>{step.value.step_head}</h2>
              <p
                className="lead"
                dangerouslySetInnerHTML={{ __html: step.value.step_subhead }}
              ></p>
              <p
                dangerouslySetInnerHTML={{ __html: step.value.step_paragraph }}
              ></p>
            </MDBCol>
          </React.Fragment>
        );
      } else {
        // img R
        return (
          <React.Fragment key={i}>
            <MDBCol md="6" className="d-block d-sm-none">
              <img
                src={
                  process.env.REACT_APP_BASEURL +
                  this.props.images.find((image) => {
                    return parseInt(image.id) === step.value.step_image;
                  }).urlLink
                }
                className="img-fluid mb-5"
                alt={step.value.step_head}
              />
            </MDBCol>
            <MDBCol md="6" className="pr-5 pl-5">
              <h2>{step.value.step_head}</h2>
              <p
                className="lead"
                dangerouslySetInnerHTML={{ __html: step.value.step_subhead }}
              ></p>
              <p
                dangerouslySetInnerHTML={{ __html: step.value.step_paragraph }}
              ></p>
            </MDBCol>
            <MDBCol md="6" className="d-none d-sm-block">
              <img
                src={
                  process.env.REACT_APP_BASEURL +
                  this.props.images.find((image) => {
                    return parseInt(image.id) === step.value.step_image;
                  }).urlLink
                }
                className="img-fluid mb-5"
                alt={step.value.step_head}
              />
            </MDBCol>
          </React.Fragment>
        );
      }
    });

    return rtn;
  };

  render() {
    const { data } = this.props;

    return (
      <section id="steps">
        <MDBContainer>
          {data.stepsDisplayhead && (
            <h2 className="text-center font-weight-bold">{data.stepsHead}</h2>
          )}
          <MDBRow className="m-0 mt-5">{this.renderSteps(data)}</MDBRow>
        </MDBContainer>
      </section>
    );
  }
}

export default Story;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Werbeagentur Christian Aichner
 */
