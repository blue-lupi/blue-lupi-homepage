//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBCol,
  MDBCard,
  MDBCardTitle,
  MDBCardImage,
  MDBCardText,
  MDBCardBody,
  MDBBtn,
  MDBIcon,
} from "mdbreact";

//> CSS
import "./product.scss";

//> Number formatting
const formatter = new Intl.NumberFormat("de-DE", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

class Shop extends React.Component {
  // Init state
  state = {
    value: 1,
    variant: undefined,
  };

  componentDidMount = () => {
    let initialVariant = this.props.product.node.variants.edges[0].node.id;

    this.setState({
      variant: {
        id: initialVariant,
        key: 0,
      },
    });
  };

  decrease = () => {
    if (this.state.value > 1) {
      this.setState({ value: parseInt(this.state.value) - 1 });
    }
  };

  increase = () => {
    if (this.state.value < 999) {
      this.setState({ value: parseInt(this.state.value) + 1 });
    }
  };

  handleChange = (e) => {
    if (e.target.value >= 1 && e.target.value <= 999) {
      this.setState({
        value: parseInt(e.target.value),
      });
    }
  };

  handleSelectChange = (e) => {
    this.setState({
      variant: {
        id: this.props.product.node.variants.edges[
          e.target.value
        ].node.id.toString(),
        key: parseInt(e.target.value),
      },
    });
  };

  calculatePricePerCup = (variant) => {
    if (this.state.variant) {
      const title = variant.edges[this.state.variant.key].node.title;

      if (title) {
        const parts = title.split("g");

        if (!isNaN(parts[0])) {
          return formatter.format(
            variant.edges[this.state.variant.key].node.price /
              (parseInt(parts[0]) / 6)
          );
        } else {
          if (parts[0].includes("k")) {
            const kg = parts[0].split("k");
            const gramm = parseInt(kg) * 1000;

            return formatter.format(
              variant.edges[this.state.variant.key].node.price /
                (parseInt(gramm) / 6)
            );
          } else {
            return null;
          }
        }
      }
    }
  };

  renderCalculatedPricePerCub = (variants) => {
    const price = this.calculatePricePerCup(variants);

    if (price) {
      return (
        <div className="text-center text-muted border p-2">
          <MDBIcon icon="mug-hot" /> € {price} pro Tasse
        </div>
      );
    } else {
      return null;
    }
  };

  render() {
    const { product, googleAnalytics } = this.props;

    return (
      <MDBCol key={this.props.id} md="4" className="product-item text-dark">
        <MDBCard className="mb-3">
          <MDBCardImage
            className="img-fluid m-auto pl-5 pr-5 pt-3"
            src={product.node.images.edges[0].node.src}
            alt={product.node.title}
            waves={false}
          />
          <MDBCardBody>
            <MDBCardTitle className="text-center">
              {product.node.title}
            </MDBCardTitle>
            <MDBCardText
              className="text-center"
              dangerouslySetInnerHTML={{ __html: product.node.descriptionHtml }}
            ></MDBCardText>
            {product.node.variants.edges.length < 2 &&
            !product.node.variants.edges[0].node.availableForSale ? (
              <p className="text-center mt-4">
                Der Artikel ist derzeit leider nicht verfügbar.
              </p>
            ) : (
              <>
                <p className="text-center mb-0">Anzahl</p>{" "}
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
                {product.node.variants.edges.length > 1 && (
                  <div>
                    <select
                      className="browser-default custom-select"
                      onChange={this.handleSelectChange}
                    >
                      {product.node.variants.edges.map((variant, key) => {
                        return (
                          <option
                            value={key}
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
                )}
              </>
            )}
            {this.state.variant && (
              <div className="text-center mt-3">
                <p className="lead font-weight-bold">
                  €{" "}
                  {formatter.format(
                    product.node.variants.edges[this.state.variant.key].node
                      .price * this.state.value
                  )}
                </p>
              </div>
            )}
            {product.node.collections.edges.length > 0 &&
            product.node.collections.edges[0].node.title === "Personal" ? (
              <div className="text-center mt-3">
                <p className="text-muted">Lieferzeit: 7-9 Tage</p>
              </div>
            ) : (
              <div className="text-center mt-3">
                <p className="text-muted">Lieferzeit: 3-5 Tage</p>
              </div>
            )}
            {this.renderCalculatedPricePerCub(product.node.variants)}

            <div className="text-center mt-3">
              <MDBBtn
                color="lupi-blue"
                disabled={
                  product.node.variants.edges.length < 2 &&
                  !product.node.variants.edges[0].node.availableForSale
                }
                onClick={() => {
                  googleAnalytics.registerInCard(
                    product.node.collections.edges[0].node.title,
                    product.node.variants.edges[this.state.variant.key].node
                      .title
                  );
                  this.props.addVariantToCart(
                    this.state.variant.id,
                    this.state.value
                  );
                }}
              >
                In den Einkaufswagen
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
 * Copyright © 2019-2020 Werbeagentur Christian Aichner
 */
