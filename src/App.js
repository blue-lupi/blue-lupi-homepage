//> React
// Contains all the functionality necessary to define React components
import React from "react";
// DOM bindings for React Router
import { BrowserRouter as Router } from "react-router-dom";

//> Backend Connection
// Apollo
import { gql } from "apollo-boost";

//> Components
import { Footer } from "./components/molecules";
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

class App extends React.Component {
  componentDidMount = () => {
    // Get tokens and page data
    this.tokenAuth();
    // Refresh token every 2 minutes (120000 ms)
    this.refreshInterval = window.setInterval(this.refreshToken, 120000);
  };

  componentWillUnmount = () => {
    clearInterval(this.refreshInterval);
  };

  tokenAuth = () => {
    this.props.client
      .mutate({
        mutation: LOGIN_USER,
      })
      .then(({ data }) => {
        console.log(data);
        if (data !== undefined) {
          this.setTokens(data.tokenAuth.token, data.tokenAuth.refreshToken);
          this.initializeApp(
            data.tokenAuth.token,
            data.tokenAuth.home,
            data.tokenAuth.survey
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
          token: localStorage.getItem("jwt"),
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

  initializeApp = (token, page, form) => {
    this.setState({
      token,
      loaded: true,
      page,
      form,
    });
  };

  refreshToken = () => {
    this.props.client
      .mutate({
        mutation: REFRESH_TOKEN,
        variables: { token: localStorage.getItem("refreshToken") },
      })
      .then(({ data }) => {
        console.log(data);
        localStorage.setItem("token", data.refreshToken.token);
        localStorage.setItem("refreshToken", data.refreshToken.refreshToken);
      })
      .catch((error) => {
        console.log("Refresh token fail");
      });
  };

  render() {
    console.log(this.state);
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <ScrollToTop>
          <div className="flyout">
            <main>
              <Routes
                globalState={this.state}
                globalFunctions={{ createSurvey: this.createSurvey }}
                client={this.props.client}
              />
            </main>
            <Footer />
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
