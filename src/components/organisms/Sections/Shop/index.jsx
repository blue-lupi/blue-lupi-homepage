//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> Components
import { Product } from "../../../molecules";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import { MDBRow, MDBContainer } from "mdbreact";

//> CSS
import "./shop.scss";

class Shop extends React.Component {
  state = {
    isCartOpen: false,
    isCustomerAuthOpen: false,
    isNewCustomer: false,
    products: [],
    checkout: { lineItems: { edges: [] } },
  };

  componentDidMount = () => {
    let products = this.props.products;
    const collection = this.props.collection;
    let res = [];

    products.map((product, i) => {
      if (
        product.node.collections.edges[0] &&
        product.node.collections.edges[0].node.title === collection
      ) {
        switch (product.node.title) {
          case "Bluelupi Lupinenkaffee":
            res[0] = products[i];
            break;
          case "Bluelupi im Spar-Abo":
            res[1] = products[i];
            break;
          case "Lupinenkaffee Kapseln":
            res[2] = products[i];
            break;
          default:
            res[i] = products[i];
        }
      }

      return true;
    });

    this.setState({
      products: res,
    });
  };

  render() {
    const { products } = this.state;

    return (
      <section
        id={
          this.props.collection === "Das Kaffeerudel - Spezialitätenkaffee"
            ? "rudelshop"
            : "shop"
        }
        className={
          this.props.collection === "Das Kaffeerudel - Spezialitätenkaffee"
            ? "blackwolf balckwolfsection"
            : "bluelupi"
        }
      >
        <MDBContainer>
          {this.props.showCollection && (
            <h2 className="text-center font-weight-bold mb-5">
              {this.props.collection}
            </h2>
          )}
          <MDBRow>
            {products &&
              products.map((product, i) => {
                switch (product.node.title) {
                  case "Bluelupi Lupinenkaffee":
                    return (
                      <Product
                        key={i}
                        id={product.node.id}
                        product={product}
                        addVariantToCart={this.props.addVariantToCart}
                        checkout={this.state.checkout}
                      />
                    );
                  case "Bluelupi im Spar-Abo":
                    return (
                      <Product
                        key={i}
                        id={product.node.id}
                        product={product}
                        addVariantToCart={this.props.addVariantToCart}
                        checkout={this.state.checkout}
                      />
                    );
                  case "Lupinenkaffee Kapseln":
                    return (
                      <Product
                        key={i}
                        id={product.node.id}
                        product={product}
                        addVariantToCart={this.props.addVariantToCart}
                        checkout={this.state.checkout}
                      />
                    );
                  default:
                    return (
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
 * Copyright © 2019-2020 Werbeagentur Christian Aichner
 */
