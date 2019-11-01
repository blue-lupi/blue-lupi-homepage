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
                            <img 
                            className="img-fluid"
                            src="https://i.pinimg.com/originals/d1/9e/ca/d19eca9e90b458c3af755f6cd35f04d9.jpg"
                            alt=""
                            />
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
                            <img
                            className="img-fluid"
                            src="https://previews.123rf.com/images/arkadivna/arkadivna1705/arkadivna170500001/78085874-coffee-machine-isolated-on-white-background-vector-illustration-of-a-sketch-style-.jpg"
                            alt=""
                            />
                        </MDBCol>
                        <MDBCol md="6">
                            <img className="img-fluid" src="https://static3.bigstockphoto.com/2/3/2/large2/232383625.jpg" alt=""/>
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
                            <img 
                            className="img-fluid"
                            src="https://image.shutterstock.com/image-vector/vector-sketch-illustration-cup-coffee-260nw-169482620.jpg"
                            alt=""
                            />
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
