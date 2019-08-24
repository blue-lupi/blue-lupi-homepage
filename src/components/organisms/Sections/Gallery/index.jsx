//> React
// Contains all the functionality necessary to define React components
import React from 'react';

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
    MDBContainer,
} from 'mdbreact';

class Gallery extends React.Component{
    render(){
        return(
            <section id="gallery">
                <MDBContainer>
                    <div className="text-center">
                        !! Embed Instagram feed !!
                    </div>
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
