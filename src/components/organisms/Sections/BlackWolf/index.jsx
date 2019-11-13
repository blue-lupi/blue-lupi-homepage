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

//> Components
import {
  Product
} from '../../../molecules';

// Dummy data
const data = {
    title: "Black Wolf Coffee",
    lead: "In wenigen Schritten zu Ihrer individuellen Röstung"
};

class Blackwolf extends React.Component{
  state = {
    step1: undefined
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

  onClick = (nr, value) => {
    this.setState({
      ["step"+nr]: value
    });
  };

  render(){

    const { products } = this.props;

    return(
      <section id="blackwolf" className="pb-0">
        <MDBContainer className="text-center">
          <h1 className="text-center font-weight-bold">{data.title}</h1>
          <p className="lead mb-5">{data.lead}</p>

          {!this.state.step1 ? (
            <div>
              <h3>Welchen Geschmack bevorzugst du?</h3>
              <MDBBtn
              color="white"
              rounded
              onClick={() => this.onClick(1, "fruchtig")}
              >
              Fruchtig mit mehr Säure
              </MDBBtn>
              <MDBBtn
              color="white"
              rounded
              onClick={() => this.onClick(1, "schoko")}
              >
              Schokolade
              </MDBBtn>
              <MDBBtn
              color="white"
              rounded
              onClick={() => this.onClick(1, "nussig")}
              >
              Nussig
              </MDBBtn>
              <MDBBtn
              color="white"
              rounded
              onClick={() => this.onClick(1, "bitter")}
              >
              mehr Bitterkeit
              </MDBBtn>
            </div>
          ) : (
            <>
            <h3 className="green-text font-weight-bold">Ihr persönlicher Black Wolf</h3>
            <p className="lead">Individuell für Sie geröstet</p>
            <MDBRow className="mt-4 flex-center">
              {products.map((product, i) => {
                if(product.node.title === "Personal Black Wolf")
                return(
                  <Product 
                  key={i}
                  id={product.node.id}
                  product={product}
                  addVariantToCart={this.props.addVariantToCart}
                  checkout={this.state.checkout}
                  />
                )
              })}
            </MDBRow>
            </>
          )}
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
