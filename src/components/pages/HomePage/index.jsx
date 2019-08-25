//> React
// Contains all the functionality necessary to define React components
import React from 'react';

//> Components
// Hero
import {
  Hero,
} from '../../organisms';
// Sections
import {
  Gallery,
  Shop,
  Steps,
  Sub,
  Trust,
  About,
  FAQ,
} from '../../organisms/Sections';

class HomePage extends React.Component {
  render() {
    return (
      <>
        <Hero />
        <Trust />
        <Shop />
        <Sub />
        <About />
        <Gallery />
        <Steps />
        <FAQ />
      </>
    );
  }
}

export default HomePage;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
