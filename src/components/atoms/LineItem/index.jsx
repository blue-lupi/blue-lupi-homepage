//> React
// Contains all the functionality necessary to define React components
import React from 'react';

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBBtn,
  MDBIcon,
} from 'mdbreact';

//> CSS
import './lineitem.scss';

class LineItem extends React.Component {
  constructor(props) {
    super(props);

    this.decrementQuantity = this.decrementQuantity.bind(this);
    this.incrementQuantity = this.incrementQuantity.bind(this);
  }

  decrementQuantity(lineItemId) {
    this.props.updateLineItemInCart(lineItemId, this.props.line_item.quantity - 1)
  }

  incrementQuantity(lineItemId) {
    this.props.updateLineItemInCart(lineItemId, this.props.line_item.quantity + 1)
  }

  render() {
    return (
      <li className="line-item mt-2 pb-2">
        <div className="row">
          <div className="col-auto">
            {this.props.line_item.variant.image && 
            <img 
            src={this.props.line_item.variant.image.src}
            className="img-fluid"
            alt={`${this.props.line_item.title} product shot`}
            />
            }
          </div>
          <div className="col">
            <div className="row flex-center">
              <div className="col-auto text-left">
                <p className="font-weight-bold mb-0">
                {this.props.line_item.title}
                </p>
                <small>
                {this.props.line_item.variant.title}
                </small>
              </div>
              <div className="col text-right">
                <MDBBtn 
                color="danger"
                size="sm"
                onClick={()=> this.props.removeLineItemInCart(this.props.line_item.id)}
                >
                <MDBIcon icon="times" />
                </MDBBtn>
              </div>
            </div>
            <div className="row flex-center">
              <div className="col-auto text-left">
                <div>
                  <MDBBtn
                  color="primary"
                  size="sm"
                  onClick={() => this.decrementQuantity(this.props.line_item.id)}
                  >
                  -
                  </MDBBtn>
                  <span className="ml-1 mr-1">{this.props.line_item.quantity}</span>
                  <MDBBtn
                  color="primary"
                  size="sm"
                  onClick={() => this.incrementQuantity(this.props.line_item.id)}
                  >
                  +
                  </MDBBtn>
                </div>
              </div>
              <div className="col text-right">
                € { (this.props.line_item.quantity * this.props.line_item.variant.price).toFixed(2) }
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default LineItem;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
