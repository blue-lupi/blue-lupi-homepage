//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import { MDBRow, MDBCol } from "mdbreact";

export default class extends React.Component {
  state = { photos: [] };

  async componentDidMount() {
    try {
      // Hack from https://stackoverflow.com/a/47243409/2217533
      const response = await fetch(
        `https://www.instagram.com/graphql/query?query_id=17888483320059182&variables={"id":"
        ${this.props.userId}","first":${this.props.photoCount},"after":null}`
      );

      const { data } = await response.json();
      const photos = data.user.edge_owner_to_timeline_media.edges.map(
        ({ node }) => {
          const { id } = node;
          const caption = node.edge_media_to_caption.edges[0].node.text;
          const thumbnail = node.thumbnail_resources.find(
            (thumbnail) => thumbnail.config_width === this.props.thumbnailWidth
          );

          const { src, config_width: width, config_height: height } = thumbnail;
          const url = `https://www.instagram.com/p/${node.shortcode}`;

          return {
            id,
            caption,
            src,
            width,
            height,
            url,
          };
        }
      );
      this.setState({ photos });
    } catch (error) {
      console.error("Could not get Instagram feed", error);
    }
  }

  render() {
    return (
      <MDBRow>
        {this.state.photos &&
          this.state.photos.map(({ src, url }, i) => (
            <MDBCol key={i} md="4">
              <a href={url} target="_blank" rel="noopener noreferrer">
                <img className="img-fluid" alt="Instagram Feed" src={src} />
              </a>
            </MDBCol>
          ))}
      </MDBRow>
    );
  }
}

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Werbeagentur Christian Aichner
 */
