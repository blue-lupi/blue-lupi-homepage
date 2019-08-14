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
} from 'mdbreact';

//> Images
// Blue logo of Blue Lupi
import lupiLogoWhite from '../../../assets/logo_white_text.png';
// Coffee center image
import coffee from '../../../assets/content/coffee_lupi.png';
// Background
import bg1 from '../../../assets/content/bg/bg1.jpg';

class Hero extends React.Component{
    render(){
        return(
            <div id="hero">
                <div className="logo-icon">
                    <div className="view">
                        <img src={lupiLogoWhite} alt="Logo"/>
                        <div className="mask"></div>
                    </div>
                </div>
                <div className="menu-icon">
                    <div className="view">
                        <MDBIcon icon="bars" className="fa-2x" />
                        <div className="mask"></div>
                    </div>
                </div>
                <div className="overlay d-flex justify-content-center align-items-center">
                    <Parallax className="custom-class" y={[-10, 10]} tagOuter="figure">
                        <div className="circle">
                            <div className="view">
                                <MDBAnimation type="fadeIn" duration="500ms">
                                    <MDBAnimation type="rotateIn" duration="1000ms">
                                        <img src={coffee} className="img-fluid" alt="Coffee"/>
                                    </MDBAnimation>
                                </MDBAnimation>
                                <div className="mask"></div>
                            </div>
                        </div>
                    </Parallax>
                </div>
                <MDBRow className="w-100 m-0">
                    <MDBCol md="6" className="p-0">
                        <MDBAnimation type="fadeInLeft" duration="900ms">
                            <MDBView src={bg1} >
                                <MDBMask
                                pattern={5}
                                className="rgba-purple-slight d-flex justify-content-center align-items-center">
                                </MDBMask>
                            </MDBView>
                        </MDBAnimation>
                    </MDBCol>
                    <MDBCol md="6" className="p-0">
                        <div className="hero-side">
                            <Parallax className="parallax" y={[-40, 40]} tagOuter="figure">
                                <div>
                                    <MDBAnimation type="fadeInUp" duration="500ms" delay="450ms">
                                        <h2>More</h2>
                                    </MDBAnimation>
                                    <MDBAnimation type="fadeInUp" duration="500ms" delay="400ms">
                                    <h2>than</h2>
                                    </MDBAnimation>
                                    <MDBAnimation type="fadeInUp" duration="500ms" delay="350ms">
                                    <h2>Coffee</h2>
                                    </MDBAnimation>
                                    <MDBAnimation type="fadeInUp" duration="500ms" delay="300ms">
                                    <span>An intellectual drink,</span>
                                    </MDBAnimation>
                                    <MDBAnimation type="fadeInUp" duration="500ms" delay="200ms">
                                    <span>for the chosen ones.</span>
                                    </MDBAnimation>
                                    <MDBAnimation type="fadeInUp" duration="500ms" delay="100ms">
                                    <MDBBtn color="lupi-blue" rounded> Take a sip
                                        <MDBIcon icon="arrow-right" className="pl-2"/>
                                    </MDBBtn>
                                    </MDBAnimation>
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
