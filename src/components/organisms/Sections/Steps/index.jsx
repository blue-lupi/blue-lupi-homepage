//> React
// Contains all the functionality necessary to define React components
import React from 'react';

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
    MDBContainer,
    MDBRow,
    MDBCol,
} from 'mdbreact';

//> Images
// To be added

//> CSS
import './steps.scss';

class Story extends React.Component{
    render(){
        return(
            <section id="steps">
                <MDBContainer>
                    <h2 className="text-center font-weight-bold">Wie wird Blue Lupi produziert?</h2>
                    <MDBRow className="m-0 mt-5">
                        <MDBCol md="6">
                            <img className="img-fluid" src="" alt=""/>
                        </MDBCol>
                        <MDBCol md="6" className="pr-5 pl-5">
                            <h2>Bla bla bla</h2>
                            <p className="lead">Lead to catch attention</p>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus nisl ipsum, at 
                            venenatis ante interdum sit amet. Sed sit amet tempor augue. Fusce at convallis massa. 
                            Aliquam erat volutpat. Ut a portarisus, eu porttitor nisi. Pellentesque
                            turpis turpis, mattis lobortis justo sagittis, tempus ornare dui. Sed ornare nulla ac
                            nulla dapibus, eget vestibulum velit faucibus.
                            </p>
                        </MDBCol>
                        <MDBCol md="6" className="pr-5 pl-5">
                            <h2>Bla bla bla</h2>
                            <p className="lead">Lead to catch attention</p>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus nisl ipsum, at 
                            venenatis ante interdum sit amet. Sed sit amet tempor augue. Fusce at convallis massa. 
                            Aliquam erat volutpat. Ut a portarisus, eu porttitor nisi. Pellentesque
                            turpis turpis, mattis lobortis justo sagittis, tempus ornare dui. Sed ornare nulla ac
                            nulla dapibus, eget vestibulum velit faucibus.
                            </p>
                        </MDBCol>
                        <MDBCol md="6">
                            <img className="img-fluid" src="" alt=""/>
                        </MDBCol>
                        <MDBCol md="6">
                            <img className="img-fluid" src="" alt=""/>
                        </MDBCol>
                        <MDBCol md="6" className="pr-5 pl-5">
                            <h2>Bla bla bla</h2>
                            <p className="lead">Lead to catch attention</p>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus nisl ipsum, at 
                            venenatis ante interdum sit amet. Sed sit amet tempor augue. Fusce at convallis massa. 
                            Aliquam erat volutpat. Ut a portarisus, eu porttitor nisi. Pellentesque
                            turpis turpis, mattis lobortis justo sagittis, tempus ornare dui. Sed ornare nulla ac
                            nulla dapibus, eget vestibulum velit faucibus.
                            </p>
                        </MDBCol>
                        <MDBCol md="6" className="pr-5 pl-5">
                            <h2>Bla bla bla</h2>
                            <p className="lead">Lead to catch attention</p>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus nisl ipsum, at 
                            venenatis ante interdum sit amet. Sed sit amet tempor augue. Fusce at convallis massa. 
                            Aliquam erat volutpat. Ut a portarisus, eu porttitor nisi. Pellentesque
                            turpis turpis, mattis lobortis justo sagittis, tempus ornare dui. Sed ornare nulla ac
                            nulla dapibus, eget vestibulum velit faucibus.
                            </p>
                        </MDBCol>
                        <MDBCol md="6">
                            <img className="img-fluid" src="" alt=""/>
                        </MDBCol>
                        
                    </MDBRow>
                </MDBContainer>
            </section>
        );
    }
}

export default Story;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
