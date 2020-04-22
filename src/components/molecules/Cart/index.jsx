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

class Cart extends React.Component {
	constructor(props) {
		super(props);

		this.openCheckout = this.openCheckout.bind(this);

		this.state = {
			agb: false,
		};
	}

	openCheckout() {
		let checkoutURL = this.props.checkout.webUrl;
		window.open(checkoutURL);
	}

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
				className="modal-cart modal-white text-dark"
				isOpen={this.props.isCartOpen}
				toggle={this.props.handleCartClose}
			>
				<MDBModalHeader tag="p" toggle={this.props.handleCartClose}>
					Was Sie genießen werden
				</MDBModalHeader>
				<MDBModalBody className="text-center">
					{lineItems && lineItems.length > 0 && lineItems}
					{lineItems && lineItems.length < 1 && (
						<>
							<p className="font-weight-bold mb-1">
								Noch keine Spezialitäten im Warenkorb.
							</p>
							<div className="mb-3">
								<MDBBtn
									color="elegant"
									outline
									onClick={this.props.handleCartClose}
								>
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
							{freeShipping -
								(this.props.checkout.totalPrice
									? this.props.checkout.totalPrice >=freeShipping
										? freeShipping
										: this.props.checkout.totalPrice
									: 0)}{" "}
							€
						</p>
					)}

					<MDBProgress
						value={
							this.props.checkout.totalPrice
								? this.props.checkout.totalPrice >= freeShipping
									? freeShipping
									: parseInt(this.props.checkout.totalPrice)
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
					<div className="px-3">
						<hr />
						<div className="text-left pl-4 custom-control custom-checkbox">
							<input
								type="checkbox"
								class="custom-control-input"
								id="defaultUnchecked"
								checked={this.state.agb}
								onClick={(e) => {
									this.setState({
										agb: e.target.checked,
									});
								}}
							/>
							<label className="custom-control-label" for="defaultUnchecked">
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
							onClick={this.openCheckout}
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
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
