//> React
// Contains all the functionality necessary to define React components
import React from 'react';

//> Additional
// Prop types
import PropTypes from 'prop-types';
// Detect if visible
import VisibilitySensor from 'react-visibility-sensor';

//> Apollo and GraphQL
import { graphql } from 'react-apollo';
import * as compose from 'lodash.flowright';
import gql from 'graphql-tag';

//> Queries
import {
  createCheckout,
  checkoutLineItemsAdd,
  checkoutLineItemsUpdate,
  checkoutLineItemsRemove,
  checkoutCustomerAssociate,
  addVariantToCart,
  updateLineItemInCart,
  removeLineItemInCart,
  associateCustomerCheckout
} from '../../../utilities/checkout';

//> Components
// Hero
import {
  Hero,
} from '../../organisms';
// Sections
import {
  Gallery,
  Shop,
  Steps,
  Sub,
  Trust,
  About,
  FAQ,
  Features,
  Blackwolf,
} from '../../organisms/Sections';
// Shop
import {
  Cart
} from '../../molecules';

class HomePage extends React.Component {
  constructor() {
    super();

    this.state = {
      isCartOpen: false,
      isCustomerAuthOpen: false,
      isNewCustomer: false,
      products: [],
      checkout: { lineItems: { edges: [] } }
    };

    this.handleCartClose = this.handleCartClose.bind(this);
    this.handleCartOpen = this.handleCartOpen.bind(this);
    this.openCustomerAuth = this.openCustomerAuth.bind(this);
    this.closeCustomerAuth = this.closeCustomerAuth.bind(this);
    this.addVariantToCart = addVariantToCart.bind(this);
    this.updateLineItemInCart = updateLineItemInCart.bind(this);
    this.removeLineItemInCart = removeLineItemInCart.bind(this);
    this.showAccountVerificationMessage = this.showAccountVerificationMessage.bind(this);
    this.associateCustomerCheckout = associateCustomerCheckout.bind(this);
  }

  static propTypes = {
    data: PropTypes.shape({
      loading: PropTypes.bool,
      error: PropTypes.object,
      shop: PropTypes.object,
    }).isRequired,
    createCheckout: PropTypes.func.isRequired,
    checkoutLineItemsAdd: PropTypes.func.isRequired,
    checkoutLineItemsUpdate: PropTypes.func.isRequired
  }

  componentDidMount() {
    document.title = "Urban Coffee - Blue Lupi";

    this.props.createCheckout({
      variables: {
        input: {}
      }}).then((res) => {
      this.setState({
        checkout: res.data.checkoutCreate.checkout
      });
    });
  }

  handleCartOpen() {
    this.setState({
      isCartOpen: true,
    });
  }

  handleCartClose() {
    this.setState({
      isCartOpen: false,
    });
  }

  openCustomerAuth(event) {
    if (event.target.getAttribute('data-customer-type') === "new-customer") {
      this.setState({
        isNewCustomer: true,
        isCustomerAuthOpen: true
      });
    } else {
      this.setState({
        isNewCustomer: false,
        isCustomerAuthOpen: true
      });
    }
  }

  showAccountVerificationMessage(){
    this.setState({ accountVerificationMessage: true });
    setTimeout(() => {
      this.setState({
        accountVerificationMessage: false
      });
    }, 5000);
  }

  closeCustomerAuth() {
    this.setState({
      isCustomerAuthOpen: false,
    });
  }

  changeVisibility = (isVisible) => {
    console.log(isVisible);
  }

  render() {
    if (this.props.data.loading || !this.props.globalState) {
      return <p>Loading ...</p>;
    }
    if (this.props.data.error) {
      return <p>{this.props.data.error.message}</p>;
    }

    if(this.props.globalState){
      const page = this.props.globalState.page;
      const form = this.props.globalState.form;

      console.log(page, form);

      if(page && form){
        const pageHeaders = page.headers;
        const pageSections = page.sections;

        let headers = pageHeaders.map((header, i) => {
          switch(header.__typename){
            case "Home_H_HeroBlock":
              return(
                <Hero
                  handleCartOpen={this.handleCartOpen}
                  data={header}
                  key={"head"+i}
                />
              );
            default:
              return null;
          }
        });

        let sections = pageSections.map((section, i) => {
          console.log(section);
          switch(section.__typename){
            case "Home_S_WhyBlock":
              return(
                <Features 
                  data={section}
                  key={i}
                  client={this.props.client}
                />
              );
            case "Home_S_ShopBlock":
              return(
                <>
                <Shop 
                products={this.props.data.shop.products.edges}
                addVariantToCart={this.addVariantToCart} 
                checkout={this.state.checkout}
                data={section}
                />
                <Cart
                removeLineItemInCart={this.removeLineItemInCart}
                updateLineItemInCart={this.updateLineItemInCart}
                checkout={this.state.checkout}
                isCartOpen={this.state.isCartOpen}
                handleCartClose={this.handleCartClose}
                customerAccessToken={this.state.customerAccessToken}
                />
                </>
              );
            case "Home_S_AboutBlock":
              return(
                <About
                data={section}
                key={i}
                client={this.props.client}
                />
              );
            case "Home_S_StepsBlock":
              return(
                <Steps
                data={section}
                key={i}
                client={this.props.client}
                />
              );
            case "Home_S_InstagramBlock":
              return(
                <Gallery
                data={section}
                key={i}
                />
              );
            case "Home_S_TrustedBlock":
              return(
                <Trust
                data={section}
                key={i}
                client={this.props.client}
                />
              );
            case "Home_S_WolfBlock":
              return(
                <>
                <VisibilitySensor onChange={this.changeVisibility}>
                <Sub
                data={section}
                key={i}
                />
                </VisibilitySensor>
                <VisibilitySensor onChange={this.changeVisibility}>
                <Blackwolf 
                products={this.props.data.shop.products.edges}
                addVariantToCart={this.addVariantToCart} 
                checkout={this.state.checkout}
                form={form}
                client={this.props.client}
                />
                </VisibilitySensor>
                </>
              );
            case "Home_S_FAQBlock":
              return(
                <FAQ
                data={section}
                key={i}
                />
              );
            default:
              return null;
          }
        });
        return headers.concat(sections);
      } else {
        return null;
      }
    } else {
      return null;
    }
  }
}

const query = gql`
  query query {
    shop {
      name
      description
      products(first:20) {
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        edges {
          node {
            id
            title
            descriptionHtml
            options {
              id
              name
              values
            }
            variants(first: 250) {
              pageInfo {
                hasNextPage
                hasPreviousPage
              }
              edges {
                node {
                  id
                  title
                  availableForSale
                  selectedOptions {
                    name
                    value
                  }
                  image {
                    src
                  }
                  price
                }
              }
            }
            images(first: 250) {
              pageInfo {
                hasNextPage
                hasPreviousPage
              }
              edges {
                node {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`;

const HomePageWithDataAndMutation = compose(
  graphql(query),
  graphql(createCheckout, {name: "createCheckout"}),
  graphql(checkoutLineItemsAdd, {name: "checkoutLineItemsAdd"}),
  graphql(checkoutLineItemsUpdate, {name: "checkoutLineItemsUpdate"}),
  graphql(checkoutLineItemsRemove, {name: "checkoutLineItemsRemove"}),
  graphql(checkoutCustomerAssociate, {name: "checkoutCustomerAssociate"})
)(HomePage);

export default HomePageWithDataAndMutation;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
