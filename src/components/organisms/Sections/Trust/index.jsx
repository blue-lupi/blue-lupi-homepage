//> React
// Contains all the functionality necessary to define React components
import React from 'react';

//> Additional libraies
// Parallax
import { Parallax } from 'react-scroll-parallax';

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
    MDBRow,
    MDBCol,
} from 'mdbreact';

//> Images
// To be added

const companies = [
    { name: "Test 1", url: "www.test1.at", image: "test1.jpg" },
    { name: "Test 2", url: "www.test2.at", image: "test2.jpg" },
    { name: "Test 3", url: "www.test3.at", image: "test3.jpg" },
    { name: "Test 4", url: "www.test4.at", image: "test4.jpg" },
]

class Trust extends React.Component{
    render(){
        return(
            <section id="trust">
                <MDBRow className="flex-center m-0">
                    {companies.map((company, i) => {
                        return(
                            <MDBCol md="2" className="text-center">
                                {company.name}
                                <p>Logo to be added.</p>
                            </MDBCol>
                        )
                    })}
                    
                </MDBRow>
            </section>
        );
    }
}

export default Trust;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
