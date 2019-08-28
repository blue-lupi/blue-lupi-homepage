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
        icon: "coffee",
        heading: "Woher bekomme ich den Lupinien Kaffee?",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        link: ""
    },
    {
        icon: "leaf",
        heading: "Wie schmeckt Lupinien Kaffee?",
        text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        link: "test"
    },
    {
        icon: "dog",
        heading: "Fängt man echt an zu heulen?",
        text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        link: "test"
    },
    {
        icon: "user",
        heading: "Woher beziehst du deine Lupinien?",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        link: ""
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
                            <MDBCol key={i} md="6" className="my-3">
                                {item.icon &&
                                    <MDBIcon icon={item.icon} className="fa-lg"/>
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
