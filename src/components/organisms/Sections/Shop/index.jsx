//> React
// Contains all the functionality necessary to define React components
import React from 'react';

//> Additional libraies
// Parallax
//import { Parallax } from 'react-scroll-parallax';

//> Components
import {
  Product
} from '../../../molecules'

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

//> Images
import product1 from '../../../../assets/content/sections/shop/product1.png';
import product2 from '../../../../assets/content/sections/shop/product2.png';
import product3 from '../../../../assets/content/sections/shop/product3.png';

//> CSS
import './shop.scss';

class Shop extends React.Component{

  state = {
    isCartOpen: false,
    isCustomerAuthOpen: false,
    isNewCustomer: false,
    products: [],
    checkout: { lineItems: { edges: [] } }
  };

  render(){

    const { products } = this.props;
    // Debugging
    console.log(products);

    return(
      <section id="shop">
        <MDBContainer>
        <MDBRow>
          {products && products.map((product, i) => {
            switch(product.node.title){
              case 'Bluelupi Lupinenkaffee':
                return(
                  <Product 
                  key={i}
                  id={product.node.id}
                  product={product}
                  addVariantToCart={this.props.addVariantToCart}
                  checkout={this.state.checkout}
                  />
                );
              case 'Bluelupi im Spar-Abo':
                return(
                  <Product 
                  key={i}
                  id={product.node.id}
                  product={product}
                  addVariantToCart={this.props.addVariantToCart}
                  checkout={this.state.checkout}
                  />
                );
              case 'Bluelupi Lupinenkaffee Kapseln 60g':
                return(
                  <Product 
                  key={i}
                  id={product.node.id}
                  product={product}
                  addVariantToCart={this.props.addVariantToCart}
                  checkout={this.state.checkout}
                  />
                );
            }
          })}
        </MDBRow>
        </MDBContainer>
      </section>
    );
  }
}

export default Shop;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
