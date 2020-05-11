//> React
// Contains all the functionality necessary to define React components
import React from "react";
// Router
import { Link } from "react-router-dom";

//> Components
import { LineItem } from "../../atoms";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBProgress,
} from "mdbreact";

//> CSS
import "./cart.scss";

//> Data
const freeShipping = 60;

//> Number formatting
const formatter = new Intl.NumberFormat("de-DE", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.openCheckout = this.openCheckout.bind(this);

    this.state = {
      agb: false,
      loading: true,
    };
  }

  componentWillReceiveProps = (nextProps) => {
    // Check if line items changed
    if (
      JSON.stringify(this.props.checkout.lineItems) !==
      JSON.stringify(nextProps.checkout.lineItems)
    ) {
      this.setState({
        loading: false,
      });
    }
  };

  openCheckout() {
    let checkoutURL = this.props.checkout.webUrl;
    window.open(checkoutURL);
  }

  toggle = () => {
    if (this.props.isCartOpen) {
      this.setState({ loading: true }, () => this.props.handleCartClose());
    } else {
      this.props.handleCartClose();
    }
  };

  render() {
    let lineItems = this.props.checkout.lineItems.edges.map((lineItem) => {
      return (
        <LineItem
          removeLineItemInCart={this.props.removeLineItemInCart}
          updateLineItemInCart={this.props.updateLineItemInCart}
          key={lineItem.node.id.toString()}
          lineItem={lineItem.node}
        />
      );
    });

    return (
      <MDBModal
        fullHeight
        position="right"
        backdrop={true}
        fade={false}
        className="modal-cart modal-white text-dark"
        isOpen={this.props.isCartOpen}
        toggle={this.toggle}
      >
        <MDBModalHeader tag="p" toggle={this.toggle}>
          Was Sie genießen werden
        </MDBModalHeader>
        <MDBModalBody className="text-center">
          {this.state.loading && this.props.showLoading && (
            <div className="slider">
              <div className="line"></div>
              <div className="subline inc"></div>
              <div className="subline dec"></div>
            </div>
          )}
          {lineItems && lineItems.length > 0 && lineItems}
          {lineItems && lineItems.length < 1 && (
            <>
              <p className="font-weight-bold mb-1">
                Noch keine Spezialitäten im Warenkorb.
              </p>
              <div className="mb-3">
                <MDBBtn color="elegant" outline onClick={this.toggle}>
                  <MDBIcon icon="angle-left" className="pr-2" />
                  Weitere kaufen
                </MDBBtn>
              </div>
            </>
          )}
          <p className="lead mt-3 mb-0">Jetzt gratis Versand sichern!</p>
          {this.props.checkout.totalPrice >= freeShipping ? (
            <p className="my-1 green-text font-weight-bold">
              Gratis Versand gesichert!
            </p>
          ) : (
            <p className="my-1">
              Nur noch{" "}
              {formatter.format(
                freeShipping -
                  (this.props.checkout.totalPrice
                    ? this.props.checkout.totalPrice >= freeShipping
                      ? freeShipping
                      : parseFloat(this.props.checkout.totalPrice)
                    : 0)
              )}{" "}
              €
            </p>
          )}
          <MDBProgress
            value={
              this.props.checkout.totalPrice
                ? this.props.checkout.totalPrice >= freeShipping
                  ? freeShipping
                  : parseFloat(this.props.checkout.totalPrice)
                : 0
            }
            max={freeShipping}
            className="my-1"
          />
          <small>(Kostenloser Versand: {freeShipping}€)</small>
          <hr />
          <MDBRow className="totals">
            <MDBCol size="6" className="text-left">
              Zwischensumme
            </MDBCol>
            <MDBCol size="6" className="text-right">
              € {formatter.format(this.props.checkout.subtotalPrice)}
            </MDBCol>
            <MDBCol size="12" className="text-left">
              <small className="text-muted">inkl. Steuer</small>
            </MDBCol>
            <MDBCol size="6" className="font-weight-bold text-left">
              Gesamt
            </MDBCol>
            <MDBCol size="6" className="font-weight-bold text-right">
              € {formatter.format(this.props.checkout.totalPrice)}
            </MDBCol>
          </MDBRow>
          <div className="px-3">
            <hr />
            <div className="text-left pl-4 custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="defaultUnchecked"
                checked={this.state.agb}
                onChange={(e) => {
                  this.setState({
                    agb: e.target.checked,
                  });
                }}
              />
              <label
                className="custom-control-label"
                htmlFor="defaultUnchecked"
              >
                <small>
                  Ich bestätige die{" "}
                  <Link to="/agb" target="_blank">
                    AGB
                  </Link>{" "}
                  gelesen und akzeptiert zu haben.
                </small>
              </label>
            </div>
            <small className="d-block text-muted mb-2">
              Ich akzeptiere die{" "}
              <Link to="/privacy" target="_blank">
                Datenschutzerklärung
              </Link>
              .
            </small>
            <MDBBtn
              color="success"
              size="lg"
              onClick={() => {
                this.props.googleAnalytics.registerCheckout(lineItems);
                this.openCheckout();
              }}
              disabled={lineItems.length < 1 || !this.state.agb}
            >
              <MDBIcon icon="check" className="pr-2" size="lg" />
              Weiter
            </MDBBtn>
          </div>
        </MDBModalBody>
      </MDBModal>
    );
  }
}

export default Cart;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Werbeagentur Christian Aichner
 */
