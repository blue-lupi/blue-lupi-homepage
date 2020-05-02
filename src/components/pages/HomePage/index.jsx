//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> Additional
// Prop types
import PropTypes from "prop-types";
// Analytics
import ReactGA from "react-ga";

//> Apollo and GraphQL
import { graphql } from "react-apollo";
import * as compose from "lodash.flowright";
import gql from "graphql-tag";

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
  associateCustomerCheckout,
} from "../../../utilities/checkout";

//> Components
// Hero
import { Hero } from "../../organisms";
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
} from "../../organisms/Sections";
// Shop
import { Cart } from "../../molecules";

class HomePage extends React.Component {
  constructor() {
    super();

    this.state = {
      isCartOpen: false,
      isCustomerAuthOpen: false,
      isNewCustomer: false,
      products: [],
      checkout: { lineItems: { edges: [] } },
    };

    this.handleCartClose = this.handleCartClose.bind(this);
    this.handleCartOpen = this.handleCartOpen.bind(this);
    this.openCustomerAuth = this.openCustomerAuth.bind(this);
    this.closeCustomerAuth = this.closeCustomerAuth.bind(this);
    this.addVariantToCart = addVariantToCart.bind(this);
    this.updateLineItemInCart = updateLineItemInCart.bind(this);
    this.removeLineItemInCart = removeLineItemInCart.bind(this);
    this.showAccountVerificationMessage = this.showAccountVerificationMessage.bind(
      this
    );
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
    checkoutLineItemsUpdate: PropTypes.func.isRequired,
  };

  componentDidMount() {
    document.title = "Blue Lupi";
    // Google Analytics
    ReactGA.initialize("UA-148740308-3");
    ReactGA.pageview(window.location.pathname + window.location.search);
    this.props
      .createCheckout({
        variables: {
          input: {},
        },
      })
      .then((res) => {
        this.setState({
          checkout: res.data.checkoutCreate.checkout,
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
    if (event.target.getAttribute("data-customer-type") === "new-customer") {
      this.setState({
        isNewCustomer: true,
        isCustomerAuthOpen: true,
      });
    } else {
      this.setState({
        isNewCustomer: false,
        isCustomerAuthOpen: true,
      });
    }
  }

  showAccountVerificationMessage() {
    this.setState({ accountVerificationMessage: true });
    setTimeout(() => {
      this.setState({
        accountVerificationMessage: false,
      });
    }, 5000);
  }

  closeCustomerAuth() {
    this.setState({
      isCustomerAuthOpen: false,
    });
  }

  render() {
    if (this.props.data.error) {
      // Display error message
    }

    const page = this.props.globalState
      ? this.props.globalState.page
      : undefined;
    const pageHeaders = page
      ? page.headers
      : [{ __typename: "Home_H_HeroBlock" }];

    let headers = pageHeaders.map((header, i) => {
      switch (header.__typename) {
        case "Home_H_HeroBlock":
          return (
            <Hero
              handleCartOpen={this.handleCartOpen}
              data={header}
              key={"head" + i}
            />
          );
        default:
          return null;
      }
    });
    if (this.props.globalState) {
      const form = this.props.globalState.form;
      if (
        page &&
        form &&
        !this.props.loading &&
        this.props.globalState.loaded &&
        this.props.data.shop &&
        this.props.globalState.images
      ) {
        const pageSections = page.sections;
        let sections = pageSections.map((section, i) => {
          switch (section.__typename) {
            case "Home_S_WhyBlock":
              return (
                <Features
                  data={section}
                  key={i}
                  client={this.props.client}
                  images={this.props.globalState.images}
                />
              );
            case "Home_S_ShopBlock":
              return (
                <React.Fragment key={i}>
                  <Shop
                    products={this.props.data.shop.products.edges}
                    addVariantToCart={this.addVariantToCart}
                    checkout={this.state.checkout}
                    data={section}
                    collection={section.shopHead}
                    showCollection={section.shopDisplayhead}
                  />
                </React.Fragment>
              );
            case "Home_S_AboutBlock":
              return (
                <About
                  data={section}
                  key={i}
                  client={this.props.client}
                  images={this.props.globalState.images}
                />
              );
            case "Home_S_StepsBlock":
              return (
                <Steps
                  data={section}
                  key={i}
                  client={this.props.client}
                  images={this.props.globalState.images}
                />
              );
            case "Home_S_InstagramBlock":
              return (
                <Gallery
                  data={section}
                  key={i}
                  images={this.props.globalState.images}
                />
              );
            case "Home_S_TrustedBlock":
              return (
                <Trust
                  data={section}
                  key={i}
                  client={this.props.client}
                  images={this.props.globalState.images}
                />
              );
            case "Home_S_WolfBlock":
              return (
                <React.Fragment key={i}>
                  <Sub
                    data={section}
                    key={i}
                    images={this.props.globalState.images}
                  />
                  <Blackwolf
                    products={this.props.data.shop.products.edges}
                    addVariantToCart={this.addVariantToCart}
                    checkout={this.state.checkout}
                    createSurvey={this.props.globalFunctions.createSurvey}
                    form={form}
                    client={this.props.client}
                    images={this.props.globalState.images}
                  />
                </React.Fragment>
              );
            case "Home_S_FAQBlock":
              return (
                <FAQ
                  data={section}
                  key={i}
                  images={this.props.globalState.images}
                />
              );
            default:
              return null;
          }
        });
        const cart = (
          <Cart
            removeLineItemInCart={this.removeLineItemInCart}
            updateLineItemInCart={this.updateLineItemInCart}
            checkout={this.state.checkout}
            isCartOpen={this.state.isCartOpen}
            handleCartClose={this.handleCartClose}
            customerAccessToken={this.state.customerAccessToken}
            key={"cart"}
          />
        );
        sections.push(cart);
        return headers.concat(sections);
      } else {
        return headers;
      }
    } else {
      return headers;
    }
  }
}

const query = gql`
  query query {
    shop {
      name
      description
      products(first: 20) {
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        edges {
          node {
            id
            title
            descriptionHtml
            collections(first: 1) {
              edges {
                node {
                  title
                }
              }
            }
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
  graphql(createCheckout, { name: "createCheckout" }),
  graphql(checkoutLineItemsAdd, { name: "checkoutLineItemsAdd" }),
  graphql(checkoutLineItemsUpdate, { name: "checkoutLineItemsUpdate" }),
  graphql(checkoutLineItemsRemove, { name: "checkoutLineItemsRemove" }),
  graphql(checkoutCustomerAssociate, { name: "checkoutCustomerAssociate" })
)(HomePage);

export default HomePageWithDataAndMutation;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Werbeagentur Christian Aichner
 */
