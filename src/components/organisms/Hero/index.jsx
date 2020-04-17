//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> Additional modules
// Parallax
import { Parallax } from "react-scroll-parallax";
// Scroll
import { Link } from "react-scroll";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBView,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBAnimation,
} from "mdbreact";

//> Images
// Logo of Blue Lupi (white)
import lupiLogoWhite from "../../../assets/logo_white_text.png";
// Coffee center image
import coffeeMug from "../../../assets/content/coffee_lupi.png";

class Hero extends React.Component {
  render() {
    const { data } = this.props;
    let loaded = false;

    if(data.slideImage){
      loaded = true;
    }

    return (
      <div id="hero">
        <div className="logo-icon">
          <div className="view">
            <img src={lupiLogoWhite} alt="Logo" />
            <div className="mask"></div>
          </div>
        </div>
        <span onClick={this.props.handleCartOpen}>
          <div className="menu-icon">
            <div className="view">
              <MDBIcon icon="shopping-basket" className="fa-2x" />
              <div className="mask"></div>
            </div>
          </div>
        </span>
        <div className="overlay d-flex justify-content-center align-items-center">
          <Parallax className="custom-class" y={[-10, 10]} tagOuter="figure">
            <div className="circle">
              <div className="view">
                <MDBAnimation type="fadeIn" duration="500ms">
                  <MDBAnimation type="rotateIn" duration="1000ms">
                    <img src={coffeeMug} className="img-fluid" alt="Coffee" />
                  </MDBAnimation>
                </MDBAnimation>
                <div className="mask"></div>
              </div>
            </div>
          </Parallax>
        </div>
        <MDBRow className="w-100 m-0">
          <MDBCol md="6" className="p-0">
            <MDBAnimation type="fadeInLeft" duration="900ms">
              <MDBView
                src={loaded ? process.env.REACT_APP_BASEURL + data.slideImage.urlLink : "https://cdn.coffeecircle.com/29dd57ff-51b3-446c-a789-28bc3e463fe8/"}
              >
                <MDBMask
                  pattern={5}
                  className="rgba-purple-slight d-flex justify-content-center align-items-center"
                ></MDBMask>
              </MDBView>
            </MDBAnimation>
          </MDBCol>
          <MDBCol md="6" className="p-0">
            <MDBRow className="flex-center m-0 p-0">
              <MDBCol md="6">
                <div className="hero-side">
                  <Parallax
                    className="parallax"
                    y={[-40, 40]}
                    tagOuter="figure"
                  >
                    <div>
                      <MDBAnimation
                        type="fadeInUp"
                        duration="500ms"
                        delay="450ms"
                      >
                        <h2>More</h2>
                      </MDBAnimation>
                      <MDBAnimation
                        type="fadeInUp"
                        duration="500ms"
                        delay="400ms"
                      >
                        <h2>than</h2>
                      </MDBAnimation>
                      <MDBAnimation
                        type="fadeInUp"
                        duration="500ms"
                        delay="350ms"
                      >
                        <h2>Coffee</h2>
                      </MDBAnimation>
                      <MDBAnimation
                        type="fadeInUp"
                        duration="500ms"
                        delay="300ms"
                      >
                        <span className="pt-2">An intellectual drink,</span>
                      </MDBAnimation>
                      <MDBAnimation
                        type="fadeInUp"
                        duration="500ms"
                        delay="200ms"
                      >
                        <span>for the chosen ones.</span>
                      </MDBAnimation>
                      {loaded && data.slideButton.buttonTitle && (
                        <MDBAnimation
                          type="fadeInUp"
                          duration="500ms"
                          delay="100ms"
                        >
                          <Link
                            to="features"
                            smooth={true}
                            spy={true}
                            duration={300}
                          >
                            <MDBBtn color="white" rounded>
                              {data.slideButton.buttonTitle}
                              <MDBIcon
                                icon="arrow-right"
                                className="pl-3 fa-lg"
                              />
                            </MDBBtn>
                          </Link>
                        </MDBAnimation>
                      )}
                    </div>
                  </Parallax>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </div>
    );
  }
}

export default Hero;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
