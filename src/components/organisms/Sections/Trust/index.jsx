//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> Additional libraies
// Parallax
//import { Parallax } from 'react-scroll-parallax';

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import { MDBRow, MDBCol } from "mdbreact";

//> CSS
import "./trust.scss";

//> Apollo
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

//> Queries
// Get image by ID
const GET_IMAGE = gql`
  query getImage($token: String!, $id: Int!) {
    image(token: $token, id: $id) {
      urlLink
    }
  }
`;

class Trust extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <section id="trust">
        <MDBRow className="flex-center m-0">
          {data.trustedPartner.map((company, i) => {
            return (
              <MDBCol key={i} md="2" className="text-center">
                <a
                  href={company.value.partner_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Query
                    query={GET_IMAGE}
                    variables={{
                      token: localStorage.getItem("jwt"),
                      id: company.value.partner_logo,
                    }}
                    client={this.props.client}
                  >
                    {({ loading, error, data }) => {
                      if (loading) return null;
                      if (error) return null;
                      return (
                        <img
                          src={
                            process.env.REACT_APP_BASEURL + data.image.urlLink
                          }
                          className="img-fluid"
                        />
                      );
                    }}
                  </Query>
                </a>
              </MDBCol>
            );
          })}
        </MDBRow>
      </section>
    );
  }
}

export default Trust;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
