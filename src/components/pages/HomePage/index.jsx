//> React
// Contains all the functionality necessary to define React components
import React from 'react';

//> Components
import {
  Hero,
  Shop,
  Story,
  Associate,
} from '../../organisms';

class HomePage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Hero />
        <Associate />
        <Shop />
        <Story />
      </React.Fragment>
    );
  }
}

export default HomePage;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
