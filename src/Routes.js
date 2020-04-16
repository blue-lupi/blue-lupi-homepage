//> React
// Contains all the functionality necessary to define React components
import React from "react";
// DOM bindings for React Router
import { Route, Switch, Redirect } from "react-router-dom";

//> Components
/**
 * HomePage: A basic template page
 */
import { HomePage, MessagePage } from "./components/pages";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <HomePage client={this.props.client} {...this.props} />
          )}
        />
        <Route
          exact
          path="/about"
          render={(props) => <MessagePage {...this.props} />}
        />
        <Route
          exact
          path="/agb"
          render={(props) => <MessagePage {...this.props} />}
        />
        <Route
          exact
          path="/shipping"
          render={(props) => <MessagePage {...this.props} />}
        />
        <Route
          exact
          path="/widerruf"
          render={(props) => <MessagePage {...this.props} />}
        />
        <Route
          exact
          path="/privacy"
          render={(props) => <MessagePage {...this.props} />}
        />
        />
        <Route component={HomePage} />
      </Switch>
    );
  }
}

export default Routes;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
