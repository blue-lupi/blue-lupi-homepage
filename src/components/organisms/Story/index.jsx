//> React
// Contains all the functionality necessary to define React components
import React from 'react';

//> Additional libraies
// Parallax
//import { Parallax } from 'react-scroll-parallax';

//> MDB
// "Material Design for Bootstrap" is a great UI design framework

//> Components
import {
 Card,
} from '../../molecules';

//> Images

class Story extends React.Component{
    render(){
        return(
            <div id="story">
                <div class="roots"></div>
            </div>
        );
    }
}

export default Story;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
