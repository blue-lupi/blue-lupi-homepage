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
// Verify the token
const VERIFY_TOKEN = gql`
  mutation verify($token: String!) {
    verifyToken(token: $token) {
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
// Refresh the token
const REFRESH_TOKEN = gql`
  mutation refresh($token: String!) {
    refreshToken(token: $token) {
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
    // Check if there is a JSON Web Token existent
    if (localStorage.getItem("jwt") !== null) {
      try {
        // Verify Token
        this.verifyToken();
      } catch (e) {
        // Try to refresh token
        this.refreshToken();
      }
    } else {
      // If there is no JSON Web Token, just login as anonymous user
      this.loginUser();
    }
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
        console.error("Console not sent", error);
      });
  };

  verifyToken = () => {
    this.props.client
      .mutate({
        mutation: VERIFY_TOKEN,
        variables: { token: localStorage.getItem("jwt") },
      })
      .then(({ data }) => {
        if (data !== undefined) {
          if (data.verifyToken !== null) {
            this.isLogged(
              data.verifyToken.payload.exp,
              data.verifyToken.payload.origIat,
              localStorage.getItem("jwt"),
              data.verifyToken.home,
              data.verifyToken.survey
            );
          } else {
            this.refreshToken();
          }
        } else {
          this.refreshToken();
        }
      })
      .catch((error) => {
        this.refreshToken();
      });
  };

  loginUser = () => {
    this.props.client
      .mutate({
        mutation: LOGIN_USER,
      })
      .then(({ data }) => {
        if (data !== undefined) {
          this.setLogged(
            data.tokenAuth.token,
            data.tokenAuth.home,
            data.tokenAuth.survey
          );
        }
      })
      .catch((error) => {
        console.error("Mutation error:", error);
      });
  };

  setLogged = (token, page, form) => {
    this.setState(
      {
        token,
        loaded: true,
        page,
        form,
      },
      () => {
        localStorage.setItem("jwt", token);
      }
    );
  };

  isLogged = (exp, orig, token, home) => {
    /**
     * Generate current timestamp
     * Ref: https://flaviocopes.com/how-to-get-timestamp-javascript/
     */
    let currentTS = ~~(Date.now() / 1000);

    // Check if the token is still valid
    if (currentTS > exp) {
      // Token has expired
      this.refreshToken(token);
    } else {
      // Only if anything has changed, update the data
      this.setLogged(token, home);
    }
  };

  refreshToken = (token) => {
    this.props.client
      .mutate({
        mutation: REFRESH_TOKEN,
        variables: { token },
      })
      .then(({ data }) => {
        if (data !== undefined) {
          this.setLogged(data.refreshToken.token);
        }
      })
      .catch((error) => {
        // If refresh token fails, log in as anonymous user
        this.loginUser();
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
