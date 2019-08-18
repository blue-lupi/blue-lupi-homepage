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

class Shop extends React.Component{
    render(){
        return(
            <div id="shop">
                <div id="products">
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div id="subscription">
                    <Card />
                    <div class="wolf"></div>
                </div>
            </div>
        );
    }
}

export default Shop;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
