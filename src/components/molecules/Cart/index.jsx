//> React
// Contains all the functionality necessary to define React components
import React from 'react';

//> Components
import {
  LineItem
} from '../../atoms';

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
} from 'mdbreact';

//> CSS
import './cart.scss';

class Cart extends React.Component {
  constructor(props) {
  super(props);

    this.openCheckout = this.openCheckout.bind(this);
  }

  openCheckout() {
    window.open(this.props.checkout.webUrl);
  }

  render() {
    let line_items = this.props.checkout.lineItems.edges.map((line_item) => {
      return (
        <LineItem
          removeLineItemInCart={this.props.removeLineItemInCart}
          updateLineItemInCart={this.props.updateLineItemInCart}
          key={line_item.node.id.toString()}
          line_item={line_item.node}
        />
      );
    });

    return (
      <MDBModal 
      fullHeight 
      position="right"
      backdrop={true}
      className="modal-cart modal-white text-dark"
      isOpen={this.props.isCartOpen}
      toggle={this.props.handleCartClose}
      >
        <MDBModalHeader tag="p" toggle={this.props.handleCartClose}>
          Was Sie genießen werden
        </MDBModalHeader>
        <MDBModalBody className="text-center">
          {line_items}
          <MDBRow className="totals">
            <MDBCol size="6" className="text-left">
              Zwischensumme
            </MDBCol>
            <MDBCol size="6" className="text-right">
              € {this.props.checkout.subtotalPrice}
            </MDBCol>
            <MDBCol size="12" className="text-left">
              <small className="text-muted">inkl. Steuer</small>
            </MDBCol>
            <MDBCol size="6" className="font-weight-bold text-left">
              Gesamt
            </MDBCol>
            <MDBCol size="6" className="font-weight-bold text-right">
              € {this.props.checkout.totalPrice}
            </MDBCol>
          </MDBRow>
        </MDBModalBody>
        <MDBModalFooter className="justify-content-center">
          <MDBBtn color="primary" onClick={this.props.handleCartClose}>
          <MDBIcon icon="angle-left" className="pr-2"/>
          Weiter shoppen
          </MDBBtn>
          <MDBBtn color="green" onClick={this.openCheckout}>
          <MDBIcon icon="check" className="pr-2"/>
          Checkout
          </MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    );

    /*return (
      <div className={`Cart ${this.props.isCartOpen ? 'Cart--open' : ''}`}>
        <header className="Cart__header">
          <h2>Cart</h2>
          <button
            onClick={this.props.handleCartClose}
            className="Cart__close">
            ×
          </button>
        </header>
        <ul className="Cart__line-items">
          {line_items}
        </ul>
        <footer className="Cart__footer">
          <div className="Cart-info clearfix">
            <div className="Cart-info__total Cart-info__small">Subtotal</div>
            <div className="Cart-info__pricing">
              <span className="pricing">$ {this.props.checkout.subtotalPrice}</span>
            </div>
          </div>
          <div className="Cart-info clearfix">
            <div className="Cart-info__total Cart-info__small">Taxes</div>
            <div className="Cart-info__pricing">
              <span className="pricing">$ {this.props.checkout.totalTax}</span>
            </div>
          </div>
          <div className="Cart-info clearfix">
            <div className="Cart-info__total Cart-info__small">Total</div>
            <div className="Cart-info__pricing">
              <span className="pricing">$ {this.props.checkout.totalPrice}</span>
            </div>
          </div>
          <button className="Cart__checkout button" onClick={this.openCheckout}>Checkout</button>
        </footer>
      </div>
    )*/
  }
}

export default Cart;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
