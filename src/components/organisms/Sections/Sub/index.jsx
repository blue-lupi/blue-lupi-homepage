//> React
// Contains all the functionality necessary to define React components
import React from 'react';

//> Additional libraies
// Parallax
import { Parallax } from 'react-scroll-parallax';

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
    MDBView,
    MDBMask,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBIcon,
    MDBAnimation,
    MDBContainer,
} from 'mdbreact';

//> Images
// To be added

class Sub extends React.Component{
    render(){
        return(
            <section id="subscription">
                <MDBRow className="m-0">
                    <MDBCol md="3">

                    </MDBCol>
                    <MDBCol md="5">
                        <h2 className="h2-responsive font-weight-bold">Wer mit den Wölfen schreitet, lernt zu heulen.</h2>
                        <p className="lead">Für den täglichen Genuss.</p>
                        !! Interactive wolf + Direkte Handlungsaufforderung !!
                    </MDBCol>
                    <MDBCol md="4">
                        !! Parallax Mond.jpg !!
                    </MDBCol>
                </MDBRow>
                
            </section>
        );
    }
}

export default Sub;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
