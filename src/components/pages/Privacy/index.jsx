//> React
// Contains all the functionality necessary to define React components
import React from 'react';

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
} from 'mdbreact';

class Privacy extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {
    document.title = "Impressum - Blue Lupi";
  }

  render() {
    const { globalState } = this.props;
    
    if(globalState){
      const data = globalState.page;

      if(data){
        return(
          <MDBContainer className="pt-5">
            <h2>Datenschutz</h2>
            <p dangerouslySetInnerHTML={{__html: data.privacy}}></p>
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

export default Privacy;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
