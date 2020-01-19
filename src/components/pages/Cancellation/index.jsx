//> React
// Contains all the functionality necessary to define React components
import React from 'react';

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
    MDBContainer,
} from 'mdbreact';

class About extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {
    document.title = "Widerrufsrecht - Blue Lupi";
  }

  render() {
    const { globalState } = this.props;
    
    if(globalState){
      const data = globalState.page;

      if(data){
        return(
          <MDBContainer className="pt-5">
            <h2>Widerrufsrecht</h2>
            <p dangerouslySetInnerHTML={{__html: data.cancellationPolicy}}></p>
          </MDBContainer>
        );
      } else {
        return null;
      }
    } else {
      return null;
    }
    
  }
}

export default About;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
