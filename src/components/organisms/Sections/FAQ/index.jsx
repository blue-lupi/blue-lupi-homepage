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

class FAQ extends React.Component{
    render(){
        const { data } = this.props;

        return(
            <section id="faq">
                <MDBContainer>
                    <h2 className="text-center font-weight-bold">Häufig gestellte Fragen</h2>
                    <MDBRow className="text-center mt-5">
                    {data.questions.map((item, i) => {
                        return (
                            <MDBCol key={i} md="6" className="my-3">
                                {item.icon &&
                                    <MDBIcon icon={item.value.question_icon} className="fa-lg"/>
                                }
                                <h4>{item.value.question_head}</h4>
                                <p dangerouslySetInnerHTML={{__html: item.value.question_paragraph}}></p>
                                {item.value.question_link && 
                                    <a href={item.value.question_link} target="_blank" rel="noopener noreferrer">
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
