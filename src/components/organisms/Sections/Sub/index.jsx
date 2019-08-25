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
import moon from '../../../../assets/content/sections/sub/moon.png';
import { ReactComponent as Wolf } from '../../../../assets/content/sections/sub/wolf.svg';

class Sub extends React.Component{

    componentDidMount = () => {
        let frames = document.querySelectorAll('.frame');
        let currentFrame = 0;
        let previousFrame = 7;

        setInterval(function () {
            frames[currentFrame].style.visibility = 'visible';
            frames[previousFrame].style.visibility = 'hidden';

            if (currentFrame < frames.length - 1) {
                currentFrame += 1;
                previousFrame = currentFrame - 1;
            } else {
                currentFrame = 0;
                previousFrame = 7;
            }
        }, 75);
    }

    render(){
        return(
            <section id="subscription">
                <MDBRow className="m-0">
                    <MDBCol md="3"></MDBCol>
                    <MDBCol md="5">
                        <h2 className="h2-responsive font-weight-bold">
                        Wer mit den Wölfen schreitet, lernt zu heulen.
                        </h2>
                        <p className="lead">Für den täglichen Genuss.</p>
                        <div className="box">
                            <Wolf />
                        </div>
                    </MDBCol>
                    <MDBCol md="4">
                        <Parallax className="parallax" y={[-40, 40]} tagOuter="figure">
                            <img src={moon} alt="Mond"/>
                        </Parallax>
                    </MDBCol>
                </MDBRow>
            </section>
        );
    }
}

export default Sub;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
