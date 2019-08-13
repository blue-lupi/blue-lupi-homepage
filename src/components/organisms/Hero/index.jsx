//> React
// Contains all the functionality necessary to define React components
import React from 'react';

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
 MDBView,
 MDBMask,
 MDBRow,
 MDBCol,
 MDBBtn,
 MDBIcon,
 MDBContainer,
} from 'mdbreact';

//> Images
// Logo of MDB React
import lupiLogoWhite from '../../../assets/logo_white.png';
// Background
import bg1 from '../../../assets/content/bg/bg1.jpg';

class Hero extends React.Component{
    render(){
        return(
            <MDBRow className="w-100 m-0">
                <MDBCol md="6" className="pl-0">
                    <MDBView src={bg1} >
                        <MDBMask pattern={5} className="rgba-purple-slight d-flex justify-content-center align-items-center"></MDBMask>
                    </MDBView>
                </MDBCol>
                <MDBCol md="6" className="hero-side pr-0">
                    <div>
                        <h2>More</h2>
                        <h2>than</h2>
                        <h2>Coffee</h2>
                        <span>It's an intellectual drink,</span><span>for the chosen ones.</span>
                        <MDBBtn color="lupi-blue" rounded>Take a sip<MDBIcon icon="arrow-right" className="pl-2"/></MDBBtn>
                    </div>
                </MDBCol>
            </MDBRow>
        );
    }
}

export default Hero;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
