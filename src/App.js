//> React
// Contains all the functionality necessary to define React components
import React from "react";
// DOM bindings for React Router
import { BrowserRouter as Router } from "react-router-dom";

//> Additional
// Analytics
import ReactGA from "react-ga";
// Facebook Pixel
import ReactPixel from "react-facebook-pixel";

//> Backend Connection
// Apollo
import { gql } from "apollo-boost";

//> Components
import { Footer, CookieModal } from "./components/molecules";
import { ScrollToTop } from "./components/atoms";
// Routes
import Routes from "./Routes";

//> Queries / Mutations
// Refresh the token
const REFRESH_TOKEN = gql`
  mutation refresh($token: String!) {
    refreshToken(refreshToken: $token) {
      token
      refreshToken
    }
  }
`;
// Login anonymous user
const LOGIN_USER = gql`
  mutation tokenAuth {
    tokenAuth(username: "cisco", password: "ciscocisco") {
      token
      refreshToken
      images {
        id
        urlLink
      }
      survey {
        id
        contentType
        ... on SurveySurveyFormPage {
          id
          slug
          surveyHead
          surveySubhead
          thankYouText
          formFields {
            name
            helpText
            required
            title
            placeholder
            image {
              url
            }
            choices
            fieldType
          }
        }
      }
      home {
        id
        title
        ... on HomeHomePage {
          id
          title
          city
          zipCode
          address
          telephone
          telefax
          vatNumber
          whatsappTelephone
          whatsappContactline
          shipping
          gtc
          cancellationPolicy
          taxId
          courtOfRegistry
          placeOfRegistry
          tradeRegisterNumber
          ownership
          email
          copyrightholder
          about
          privacy
          headers {
            __typename
            ... on Home_H_HeroBlock {
              slideLoadimage
              slideImage {
                urlLink
              }
              slideButton {
                buttonLink
                buttonTitle
                buttonPage {
                  urlPath
                }
                buttonEmbed
                id
              }
            }
          }
          sections {
            ... on Home_S_WhyBlock {
              whyHead
              whyDisplayhead
              whyColumns
            }
            ... on Home_S_InstagramBlock {
              instagramId
              instagramPc
            }
            ... on Home_S_ShopBlock {
              shopHead
              shopDisplayhead
            }
            ... on Home_S_StepsBlock {
              stepsHead
              stepsDisplayhead
              stepsSteps
            }
            ... on Home_S_AboutBlock {
              aboutHead
              aboutDisplayhead
              aboutCards
            }
            ... on Home_S_TrustedBlock {
              trustedPartner
            }
            ... on Home_S_WolfBlock {
              wolfHead
              wolfSubhead
            }
            ... on Home_S_FAQBlock {
              questions
            }
          }
          footers {
            ... on Home_S_SmallTrustedBlock {
              trustedPartner
            }
          }
        }
      }
    }
  }
`;
// Create survey
const CREATE_SURVEY = gql`
  mutation setSurvey($token: String!, $values: GenericScalar!) {
    surveySurveyFormPage(token: $token, url: "/home/survey", values: $values) {
      result
      errors {
        name
        errors
      }
    }
  }
`;

