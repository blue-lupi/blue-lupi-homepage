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

//> CMS API
// Cache setup
const fragmentMatcher = new IntrospectionFragmentMatcher({
introspectionQueryResultData: {
    __schema: {
    types: [], // no types provided - works like a charm.ing
    },
},
});
const cache = new InMemoryCache({ fragmentMatcher });
// Create api url from base url
const APILink = "http://lupi.snek.at/api/graphiql";
const LINK:HttpLink = new HttpLink({
  uri: APILink,
  headers: {
    authorization: localStorage.getItem('fprint')
  }
});
// Apollo Client setup
const clientCMS = new ApolloClient({
  cache,
  link: LINK,
});

class App extends React.Component {

  componentDidMount = () => {

    if(clientCMS){
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
    } else {
      console.log("No client");
    }
  }

  _verifyToken = () => {
    clientCMS.mutate({
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
    console.log(clientCMS);
    clientCMS.mutate({
      mutation: LOGIN_USER
    }).then(({data}) => {
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
    }, () => localStorage.setItem('fprint', token));
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
    clientCMS.mutate({
      mutation: REFRESH_TOKEN,
      variables: { "token": token }
    })
    .then(({data}) => {
      if(data !== undefined){
        localStorage.setItem('fprint', data.refreshToken.token);
      }
    })
    .catch(error => {
      console.error("Mutation error:",error);
    })
  }

  render() {
    return (
      <Router>
        <div className="flyout">
          <main>
            <Routes globalState={this.state} />
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default compose(
  graphql(VERIFY_TOKEN, { name: 'verify' }),
  graphql(REFRESH_TOKEN, { name: 'refresh' }),
  graphql(LOGIN_USER, { name: 'login' }),
)(withApollo(App));

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
