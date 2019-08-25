//> React
// Contains all the functionality necessary to define React components
import React from 'react';

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
} from 'mdbreact';

//> CSS
import './faq.scss';

// Dummy data
const items = [
    {
        icon: "leaf",
        heading: "Wie brät man Lorem Ipsum?",
        text: "Lorem Ipsum dolor sit amet",
        link: ""
    },
    {
        icon: "leaf",
        heading: "Wie schmeckt Lupinien Kaffee?",
        text: "Lorem Ipsum dolor sit amet",
        link: "test"
    }
];

class FAQ extends React.Component{
    render(){
        return(
            <section id="faq">
                <MDBContainer>
                    <h2 className="text-center font-weight-bold">Häufig gestellte Fragen</h2>
                    <MDBRow className="text-center mt-5">
                    {items.map((item, i) => {
                        return (
                            <MDBCol key={i} md="6">
                                {item.icon &&
                                    <MDBIcon icon={item.icon} />
                                }
                                <h4>{item.heading}</h4>
                                <p>{item.text}</p>
                                {item.link && 
                                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                                    Mehr dazu
                                    </a>
                                }
                            </MDBCol>
                        );
                    })}
                    </MDBRow>
                </MDBContainer>
            </section>
        );
    }
}

export default FAQ;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
