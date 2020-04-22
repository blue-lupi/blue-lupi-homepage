//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> Additional libraies
// Scroll
import { Link } from "react-scroll";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import { MDBRow, MDBCol, MDBCard } from "mdbreact";

//> CSS
import "./about.scss";

//> Images
import { ReactComponent as Wolf } from "../../../../assets/content/sections/about/wolf.svg";

class About extends React.Component {
  renderCardsLeft = (data) => {
    let cards = data.aboutCards;
    let rtn = cards.map((card, i) => {
      if (i % 2 !== 1) {
        return (
          <MDBCard className="p-4" key={"l_" + i}>
            <h3>{card.value.card_head}</h3>
            <p
              dangerouslySetInnerHTML={{ __html: card.value.card_paragraph }}
            ></p>
          </MDBCard>
        );
      } else {
        return undefined;
      }
    });

    return rtn;
  };

  renderCardsRight = (data) => {
    let cards = data.aboutCards;
    let rtn = cards.map((card, i) => {
      if (i % 2 === 1) {
        return (
          <MDBCard className="p-4" key={"r_" + i}>
            <h3>{card.value.card_head}</h3>
            <p
              dangerouslySetInnerHTML={{ __html: card.value.card_paragraph }}
            ></p>
          </MDBCard>
        );
      } else {
        return undefined;
      }
    });

    return rtn;
  };

  render() {
    const { data } = this.props;

    return (
      <section id="about">
        <h2 className="font-weight-bold text-center">{data.aboutHead}</h2>
        <MDBRow className="m-0 p-2 flex-center">
          <MDBCol md="6" className="d-block d-xl-none">
            {this.renderCardsLeft(data)}
          </MDBCol>
          <MDBCol md="4" className="d-none d-xl-block">
            {this.renderCardsLeft(data)}
          </MDBCol>
          <MDBCol md="2" className="text-center d-none d-xl-block">
            <Link to="subscription" smooth={true} spy={true} duration={300}>
              <div className="circle">
                <div className="icon">
                  <Wolf />
                </div>
              </div>
            </Link>
          </MDBCol>
          <MDBCol md="6" className="d-block d-xl-none">
            {this.renderCardsRight(data)}
          </MDBCol>
          <MDBCol md="4" className="d-none d-xl-block">
            {this.renderCardsRight(data)}
          </MDBCol>
        </MDBRow>
      </section>
    );
  }
}

export default About;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Werbeagentur Christian Aichner
 */
