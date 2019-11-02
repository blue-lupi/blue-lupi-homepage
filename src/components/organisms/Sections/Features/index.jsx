//> React
// Contains all the functionality necessary to define React components
import React from 'react';

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
    MDBContainer,
    MDBRow,
    MDBCol,
} from 'mdbreact';

//> Images
// To be added

//> CSS
import './features.scss';

//> Data
const data = {
  title: "Wieso Bluelupi?",
  reasons: [
    {
      title: "Bla bla bla",
      img: "https://i.pinimg.com/originals/d1/9e/ca/d19eca9e90b458c3af755f6cd35f04d9.jpg",
      lead: "Lead to catch attention",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus nisl ipsum, at 
venenatis ante interdum sit amet. Sed sit amet tempor augue. Fusce at convallis massa. 
Aliquam erat volutpat. Ut a portarisus, eu porttitor nisi. Pellentesque
turpis turpis, mattis lobortis justo sagittis, tempus ornare dui. Sed ornare nulla ac
nulla dapibus, eget vestibulum velit faucibus.`
    },
    {
      title: "Bla bla bla 2",
      img: "https://i.pinimg.com/originals/d1/9e/ca/d19eca9e90b458c3af755f6cd35f04d9.jpg",
      lead: "Lead to catch attention",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus nisl ipsum, at 
venenatis ante interdum sit amet. Sed sit amet tempor augue. Fusce at convallis massa. 
Aliquam erat volutpat. Ut a portarisus, eu porttitor nisi. Pellentesque
turpis turpis, mattis lobortis justo sagittis, tempus ornare dui. Sed ornare nulla ac
nulla dapibus, eget vestibulum velit faucibus.`
    },
    {
      title: "Bla bla bla 3",
      img: "https://i.pinimg.com/originals/d1/9e/ca/d19eca9e90b458c3af755f6cd35f04d9.jpg",
      lead: "Lead to catch attention",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus nisl ipsum, at 
venenatis ante interdum sit amet. Sed sit amet tempor augue. Fusce at convallis massa. 
Aliquam erat volutpat. Ut a portarisus, eu porttitor nisi. Pellentesque
turpis turpis, mattis lobortis justo sagittis, tempus ornare dui. Sed ornare nulla ac
nulla dapibus, eget vestibulum velit faucibus.`
    }
  ]
};

class Features extends React.Component{

  renderReasons = () => {

    let width = (data.reasons.length === 4 || data.reasons.length === 8) ? "3" : "4";

    let rtn = data.reasons.map((reason, i) => {
      return(
        <MDBCol md={width} key={i}>
            <img 
            className="img-fluid"
            src={reason.img}
            alt={reason.title}
            />
            <h2>{reason.title}</h2>
            <p className="lead">{reason.lead}</p>
            <p>{reason.text}</p>
        </MDBCol>
      );
    });

    return rtn;
  }

  render(){
    return(
      <section id="features">
        <MDBContainer>
          <h2 className="text-center font-weight-bold">{data.title}</h2>
          <MDBRow className="m-0 mt-5 text-center">
            {this.renderReasons()}
          </MDBRow>
        </MDBContainer>
      </section>
    );
  }
}

export default Features;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
