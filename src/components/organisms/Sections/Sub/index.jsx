//> React
// Contains all the functionality necessary to define React components
import React from 'react';

//> Additional libraies
// Parallax
import { Parallax } from 'react-scroll-parallax';

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
    MDBContainer,
    MDBRow,
    MDBCol,
} from 'mdbreact';

//> Images
import { ReactComponent as MoonAndWolf } from '../../../../assets/content/sections/sub/moonandwolf.svg';

class Sub extends React.Component{
    render(){
        return(
            <section id="subscription">
                <MDBContainer>
                    <MDBRow className="m-0 flex-center">
                        <MDBCol md="8">
                            <h2 className="h2-responsive font-weight-bold">
                            Wer mit dem Wolf geht lernt zu heulen.
                            </h2>
                            <p className="lead">Für den täglichen Genuss.</p>
                        </MDBCol>
                        <MDBCol md="4">
                            <MoonAndWolf id="wolfandmoon" />
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
        );
    }
}

export default Sub;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
