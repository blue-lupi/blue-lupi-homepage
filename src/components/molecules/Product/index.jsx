//> React
// Contains all the functionality necessary to define React components
import React from 'react';

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
    MDBCol,
    MDBCard,
    MDBCardTitle,
    MDBCardImage,
    MDBCardText,
    MDBCardFooter,
    MDBCardBody,
    MDBBtn,
} from 'mdbreact';

//> CSS
import './product.scss';

class Shop extends React.Component{

  // Init state
  state = {
    value: 1,
    variant: undefined,
  }

  componentDidMount = () => {
    let initialVariant = this.props.product.node.variants.edges[0].node.id;
    this.setState({
      variant: {
        id: initialVariant
      }
    });
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

  handleSelectChange = (e) => {
    this.setState({
      variant: {
        id: e.target.value.toString()
      }
    });
  }

  render(){
    const { product } = this.props;
    console.log(this.state);

    return(
      <MDBCol key={this.props.id} md="4" className="product-item text-dark">
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
            <p className="text-center mb-0">Anzahl</p>
            <div className="def-number-input number-input mb-2 ml-auto mr-auto">
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
            {product.node.variants.edges.length > 1 &&
              <div>
                <select 
                className="browser-default custom-select"
                onChange={this.handleSelectChange}
                >
                {product.node.variants.edges.map((variant, key) => {
                  return (
                    <option 
                    value={variant.node.id}
                    key={key}
                    disabled={!variant.node.availableForSale}
                    >
                    {variant.node.title}
                    {!variant.node.availableForSale && " (Ausverkauft)"}
                    </option>
                  );
                })}
                </select>
              </div>
            }
            <div className="text-center mt-3">
              <MDBBtn
              color="lupi-blue"
              onClick={() => this.props.addVariantToCart(this.state.variant.id, this.state.value)}
              >
              Add to card
              </MDBBtn>
            </div>
          </MDBCardBody>
          {/*<MDBCardFooter className="text-center">
            <MDBBtn
            color="lupi-blue"
            onClick={() => this.props.addVariantToCart(this.state.variant.id, this.state.value)}
            >
            Add to card
            </MDBBtn>
          </MDBCardFooter>*/}
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
