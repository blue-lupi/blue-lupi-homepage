//> React
// Contains all the functionality necessary to define React components
import React from 'react';

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBIcon,
} from 'mdbreact';

//> CSS
import './blackwolf.scss';

//> Images
import { ReactComponent as Wolf } from '../../../../assets/content/sections/sub/wolf.svg';

// Dummy data
const data = {
    title: "Black Wolf Coffee",
    lead: "In wenigen Schritten zu Ihrer individuellen Röstung"
};

class Blackwolf extends React.Component{
  state = {
    radio: 2
  };

  componentDidMount = () => {
    let frames = document.querySelectorAll('.frame');
    let currentFrame = 0;
    let previousFrame = 7;

    setInterval(function () {
        frames[currentFrame].style.visibility = 'visible';
        frames[previousFrame].style.visibility = 'hidden';

        if (currentFrame < frames.length - 1) {
            currentFrame += 1;
            previousFrame = currentFrame - 1;
        } else {
            currentFrame = 0;
            previousFrame = 7;
        }
    }, 75);
  }

  onClick = nr => () => {
    this.setState({
      radio: nr
    });
  };

  render(){
    return(
      <section id="blackwolf">
        <MDBContainer className="text-center">
          <h1 className="text-center font-weight-bold">{data.title}</h1>
          <p className="lead mb-5">{data.lead}</p>

          <h3>Welchen Geschmack bevorzugst du?</h3>
          <MDBBtn
          color="white"
          rounded
          >
          Fruchtig mit mehr Säure
          </MDBBtn>
          <MDBBtn
          color="white"
          rounded
          >
          Schokolade
          </MDBBtn>
          <MDBBtn
          color="white"
          rounded
          >
          Nussig
          </MDBBtn>
          <MDBBtn
          color="white"
          rounded
          >
          mehr Bitterkeit
          </MDBBtn>
          <div className="mt-5">
          <Wolf id="wolfsvg" />
          </div>
        </MDBContainer>
      </section>
    );
  }
}

export default Blackwolf;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
