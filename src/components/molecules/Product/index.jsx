//> React
// Contains all the functionality necessary to define React components
import React from 'react';

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardTitle,
    MDBCardImage,
    MDBCardText,
    MDBCardFooter,
    MDBCardBody,
    MDBContainer,
    MDBBtn,
} from 'mdbreact';

//> CSS
import './product.scss';

class Shop extends React.Component{

  // Init state
  state = {
    value: 0
  }

  decrease = () => {
    this.setState({ value: this.state.value - 1 });
  }

  increase = () => {
    this.setState({ value: this.state.value + 1 });
  }

  render(){
    const { product } = this.props;

    return(
      <MDBCol key={this.props.key} className="product-item">
        <MDBCard>
          <MDBCardImage
          className="img-fluid m-auto pl-5 pr-5 pt-3"
          src={product.node.images.edges[0].node.src}
          waves
          />
        <MDBCardBody>
          <MDBCardTitle>{product.node.title}</MDBCardTitle>
          <MDBCardText>Test</MDBCardText>
          <MDBCardText><small>Test</small></MDBCardText>
          <div className="def-number-input number-input">
            <button onClick={this.decrease} className="minus"></button>
            <input 
            className="quantity"
            name="quantity"
            value={this.state.value}
            onChange={(e)=> this.setState({value: e.target.value})}
            type="number"
            />
            <button onClick={this.increase} className="plus"></button>
          </div>
        </MDBCardBody>
        <MDBCardFooter>
          <MDBBtn
          color="lupi-blue"
          onClick={() => this.props.addVariantToCart(1, this.state.value)}
          >
          Add to card
          </MDBBtn>
        </MDBCardFooter>
        </MDBCard>
      </MDBCol>
    );
  }
}

export default Shop;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
