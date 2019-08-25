//> React
// Contains all the functionality necessary to define React components
import React from 'react';

//> Additional libraies
// Parallax
//import { Parallax } from 'react-scroll-parallax';

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
    MDBRow,
    MDBCol,
    MDBCard,
} from 'mdbreact';

//> CSS
import './about.scss';

//> Images
import tempIcon from '../../../../assets/content/sections/about/temp.png';

class About extends React.Component{
    render(){
        return(
            <section id="about">
                <h2 className="font-weight-bold text-center">Über mich</h2>
                <MDBRow className="m-0 p-2 flex-center">
                    <MDBCol md="5">
                        <MDBCard className="p-4">
                            <h3>Test</h3>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus nisl ipsum, at 
                            venenatis ante interdum sit amet. Sed sit amet tempor augue.
                            </p>
                        </MDBCard>
                        <MDBCard className="p-4">
                            <h3>Test</h3>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus nisl ipsum, at 
                            venenatis ante interdum sit amet. Sed sit amet tempor augue.
                            </p>
                        </MDBCard>
                        <MDBCard className="p-4">
                            <h3>Test</h3>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus nisl ipsum, at 
                            venenatis ante interdum sit amet. Sed sit amet tempor augue.
                            </p>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md="2" className="text-center">
                        <div className="circle">
                            <div className="icon">
                                <img src={tempIcon} className="img-fluid" alt="Icon"/>
                            </div>
                        </div>
                    </MDBCol>
                    <MDBCol md="5" className="text-right">
                        <MDBCard className="p-4">
                            <h3>Test</h3>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus nisl ipsum, at 
                            venenatis ante interdum sit amet. Sed sit amet tempor augue.
                            </p>
                        </MDBCard>
                        <MDBCard className="p-4">
                            <h3>Test</h3>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus nisl ipsum, at 
                            venenatis ante interdum sit amet. Sed sit amet tempor augue.
                            </p>
                        </MDBCard>
                        <MDBCard className="p-4">
                            <h3>Test</h3>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus nisl ipsum, at 
                            venenatis ante interdum sit amet. Sed sit amet tempor augue.
                            </p>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </section>
        );
    }
}

export default About;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
