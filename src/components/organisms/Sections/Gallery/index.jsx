//> React
// Contains all the functionality necessary to define React components
import React from 'react';

//> Helpers
// Gallery
import InstagramGallery from "../../../helpers/InstagramFeed";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
    MDBContainer,
} from 'mdbreact';

//> CSS
import './gallery.scss';

/*
 * This can be retrieved with a 
 * GET https://www.instagram.com/web/search/topsearch/?context=blended&query=INSTAGRAM_USERNAME
 * GET https://www.instagram.com/web/search/topsearch/?context=blended&query=blue_lupi
 */
// Instagram Gallery configuration
const THUMBNAIL_WIDTH = 320;

class Gallery extends React.Component{
    render(){
        const { data } = this.props;

        return(
            <section id="gallery">
                <MDBContainer>
                    <InstagramGallery
                        userId={data.instagramId}
                        thumbnailWidth={THUMBNAIL_WIDTH}
                        photoCount={data.instagramPc}
                    />
                </MDBContainer>
            </section>
        );
    }
}

export default Gallery;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
