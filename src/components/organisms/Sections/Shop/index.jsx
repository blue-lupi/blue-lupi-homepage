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

// Data
const productsTEMP = [
    {
        name: "Blue Lupi 250g",
        image: product1,
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        notice: "250g, geröstet und gemahlen",
        btn: {
            urlPath: "/test",
            text: "Jetzt genießen"
        }
    },
    {
        name: "Blue Lupi 500g",
        image: product2,
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        notice: "500g, geröstet und gemahlen",
        btn: {
            urlPath: "/test",
            text: "Jetzt genießen"
        }
    },
    {
        name: "Blue Lupi Kapseln",
        image: product3,
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        notice: "100g, bald verfügbar",
        btn: {
            urlPath: "/test",
            text: "Jetzt genießen"
        }
    }
];

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
          <MDBRow className="text-center">
          {productsTEMP && productsTEMP.map(({name, image, text, notice, btn}, i) => {
            return(
              <MDBCol key={i}>
                <MDBCard>
                  <MDBCardImage
                  className="img-fluid m-auto pl-5 pr-5 pt-3"
                  src={image}
                  waves
                  />
                  <MDBCardBody>
                  <MDBCardTitle>{name}</MDBCardTitle>
                  <MDBCardText>{text}</MDBCardText>
                  <MDBCardText><small>{notice}</small></MDBCardText>
                  </MDBCardBody>
                  <MDBCardFooter>
                    {btn.urlPath &&
                      <MDBBtn
                      color="lupi-blue"
                      href={btn.urlPath}
                      >
                      {btn.text}
                      </MDBBtn>
                    }
                  </MDBCardFooter>
                </MDBCard>
              </MDBCol>
            );
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
