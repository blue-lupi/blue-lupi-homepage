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
} from 'mdbreact';

//> CSS
import './about.scss';

//> Images
// To be added

class About extends React.Component{
    render(){
        return(
            <section id="about">
                <MDBRow className="m-0 p-2">
                    <MDBCol md="6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus nisl ipsum, at 
                        venenatis ante interdum sit amet. Sed sit amet tempor augue. Fusce at convallis massa. 
                        Aliquam erat volutpat. Ut a porta risus, eu porttitor nisi. Pellentesque turpis turpis, 
                        mattis lobortis justo sagittis, tempus ornare dui.
                    </MDBCol>
                    <MDBCol md="6" className="text-right">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus nisl ipsum, at 
                        venenatis ante interdum sit amet. Sed sit amet tempor augue. Fusce at convallis massa. 
                        Aliquam erat volutpat. Ut a porta risus, eu porttitor nisi. Pellentesque turpis turpis, 
                        mattis lobortis justo sagittis, tempus ornare dui.
                    </MDBCol>
                </MDBRow>
                <MDBRow className="m-0 p-2">
                    <MDBCol md="4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus nisl ipsum, at 
                        venenatis ante interdum sit amet. Sed sit amet tempor augue. Fusce at convallis massa. 
                        Aliquam erat volutpat. Ut a porta risus, eu porttitor nisi. Pellentesque turpis turpis, 
                        mattis lobortis justo sagittis, tempus ornare dui.
                    </MDBCol>
                    <MDBCol md="4" className="text-center">
                        Center Icon / Image
                    </MDBCol>
                    <MDBCol md="4" className="text-right">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus nisl ipsum, at 
                        venenatis ante interdum sit amet. Sed sit amet tempor augue. Fusce at convallis massa. 
                        Aliquam erat volutpat. Ut a porta risus, eu porttitor nisi. Pellentesque turpis turpis, 
                        mattis lobortis justo sagittis, tempus ornare dui.
                    </MDBCol>
                </MDBRow>
                <MDBRow className="m-0 p-2">
                    <MDBCol md="6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus nisl ipsum, at 
                        venenatis ante interdum sit amet. Sed sit amet tempor augue. Fusce at convallis massa. 
                        Aliquam erat volutpat. Ut a porta risus, eu porttitor nisi. Pellentesque turpis turpis, 
                        mattis lobortis justo sagittis, tempus ornare dui.
                    </MDBCol>
                    <MDBCol md="6" className="text-right">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus nisl ipsum, at 
                        venenatis ante interdum sit amet. Sed sit amet tempor augue. Fusce at convallis massa. 
                        Aliquam erat volutpat. Ut a porta risus, eu porttitor nisi. Pellentesque turpis turpis, 
                        mattis lobortis justo sagittis, tempus ornare dui.
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
