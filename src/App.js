//> React
// Contains all the functionality necessary to define React components
import React from 'react';
// DOM bindings for React Router
import { BrowserRouter as Router } from 'react-router-dom';

//> Backend Connection
// Apollo
import { graphql, withApollo } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { createHttpLink, HttpLink } from "apollo-link-http";
import { gql } from "apollo-boost";
import * as compose from 'lodash.flowright';
import { InMemoryCache, IntrospectionFragmentMatcher } from "apollo-cache-inmemory";

//> Components
/**
 * Footer: Global Footer
 * Navbar: Global navigation bar
 */
import {
  Footer,
} from './components/molecules';
// Routes
import Routes from './Routes';

//> Queries / Mutations
// Verify the token
const VERIFY_TOKEN = gql`
  mutation verify($token: String!) {
    verifyToken(token: $token) {
      payload
    }
  }
`;
// Refresh the token
const REFRESH_TOKEN = gql`
  mutation refresh($token: String!) {
    refreshToken(token: $token) {
      payload
      token
    }
  }
`;
// Login anonymous user
const LOGIN_USER = gql`
  mutation tokenAuth{
    tokenAuth(username:"cisco",password:"ciscocisco"){
      token
    }
  }
`;
// Get homepage CMS data
const GET_DATA = gql`
  query getPage($token: String!) {
    page(token: $token, url: "/") {
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
`;
// Individual coffee
const GET_FORM = gql`
  query getFormfield($token: String!) {
    page(token: $token, url: "/survey") {
      id
      contentType
      ... on SurveySurveyFormPage{
        id
        slug
        surveyHead
        surveySubhead
        thankYouText
        formFields{
          name
          helpText
          choices
          fieldType
        }
      }
    }
  }
`;

class App extends React.Component {

  componentDidMount = () => {
    if(localStorage.getItem('fprint') !== null){
      try {
        // Verify Token on first load
        this._verifyToken();
        // Refresh token every 4 minutes
        setInterval(async () => {
          this._verifyToken();
        }, 240000);
      } catch(e) {
        console.log(e);
      }
    } else {
      this._loginUser();
    }
  }

  _verifyToken = () => {
    this.props.client.mutate({
      mutation: VERIFY_TOKEN,
      variables: { "token": localStorage.getItem('fprint') }
    }).then(({data}) => {
      if(data !== undefined){
        if(data.verifyToken !== null){
          this._isLogged(
            data.verifyToken.payload.exp,
            data.verifyToken.payload.origIat,
            localStorage.getItem('fprint')
          );
        } else {
          console.warn("No token in payload.");
        }
      } else {
        console.warn("No token in payload.");
      }
    })
    .catch((error) => {
      console.error("Mutation error:",error);
    })
  }

  _loginUser = () => {
    console.log("Called anonymous user login");
    this.props.client.mutate({
      mutation: LOGIN_USER
      })
    .then(({data}) => {
      console.log(data);
      if(data !== undefined){
        this._setLogged(data.tokenAuth.token);
      }
    })
    .catch((error) => {
      console.log("Login user error");
      console.error("Mutation error:",error);
    })
  }

  _setLogged = (token) => {
    this.setState({
      token: token,
      loaded: true,
    }, () => {
      this._fetchPageData(token);
      localStorage.setItem('fprint', token);
    });
  }

  _isLogged = (exp, orig, token) => {
    /**
     * Generate current timestamp
     * Ref: https://flaviocopes.com/how-to-get-timestamp-javascript/
     */
    let currentTS = ~~(Date.now() / 1000);
    // Check if the token is still valid
    if(currentTS > exp){
      // Token has expired
      this._refeshToken(token);
    } else {
      // Only if anything has changed, update the data
      this._setLogged(token);
    }
  }

  _refeshToken = (token) => {
    this.props.client.mutate({
      mutation: REFRESH_TOKEN,
      variables: { "token": token }
    })
    .then(({data}) => {
      console.log("Token refresh");
      if(data !== undefined){
        this._setLogged(data.refreshToken.token);
      }
    })
    .catch(error => {
      console.error("Mutation error:",error);
    })
  }

  _fetchPageData = (token) => {
    this.props.client.query({
      query: GET_DATA,
      variables: { "token": token }
    }).then(({data}) => {
      console.log(data.page);
      if(data.page){
        this.setState({
          page: data.page,
        }, () => this._fetchFormData(token));
      }
    })
    .catch(error => {
      console.log("Error",error);
      // Temp!
      this._fetchFormData(token);
    })
  }

  _fetchFormData = (token) => {
    this.props.client.query({
      query: GET_FORM,
      variables: { "token": token }
    }).then(({data}) => {
      console.log(data.page);
      if(data.page){
        this.setState({
          form: data.page,
        });
      }
    })
    .catch(error => {
      console.log("Error",error);
    })
  }

  render() {
    console.log(this.state);
    return (
      <Router>
        <div className="flyout">
          <main>
            <Routes globalState={this.state} client={this.props.client} />
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
