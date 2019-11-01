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
import './steps.scss';

//> Data
const data = {
  title: "Wie wird Blue Lupi produziert?",
  steps: [
    {
      title: "Bla bla bla",
      lead: "Lead to catch attention",
      img: "https://i.pinimg.com/originals/d1/9e/ca/d19eca9e90b458c3af755f6cd35f04d9.jpg",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus nisl ipsum, at 
venenatis ante interdum sit amet. Sed sit amet tempor augue. Fusce at convallis massa. 
Aliquam erat volutpat. Ut a portarisus, eu porttitor nisi. Pellentesque
turpis turpis, mattis lobortis justo sagittis, tempus ornare dui. Sed ornare nulla ac
nulla dapibus, eget vestibulum velit faucibus.`
    },
    {
      title: "Bla bla bla 2 ",
      lead: "Lead to catch attention",
      img: "https://previews.123rf.com/images/arkadivna/arkadivna1705/arkadivna170500001/78085874-coffee-machine-isolated-on-white-background-vector-illustration-of-a-sketch-style-.jpg",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus nisl ipsum, at 
venenatis ante interdum sit amet. Sed sit amet tempor augue. Fusce at convallis massa. 
Aliquam erat volutpat. Ut a portarisus, eu porttitor nisi. Pellentesque
turpis turpis, mattis lobortis justo sagittis, tempus ornare dui. Sed ornare nulla ac
nulla dapibus, eget vestibulum velit faucibus.`
    },
    {
      title: "Bla bla bla 3",
      lead: "Lead to catch attention",
      img: "https://static3.bigstockphoto.com/2/3/2/large2/232383625.jpg",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus nisl ipsum, at 
venenatis ante interdum sit amet. Sed sit amet tempor augue. Fusce at convallis massa. 
Aliquam erat volutpat. Ut a portarisus, eu porttitor nisi. Pellentesque
turpis turpis, mattis lobortis justo sagittis, tempus ornare dui. Sed ornare nulla ac
nulla dapibus, eget vestibulum velit faucibus.`
    },
    {
      title: "Bla bla bla 4",
      lead: "Lead to catch attention",
      img: "https://image.shutterstock.com/image-vector/vector-sketch-illustration-cup-coffee-260nw-169482620.jpg",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus nisl ipsum, at 
venenatis ante interdum sit amet. Sed sit amet tempor augue. Fusce at convallis massa. 
Aliquam erat volutpat. Ut a portarisus, eu porttitor nisi. Pellentesque
turpis turpis, mattis lobortis justo sagittis, tempus ornare dui. Sed ornare nulla ac
nulla dapibus, eget vestibulum velit faucibus.`
    }
  ]
}

class Story extends React.Component{

  renderSteps = () => {
    let rtn = data.steps.map((step, i) => {
      if(i % 2 !== 1){
        // img L
        return(
          <>
            <MDBCol md="6">
                <img 
                className="img-fluid"
                src={step.img}
                alt={step.title}
                />
            </MDBCol>
            <MDBCol md="6" className="pr-5 pl-5">
                <h2>{step.title}</h2>
                <p className="lead">{step.lead}</p>
                <p>{step.text}</p>
            </MDBCol>
          </>
        );
      } else {
        // img R
        return(
          <>
            <MDBCol md="6" className="pr-5 pl-5">
                <h2>{step.title}</h2>
                <p className="lead">{step.lead}</p>
                <p>{step.text}</p>
            </MDBCol>
            <MDBCol md="6">
                <img 
                className="img-fluid"
                src={step.img}
                alt={step.title}
                />
            </MDBCol>
          </>
        );
      }
    });

    return rtn;
  }

  render(){
    return(
      <section id="steps">
        <MDBContainer>
          <h2 className="text-center font-weight-bold">{data.title}</h2>
          <MDBRow className="m-0 mt-5">
            {this.renderSteps()}
          </MDBRow>
        </MDBContainer>
      </section>
    );
  }
}

export default Story;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
