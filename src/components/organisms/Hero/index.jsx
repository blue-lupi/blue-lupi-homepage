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
 MDBContainer,
} from 'mdbreact';

//> Images
// Blue logo of Blue Lupi
import lupiLogoBlue from '../../../assets/logo_blue.png';
// Blue logo of Blue Lupi
import lupiLogoWhite from '../../../assets/logo_white.png';
// Coffee center image
import coffee from '../../../assets/content/coffee_lupi.png';
// Background
import bg1 from '../../../assets/content/bg/bg1.jpg';

class Hero extends React.Component{
    render(){
        return(
            <div id="hero">
                <div className="overlay d-flex justify-content-center align-items-center">
                    <Parallax className="custom-class" y={[-10, 10]} tagOuter="figure">
                        <div className="circle">
                            <img src={coffee} className="img-fluid" alt=""/>
                        </div>
                    </Parallax>
                </div>
                <MDBRow className="w-100 m-0">
                    <MDBCol md="6" className="p-0">
                        <MDBView src={bg1} >
                            <MDBMask pattern={5} className="rgba-purple-slight d-flex justify-content-center align-items-center"></MDBMask>
                        </MDBView>
                    </MDBCol>
                    <MDBCol md="6" className="p-0">
                        
                        <div className="hero-side">
                            <Parallax className="custom-class" y={[-40, 40]} tagOuter="figure">
                            <div>
                                <h2>More</h2>
                                <h2>than</h2>
                                <h2>Coffee</h2>
                                <span>It's an intellectual drink,</span><span>for the chosen ones.</span>
                                <MDBBtn color="lupi-blue" rounded>Take a sip<MDBIcon icon="arrow-right" className="pl-2"/></MDBBtn>
                            </div>
                            </Parallax>
                        </div>
                    
                    </MDBCol>
                </MDBRow>
            </div>
        );
    }
}

export default Hero;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