//> Number formatting
const formatter = new Intl.NumberFormat("de-DE", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

class App extends React.Component {
  state = {};

  componentDidMount = () => {
    // Get tokens and page data
    this.tokenAuth();
    // Refresh token every 2 minutes (120000 ms)
    this.refreshInterval = window.setInterval(this.refreshToken, 120000);
    // Initialize Analytics
    this.checkCookies();
  };

  componentWillUnmount = () => {
    clearInterval(this.refreshInterval);
  };

  checkCookies = () => {
    // Create custom user id for tracking
    let userId = localStorage.getItem("userId");

    if (!userId) {
      const sha256 = require("js-sha256");

      userId = sha256.create();

      localStorage.setItem("userId", userId);
    }

    // Check cookies
    let cookie = localStorage.getItem("cookie");

    if (cookie) {
      cookie = JSON.parse(cookie);
      if (cookie.marketing || cookie.statistics) {
        if (
          window.location.hostname !== "localhost" &&
          window.location.hostname !== "127.0.0.1"
        ) {
          // Google Analytics
          ReactGA.initialize("UA-148740308-3", {
            gaOptions: {
              userId,
            },
          });
          ReactGA.pageview(window.location.pathname + window.location.search);

          // Facebook Pixel
          if (cookie.marketing) {
            ReactPixel.init("232610764688272");
            ReactPixel.pageView();
          }
        }
      }
    }
  };

  saveCookie = () => {
    this.checkCookies();
  };

  registerInCard = (collection, title) => {
    // Facebook Pixel
    ReactPixel.track("AddToCard");
    // Google Analytics
    ReactGA.event({
      category: "Shop",
      action: "Item put in card",
      label: `${collection} ${title}`,
    });
  };

  registerCheckout = (lineItems) => {
    // Facebook Pixel
    ReactPixel.track("InitiateCheckout");

    // Get cart configuration
    const cart = lineItems.map((item, i) => {
      return {
        quantity: item.props.lineItem.quantity,
        title: item.props.lineItem.title,
        variant: item.props.lineItem.variant.title,
        price:
          "EUR " +
          formatter.format(
            parseFloat(item.props.lineItem.quantity) *
              parseFloat(item.props.lineItem.variant.price)
          ),
      };
    });

    // Google Analytics
    ReactGA.event({
      category: "Shop",
      action: "Checkout started",
      label: JSON.stringify(cart),
    });
  };

  registerQuestionnaireStart = () => {
    // Facebook Pixel
    ReactPixel.trackCustom("InitiateQuestionnaire");
    // Google Analytics
    ReactGA.event({
      category: "Questionnaire",
      action: "Questionnaire started",
    });
  };

  registerQuestionnaireComplete = () => {
    // Facebook Pixel
    ReactPixel.track("CompleteQuestionnaire");
    // Google Analytics
    ReactGA.event({
      category: "Questionnaire",
      action: "Questionnaire completed",
    });
  };

  tokenAuth = () => {
    this.props.client
      .mutate({
        mutation: LOGIN_USER,
      })
      .then(({ data }) => {
        if (data !== undefined) {
          this.setTokens(data.tokenAuth.token, data.tokenAuth.refreshToken);
          this.initializeApp(
            data.tokenAuth.home,
            data.tokenAuth.survey,
            data.tokenAuth.images
          );
        }
      })
      .catch((error) => {
        console.error("Could not log in as anonymous user.", error);
      });
  };

  setTokens = (token, refreshToken) => {
    localStorage.setItem("token", token);
    localStorage.setItem("refreshToken", refreshToken);
  };

  createSurvey = (values) => {
    this.props.client
      .mutate({
        mutation: CREATE_SURVEY,
        variables: {
          token: localStorage.getItem("token"),
          values,
        },
      })
      .then(({ data }) => {
        console.log("Survey sent");
      })
      .catch((error) => {
        console.error("Survey not sent", error);
      });
  };

  initializeApp = (page, form, images) => {
    this.setState({
      loaded: true,
      page,
      form,
      images,
    });
  };

  refreshToken = () => {
    this.props.client
      .mutate({
        mutation: REFRESH_TOKEN,
        variables: { token: localStorage.getItem("refreshToken") },
      })
      .then(({ data }) => {
        localStorage.setItem("token", data.refreshToken.token);
        localStorage.setItem("refreshToken", data.refreshToken.refreshToken);
      })
      .catch((error) => {
        console.log("Refresh token fail");
      });
  };

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <ScrollToTop>
          <div className="flyout">
            <main>
              <Routes
                globalState={this.state}
                globalFunctions={{
                  createSurvey: this.createSurvey,
                  googleAnalytics: {
                    registerCheckout: this.registerCheckout,
                    registerInCard: this.registerInCard,
                    registerQuestionnairePutInCard: this
                      .registerQuestionnairePutInCard,
                    registerQuestionnaireComplete: this
                      .registerQuestionnaireComplete,
                    registerQuestionnaireStart: this.registerQuestionnaireStart,
                  },
                }}
                client={this.props.client}
              />
              <CookieModal saveCookie={this.saveCookie} />
            </main>
            {this.state.page && this.state.form && (
              <Footer
                sections={this.state.page.sections}
                images={this.state.images}
              />
            )}
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Werbeagentur Christian Aichner
 */
