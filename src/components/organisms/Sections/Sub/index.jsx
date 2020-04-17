//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

//> Images
import { ReactComponent as MoonAndWolf } from "../../../../assets/content/sections/sub/moonandwolf.svg";

class Sub extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <section id="subscription" className="balckwolfsection">
        <MDBContainer>
          <MDBRow className="m-0 flex-center">
            <MDBCol md="8">
              <h2 className="h2-responsive font-weight-bold">
                {data.wolfHead}
              </h2>
              <p
                className="lead"
                dangerouslySetInnerHTML={{ __html: data.wolfSubhead }}
              ></p>
            </MDBCol>
            <MDBCol md="4">
              <MoonAndWolf id="wolfandmoon" />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    );
  }
}

export default Sub;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
