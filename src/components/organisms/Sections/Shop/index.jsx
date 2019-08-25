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
    MDBCardFooter,
    MDBCardBody,
    MDBContainer,
    MDBBtn,
} from 'mdbreact';

//> Images
import product1 from '../../../../assets/content/sections/shop/product1.png';
import product2 from '../../../../assets/content/sections/shop/product2.png';
import product3 from '../../../../assets/content/sections/shop/product3.png';

//> CSS
import './shop.scss';

class Shop extends React.Component{
    render(){
        return(
            <section id="shop">
                <MDBContainer>
                    <MDBRow className="text-center">
                        <MDBCol>
                            <MDBCard>
                                <MDBCardImage
                                className="img-fluid m-auto pl-5 pr-5 pt-3"
                                src={product1}
                                waves
                                />
                                <MDBCardBody>
                                    <MDBCardTitle>Blue Lupi 250g</MDBCardTitle>
                                    <MDBCardText>
                                        <p>Some quick example text to build on the card title and make
                                        up the bulk of the card&apos;s content.</p>
                                        <small>250g, geröstet und gemahlen</small>
                                    </MDBCardText>
                                </MDBCardBody>
                                <MDBCardFooter>
                                    <MDBBtn color="lupi-blue" href="#">Jetzt genießen</MDBBtn>
                                </MDBCardFooter>
                                
                            </MDBCard>
                        </MDBCol>
                        <MDBCol>
                            <MDBCard>
                                <MDBCardImage
                                className="img-fluid m-auto pl-5 pr-5 pt-3"
                                src={product2}
                                waves
                                />
                                <MDBCardBody>
                                <MDBCardTitle>Blue Lupi 500g</MDBCardTitle>
                                <MDBCardText>
                                    <p>Some quick example text to build on the card title and make
                                    up the bulk of the card&apos;s content.</p>
                                    <small>500g, geröstet und gemahlen</small>
                                </MDBCardText>
                                </MDBCardBody>
                                <MDBCardFooter>
                                    <MDBBtn color="lupi-blue" href="#">Jetzt genießen</MDBBtn>
                                </MDBCardFooter>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol>
                            <MDBCard>
                                <MDBCardImage
                                className="img-fluid m-auto pl-5 pr-5 pt-3"
                                src={product3}
                                waves
                                />
                                <MDBCardBody>
                                <MDBCardTitle>Blue Lupi Kapseln</MDBCardTitle>
                                <MDBCardText>
                                    <p>Some quick example text to build on the card title and make
                                    up the bulk of the card&apos;s content.</p>
                                    <small>100, bald verfügbar</small>
                                </MDBCardText>
                                </MDBCardBody>
                                <MDBCardFooter>
                                    <MDBBtn color="lupi-blue" href="#">Jetzt genießen</MDBBtn>
                                </MDBCardFooter>
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
