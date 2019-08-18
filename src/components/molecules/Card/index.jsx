//> React
// Contains all the functionality necessary to define React components
import React from 'react';

// Links (replaces <a> tags)
//import { Link } from 'react-router-dom';

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBTooltip,
  MDBCardFooter,
  MDBBtn,
  MDBIcon,
} from 'mdbreact';

class Card extends React.Component{
    render(){
        return(
            <MDBCard className="m-2" style={{ width: "22rem" }} cascade ecommerce>
            <MDBCardImage cascade top src="https://image.jimcdn.com/app/cms/image/transf/dimension=640x10000:format=png/path/s4372efd004d3bc8c/image/i7b6c1b430b6fa2e7/version/1563606530/bluelupi-lupinenkaffee-250g-ger%C3%B6stet-und-gemahlen.png" waves />
            <MDBCardBody cascade className="text-center">
                <MDBCardTitle tag="h5">
                Bluelupi
                </MDBCardTitle>
                <MDBCardTitle>
                <a href="#!"><strong>Lupinen Kaffee</strong></a>
                </MDBCardTitle>
                <MDBCardText>
                Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
                eveniet ut et voluptates. Temporibus autem quibusdam. Lorem Ipsum dolor ament.
                </MDBCardText>
                <MDBCardFooter>
                <span className="float-left">14€ <span className="discount">19€</span></span>
                <span className="float-right">
                <MDBTooltip placement="top">
                    <MDBBtn tag="a" color="transparent" size="lg" className="p-1 m-0 z-depth-0" >
                        <MDBIcon icon="heart"/>
                    </MDBBtn>
                    <div>Added to Wishlist</div>
                    </MDBTooltip>
                </span>
                </MDBCardFooter>
            </MDBCardBody>
            </MDBCard>
        );
    }
}

export default Card;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
