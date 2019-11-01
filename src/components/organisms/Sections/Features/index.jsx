//> React
// Contains all the functionality necessary to define React components
import React from 'react';

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
    MDBContainer,
    MDBRow,
    MDBCol,
} from 'mdbreact';

//> Images
// To be added

//> CSS
import './features.scss';

class Features extends React.Component{
  render(){
    return(
      <section id="features">
        <MDBContainer>
          <h2 className="text-center font-weight-bold">Wieso Bluelupi?</h2>
          <MDBRow className="m-0 mt-5 text-center">
              <MDBCol md="4">
                  <img 
                  className="img-fluid"
                  src="https://i.pinimg.com/originals/d1/9e/ca/d19eca9e90b458c3af755f6cd35f04d9.jpg"
                  alt=""
                  />
                  <h2>Bla bla bla</h2>
                  <p className="lead">Lead to catch attention</p>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus nisl ipsum, at 
                  venenatis ante interdum sit amet. Sed sit amet tempor augue. Fusce at convallis massa. 
                  Aliquam erat volutpat. Ut a portarisus, eu porttitor nisi. Pellentesque
                  turpis turpis, mattis lobortis justo sagittis, tempus ornare dui. Sed ornare nulla ac
                  nulla dapibus, eget vestibulum velit faucibus.
                  </p>
              </MDBCol>
              <MDBCol md="4">
                  <img 
                  className="img-fluid"
                  src="https://i.pinimg.com/originals/d1/9e/ca/d19eca9e90b458c3af755f6cd35f04d9.jpg"
                  alt=""
                  />
                  <h2>Bla bla bla</h2>
                  <p className="lead">Lead to catch attention</p>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus nisl ipsum, at 
                  venenatis ante interdum sit amet. Sed sit amet tempor augue. Fusce at convallis massa. 
                  Aliquam erat volutpat. Ut a portarisus, eu porttitor nisi. Pellentesque
                  turpis turpis, mattis lobortis justo sagittis, tempus ornare dui. Sed ornare nulla ac
                  nulla dapibus, eget vestibulum velit faucibus.
                  </p>
              </MDBCol>
              <MDBCol md="4">
                  <img 
                  className="img-fluid"
                  src="https://i.pinimg.com/originals/d1/9e/ca/d19eca9e90b458c3af755f6cd35f04d9.jpg"
                  alt=""
                  />
                  <h2>Bla bla bla</h2>
                  <p className="lead">Lead to catch attention</p>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus nisl ipsum, at 
                  venenatis ante interdum sit amet. Sed sit amet tempor augue. Fusce at convallis massa. 
                  Aliquam erat volutpat. Ut a portarisus, eu porttitor nisi. Pellentesque
                  turpis turpis, mattis lobortis justo sagittis, tempus ornare dui. Sed ornare nulla ac
                  nulla dapibus, eget vestibulum velit faucibus.
                  </p>
              </MDBCol>
            </MDBRow>
        </MDBContainer>
      </section>
    );
  }
}

export default Features;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
