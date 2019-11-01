//> React
// Contains all the functionality necessary to define React components
import React from 'react';

//> Additional libraies
// Parallax
//import { Parallax } from 'react-scroll-parallax';

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBRow,
  MDBCol,
  MDBCard,
} from 'mdbreact';

//> CSS
import './about.scss';

//> Images
import tempIcon from '../../../../assets/content/sections/about/temp.png';

//> Data
const data = {
  title: "Über mich",
  cards: [
    {
      title: "Test1",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus nisl ipsum, at 
venenatis ante interdum sit amet. Sed sit amet tempor augue.`
    },
    {
      title: "Test2",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus nisl ipsum, at 
venenatis ante interdum sit amet. Sed sit amet tempor augue.`
    },
    {
      title: "Test3",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus nisl ipsum, at 
venenatis ante interdum sit amet. Sed sit amet tempor augue.`
    },
    {
      title: "Test4",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus nisl ipsum, at 
venenatis ante interdum sit amet. Sed sit amet tempor augue.`
    }
  ]
}

class About extends React.Component{

  renderCardsLeft = () => {
    let cards = data.cards;
    let rtn = cards.map((card, i) => {
      if(i % 2 !== 1){
        return(
          <MDBCard className="p-4" key={i}>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </MDBCard>
        )
      }
    })
    return rtn;
  }

  renderCardsRight = () => {
    let cards = data.cards;
    let rtn = cards.map((card, i) => {
      if(i % 2 === 1){
        return(
          <MDBCard className="p-4" key={i}>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </MDBCard>
        )
      }
    })
    return rtn;
  }

  render(){

    return(
      <section id="about">
        <h2 className="font-weight-bold text-center">{data.title}</h2>
        <MDBRow className="m-0 p-2 flex-center">
          <MDBCol md="5">
            {this.renderCardsLeft()}
          </MDBCol>
          <MDBCol md="2" className="text-center">
            <div className="circle">
              <div className="icon">
                <img src={tempIcon} className="img-fluid" alt="Icon"/>
              </div>
            </div>
          </MDBCol>
          <MDBCol md="5" className="text-right">
            {this.renderCardsRight()}
          </MDBCol>
        </MDBRow>
      </section>
    );
  }
}

export default About;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
