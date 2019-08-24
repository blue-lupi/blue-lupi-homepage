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
    MDBCardTitle,
    MDBCardImage,
    MDBCardText,
    MDBCardBody,
    MDBContainer,
    MDBBtn,
} from 'mdbreact';

//> Images
// To be added

class Shop extends React.Component{
    render(){
        return(
            <section id="shop">
                <MDBContainer>
                    <MDBRow>
                        <MDBCol>
                            <MDBCard>
                                <MDBCardImage
                                className="img-fluid"
                                src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
                                waves
                                />
                                <MDBCardBody>
                                <MDBCardTitle>Card title</MDBCardTitle>
                                <MDBCardText>
                                    Some quick example text to build on the card title and make
                                    up the bulk of the card&apos;s content.
                                </MDBCardText>
                                <div className="text-left">
                                    <MDBBtn href="#">MDBBtn</MDBBtn>
                                </div>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol>
                            <MDBCard>
                                <MDBCardImage
                                className="img-fluid"
                                src="https://mdbootstrap.com/img/Photos/Others/images/44.jpg"
                                waves
                                />
                                <MDBCardBody>
                                <MDBCardTitle>Card title</MDBCardTitle>
                                <MDBCardText>
                                    Some quick example text to build on the card title and make
                                    up the bulk of the card&apos;s content.
                                </MDBCardText>
                                <div className="text-center">
                                    <MDBBtn href="#">MDBBtn</MDBBtn>
                                </div>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol>
                            <MDBCard>
                                <MDBCardImage
                                className="img-fluid"
                                src="https://mdbootstrap.com/img/Photos/Others/images/45.jpg"
                                waves
                                />
                                <MDBCardBody>
                                <MDBCardTitle>Card title</MDBCardTitle>
                                <MDBCardText>
                                    Some quick example text to build on the card title and make
                                    up the bulk of the card&apos;s content.
                                </MDBCardText>
                                <div className="text-right">
                                    <MDBBtn href="#">MDBBtn</MDBBtn>
                                </div>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
        );
    }
}

export default Shop;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
