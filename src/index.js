//> React
// Contains all the functionality necessary to define React components
import React from "react";
// This serves as an entry point to the DOM and server renderers for React
import ReactDOM from "react-dom";

//> Additional libraries
// Parallax Provider
import { ParallaxProvider } from "react-scroll-parallax";

//> Font Awesome
// Font Awesome is an awesome icon library
import "@fortawesome/fontawesome-free/css/all.min.css";

//> Bootstrap
import "bootstrap-css-only/css/bootstrap.min.css";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import "mdbreact/dist/css/mdb.css";

//> CSS
// Root SCSS file
import "./index.scss";

//> Apollo
import { ApolloClient } from "apollo-client";
import { createHttpLink, HttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import {
  InMemoryCache,
  IntrospectionFragmentMatcher,
} from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";

//> Components
// Root component
import App from "./App";

import registerServiceWorker from "./registerServiceWorker";

//> Shopify API
// API Link
const httpLinkShopify = createHttpLink({
  uri: "https://bluelupi.myshopify.com//api/graphql",
});
// Storefront access token
const middlewareLinkShopify = setContext(() => ({
  headers: {
    "X-Shopify-Storefront-Access-Token": process.env.REACT_APP_STOREFRONT_TOKEN,
  },
}));
// Apollo Client
const clientShopify = new ApolloClient({
  link: middlewareLinkShopify.concat(httpLinkShopify),
  cache: new InMemoryCache(),
});

//> CMS API
// Client
const clientCMS = new ApolloClient({
  link: new HttpLink({
    uri: process.env.REACT_APP_BASEURL + "/api/graphiql",
  }),
  cache: new InMemoryCache({
    fragmentMatcher: new IntrospectionFragmentMatcher({
      introspectionQueryResultData: {
        __schema: {
          types: [],
        },
      },
    }),
  }),
});

// Render the root component to <div id="root"></div>
ReactDOM.render(
  <ApolloProvider client={clientShopify}>
    <ParallaxProvider>
      <App client={clientCMS} />
    </ParallaxProvider>
  </ApolloProvider>,
  document.getElementById("root")
);

registerServiceWorker();

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
