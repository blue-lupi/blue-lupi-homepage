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

//> CSS
import './steps.scss';

//> Apollo
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

//> Queries
// Get image by ID
const GET_IMAGE = gql`
  query getImage($token: String!, $id: Int!){
    image(token: $token, id: $id){
      urlLink
    }
  }
`;

class Story extends React.Component{

  renderSteps = (data) => {
    let rtn = data.stepsSteps.map((step, i) => {
      if(i % 2 !== 1){
        // img L
        return(
          <React.Fragment key={i}>
            <MDBCol md="6">
                <Query 
                query={GET_IMAGE}
                variables={{"token": localStorage.getItem('fprint'), "id": step.value.step_image}}
                client={this.props.client}
                >
                  {({ loading, error, data }) => {
                    if (loading) return null;
                    if (error) return null;
                    return (
                      <img 
                      src={process.env.REACT_APP_BASEURL+data.image.urlLink}
                      className="img-fluid" alt={step.value.step_head}
                      />
                    );
                  }}
                </Query>
            </MDBCol>
            <MDBCol md="6" className="pr-5 pl-5">
                <h2>{step.value.step_head}</h2>
                <p className="lead" dangerouslySetInnerHTML={{__html: step.value.step_subhead}}></p>
                <p dangerouslySetInnerHTML={{__html: step.value.step_paragraph}}></p>
            </MDBCol>
          </React.Fragment>
        );
      } else {
        // img R
        return(
          <React.Fragment key={i}>
            <MDBCol md="6" className="pr-5 pl-5">
                <h2>{step.value.step_head}</h2>
                <p className="lead" dangerouslySetInnerHTML={{__html: step.value.step_subhead}}></p>
                <p dangerouslySetInnerHTML={{__html: step.value.step_paragraph}}></p>
            </MDBCol>
            <MDBCol md="6">
                <Query 
                query={GET_IMAGE}
                variables={{"token": localStorage.getItem('fprint'), "id": step.value.step_image}}
                client={this.props.client}
                >
                  {({ loading, error, data }) => {
                    if (loading) return null;
                    if (error) return null;
                    return (
                      <img
                      src={process.env.REACT_APP_BASEURL+data.image.urlLink}
                      className="img-fluid" alt={step.value.step_head}
                      />
                    );
                  }}
                </Query>
            </MDBCol>
          </React.Fragment>
        );
      }
    });

    return rtn;
  }

  render(){
    const { data } = this.props;

    return(
      <section id="steps">
        <MDBContainer>
          {data.stepsDisplayhead &&
          <h2 className="text-center font-weight-bold">
          {data.stepsHead}
          </h2>
          }
          <MDBRow className="m-0 mt-5">
            {this.renderSteps(data)}
          </MDBRow>
        </MDBContainer>
      </section>
    );
  }
}

export default Story;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
