//> React
// Contains all the functionality necessary to define React components
import React from "react";
// Router DOM bindings
import { withRouter } from "react-router-dom";

//> Additional
// Prop types
import PropTypes from "prop-types";

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
      param: false,
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
    // Set title
    document.title = "Blue Lupi - DIE KAFFEEALTERNATIVE AUS ÖSTERREICH";

    // Get page redirect
    const { match } = this.props;

    // Check if there is a redirect
    if (match && match.params.param) {
      const param = match.params.param;

      // Set param and initialize Shopify
      this.setState(
        {
          param:
            param === "blue" ? "blue" : param === "black" ? "black" : false,
        },
        () => this.initShopify()
      );
    } else {
      // Initialize Shopify
      this.initShopify();
    }
  }

  initShopify = () => {
    // Create Shopify checkout
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
  };

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
    let { param } = this.state;

    if (this.props.data.error) {
      // Display error message
    }

    const page = this.props.globalState
      ? this.props.globalState.page
      : undefined;
    const pageHeaders = page
      ? page.headers
      : [{ __typename: "Home_H_HeroBlock" }];

    // Disable splitting functionality
    param = false;

    let headers =
      param === "blue" || !param
        ? pageHeaders.map((header, i) => {
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
          })
        : null;
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
              if (param === "blue" || !param) {
                return (
                  <Features
                    data={section}
                    key={i}
                    client={this.props.client}
                    images={this.props.globalState.images}
                  />
                );
              } else {
                return null;
              }
            case "Home_S_ShopBlock":
              if (
                (param === "blue" || !param) &&
                section.shopHead !== "Das Kaffeerudel - Spezialitätenkaffee"
              ) {
                return (
                  <React.Fragment key={i}>
                    <Shop
                      products={this.props.data.shop.products.edges}
                      addVariantToCart={this.addVariantToCart}
                      checkout={this.state.checkout}
                      data={section}
                      collection={section.shopHead}
                      showCollection={section.shopDisplayhead}
                      googleAnalytics={
                        this.props.globalFunctions.googleAnalytics
                      }
                    />
                  </React.Fragment>
                );
              } else if (
                (param === "black" || !param) &&
                section.shopHead === "Das Kaffeerudel - Spezialitätenkaffee"
              ) {
                return (
                  <React.Fragment key={i}>
                    <Shop
                      products={this.props.data.shop.products.edges}
                      addVariantToCart={this.addVariantToCart}
                      checkout={this.state.checkout}
                      data={section}
                      collection={section.shopHead}
                      showCollection={section.shopDisplayhead}
                      googleAnalytics={
                        this.props.globalFunctions.googleAnalytics
                      }
                    />
                  </React.Fragment>
                );
              } else {
                return null;
              }
            case "Home_S_AboutBlock":
              if (param === "blue" || !param) {
                return (
                  <About
                    data={section}
                    key={i}
                    client={this.props.client}
                    images={this.props.globalState.images}
                  />
                );
              } else {
                return null;
              }
            case "Home_S_StepsBlock":
              if (param === "blue" || !param) {
                return (
                  <Steps
                    data={section}
                    key={i}
                    client={this.props.client}
                    images={this.props.globalState.images}
                  />
                );
              } else {
                return null;
              }
            case "Home_S_InstagramBlock":
              if (param === "blue" || !param) {
                return (
                  <Gallery
                    data={section}
                    key={i}
                    images={this.props.globalState.images}
                  />
                );
              } else {
                return null;
              }
            case "Home_S_TrustedBlock":
              if (param === "blue" || !param) {
                return (
                  <Trust
                    data={section}
                    key={i}
                    client={this.props.client}
                    images={this.props.globalState.images}
                  />
                );
              } else {
                return null;
              }
            case "Home_S_WolfBlock":
              if (param === "black" || !param) {
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
                      googleAnalytics={
                        this.props.globalFunctions.googleAnalytics
                      }
                    />
                  </React.Fragment>
                );
              } else {
                return null;
              }
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
            googleAnalytics={this.props.globalFunctions.googleAnalytics}
          />
        );
        sections.push(cart);
        if (headers) {
          // Return Hero shot and sections
          return headers.concat(sections);
        } else {
          // Return only sections
          return sections;
        }
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
)(withRouter(HomePage));

export default HomePageWithDataAndMutation;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Werbeagentur Christian Aichner
 */
