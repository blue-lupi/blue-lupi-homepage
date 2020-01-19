//> React
// Contains all the functionality necessary to define React components
import React from 'react';
// DOM bindings for React Router
import { Route, Switch, Redirect } from 'react-router-dom';

//> Components
/**
 * HomePage: A basic template page
 */
import {
  HomePage,
  About,
  Privacy,
  Cancellation,
  Shipping,
  Terms,
} from './components/pages';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route
        exact
        path='/'
        component={(props) => <HomePage
        client={this.props.client}
        {...this.props}
        />
        }
        />
        <Route
        exact
        path='/about'
        component={(props) => <About
        {...this.props}
        />
        }
        />
        <Route
        exact
        path='/privacy'
        component={(props) => <Privacy
        {...this.props}
        />
        }
        />
        <Route
        exact
        path='/terms'
        component={(props) => <Terms
        {...this.props}
        />
        }
        />
        <Route
        exact
        path='/shipping'
        component={(props) => <Shipping
        {...this.props}
        />
        }
        />
        <Route
        exact
        path='/cancellation'
        component={(props) => <Cancellation
        {...this.props}
        />
        }
        />
          
        <Route
          render={function () {
            return <Redirect to='/' />;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
