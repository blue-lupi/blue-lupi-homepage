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
import './features.scss';

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

class Features extends React.Component{

  renderReasons = (data) => {

    let width = (data.whyColumns.length === 4 || data.whyColumns.length === 8) ? "3" : "4";

    let rtn = data.whyColumns.map((reason, i) => {
      console.log(reason.value.Column_image);
      return(
        <MDBCol md={width} key={i}>
          <Query 
          query={GET_IMAGE}
          variables={{"token": localStorage.getItem('jwt'), "id": reason.value.Column_image}}
          client={this.props.client}
          >
            {({ loading, error, data }) => {
              if (loading) return null;
              if (error) return null;
              return (
                <img 
                src={process.env.REACT_APP_BASEURL+data.image.urlLink}
                className="img-fluid" alt={reason.value.Column_head}
                />
              );
            }}
          </Query>
          <h2>{reason.value.Column_head}</h2>
          <p className="lead" dangerouslySetInnerHTML={{__html: reason.value.Column_subhead}}></p>
          <p dangerouslySetInnerHTML={{__html: reason.value.Column_paragraph}}></p>
        </MDBCol>
      );
    });
    return rtn;
  }

  render(){
    const { data } = this.props;

    return(
      <section id="features">
        <MDBContainer>
          <h2 className="text-center font-weight-bold">{data.whyHead}</h2>
          <MDBRow className="m-0 mt-5 text-center">
            {this.renderReasons(data)}
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
