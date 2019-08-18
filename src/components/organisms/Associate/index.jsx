//> React
// Contains all the functionality necessary to define React components
import React from 'react';

//> Additional libraies
// Parallax
//import { Parallax } from 'react-scroll-parallax';

//> MDB
// "Material Design for Bootstrap" is a great UI design framework


//> Images
// Logo of Blue Lupi (white)
//import lupiLogoWhite from '../../../assets/logo_white_text.png';
// Coffee center image
//import coffee from '../../../assets/content/coffee_lupi.png';
// Background
//import bg1 from '../../../assets/content/bg/bg1.jpg';
import AAU from '../../../assets/content/aau.png';
import Build from '../../../assets/content/build.png';
import EFRE from '../../../assets/content/efre.png';
import Gingel from '../../../assets/content/gingel.png';
import KWF from '../../../assets/content/kwf.png';
import USP from '../../../assets/content/usp.png';

class Associate extends React.Component{
    render(){
        return(
            <div className="companies">
                <div className="row justify-content-center w-100">
                    <div className="col-4 col-md-auto">
                        <img className="img-fluid" src={Gingel} alt="Gingel Naturkosmetik" />
                    </div>
                    <div className="col-4 col-md-auto">
                        <img className="img-fluid" src={AAU} alt="Alpen Adria Universität" />
                    </div>
                    <div className="col-4 col-md-auto desktop-only">
                        <img className="img-fluid" src={KWF} alt="Kärnter Wirtschaftsförderung Fonds" />
                    </div>
                    <div className="col-4 col-md-auto desktop-only">
                        <img className="img-fluid" src={Build} alt="Build! Gründerzentrum" />
                    </div>
                    <div className="col-4 col-md-auto desktop-only">
                        <img className="img-fluid" src={EFRE} alt="EFRE" />
                    </div>
                    <div className="col-4 col-md-auto">
                        <img className="img-fluid" src={USP} alt="USP solutions" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Associate;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
