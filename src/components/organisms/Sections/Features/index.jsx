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
import { ReactComponent as Lupi1 } from '../../../../assets/content/sections/why/Lupinie_1.svg';
import { ReactComponent as Lupi2 } from '../../../../assets/content/sections/why/Lupinie_2.svg';
import { ReactComponent as Lupi3 } from '../../../../assets/content/sections/why/Lupinie_3.svg';

//> CSS
import './features.scss';

//> Data
const data = {
  title: "Wieso Bluelupi?",
  reasons: [
    {
      title: "Bla bla bla",
      img: <Lupi1/>,
      lead: "Lead to catch attention",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus nisl ipsum, at 
venenatis ante interdum sit amet. Sed sit amet tempor augue. Fusce at convallis massa. 
Aliquam erat volutpat. Ut a portarisus, eu porttitor nisi. Pellentesque
turpis turpis, mattis lobortis justo sagittis, tempus ornare dui. Sed ornare nulla ac
nulla dapibus, eget vestibulum velit faucibus.`
    },
    {
      title: "Bla bla bla 2",
      img: <Lupi2/>,
      lead: "Lead to catch attention",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus nisl ipsum, at 
venenatis ante interdum sit amet. Sed sit amet tempor augue. Fusce at convallis massa. 
Aliquam erat volutpat. Ut a portarisus, eu porttitor nisi. Pellentesque
turpis turpis, mattis lobortis justo sagittis, tempus ornare dui. Sed ornare nulla ac
nulla dapibus, eget vestibulum velit faucibus.`
    },
    {
      title: "Bla bla bla 3",
      img: <Lupi3/>,
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
            {reason.img}
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
