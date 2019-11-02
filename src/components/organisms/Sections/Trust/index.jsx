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

//> Images
import trivida from '../../../../assets/content/sections/trusted/trivida.png';
import creativeCompany from '../../../../assets/content/sections/trusted/creative-company.png';
import lovelyIn from '../../../../assets/content/sections/trusted/lovely-in.png';

//> CSS
import './trust.scss';

// Data
const data = {
  companies: [
    { name: "Trivida", url: "https://trividavegan.at/", logo: trivida },
    { name: "Creative Company", url: "https://www.creative-company.cc", logo: creativeCompany },
    { name: "Lovely In", url: "http://www.lovely-in.at", logo: lovelyIn }
  ]
};

class Trust extends React.Component{
  render(){
    return(
      <section id="trust">
        <MDBRow className="flex-center m-0">
          {data.companies.map((company, i) => {
            return(
              <MDBCol key={i} md="2" className="text-center">
              <a href={company.url} target="_blank" rel="noopener noreferrer">
                <img className="img-fluid" src={company.logo} alt={company.name}/>
              </a>
              </MDBCol>
            );
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
