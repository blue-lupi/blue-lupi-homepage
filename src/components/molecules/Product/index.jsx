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
    value: 1
  }

  decrease = () => {
    if(this.state.value > 1){
      this.setState({ value: parseInt(this.state.value) - 1 });
    }
  }

  increase = () => {
    if(this.state.value < 999){
      this.setState({ value: parseInt(this.state.value) + 1 });
    }
  }

  handleChange = (e) => {
    if(e.target.value >= 1 && e.target.value <= 999){
      this.setState({
        value: parseInt(e.target.value)
      });
    }
  }

  render(){
    const { product } = this.props;

    return(
      <MDBCol key={this.props.id} className="product-item">
        <MDBCard>
          <MDBCardImage
          className="img-fluid m-auto pl-5 pr-5 pt-3"
          src={product.node.images.edges[0].node.src}
          waves
          />
          <MDBCardBody>
            <MDBCardTitle className="text-center">{product.node.title}</MDBCardTitle>
            <MDBCardText 
            className="text-center"
            dangerouslySetInnerHTML={{__html: product.node.descriptionHtml}}
            ></MDBCardText>
            <MDBCardText 
            className="text-center"
            >
            <small>
            
            </small>
            </MDBCardText>
            <p className="text-center mb-0">Anzahl</p>
            <div className="def-number-input number-input mb-0 ml-auto mr-auto">
              <button onClick={this.decrease} className="minus"></button>
              <input 
              className="quantity"
              name="quantity"
              value={this.state.value}
              onChange={this.handleChange}
              type="number"
              min="1"
              max="999"
              />
              <button onClick={this.increase} className="plus"></button>
            </div>
          </MDBCardBody>
          <MDBCardFooter className="text-center">
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
