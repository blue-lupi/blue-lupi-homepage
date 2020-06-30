//#region > Imports
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

//> Additional
import { NavBar } from "../../molecules";

//> Images
// Logo of Blue Lupi (white)
import lupiLogoWhite from "../../../assets/logo_white_text.png";
// Coffee center image
import coffeeMug from "../../../assets/content/coffee_lupi.png";
// Placeholder image
//import placeholderImage from "../../../assets/content/bg/white.jpg";
import localImage from "../../../assets/content/bg/bg.jpg";
//#endregion

//#region > Components
class Hero extends React.Component {
  render() {
    const { data } = this.props;
    let loaded = false;

    if (data.slideImage) {
      loaded = true;
    }

    return (
      <div id="hero">
        <NavBar></NavBar>
        <div className="overlay justify-content-center align-items-center d-flex d-lg-none">
          <div className="circle mobile">
            <div className="view text-center">
              <MDBAnimation type="fadeIn" duration="500ms">
                <MDBAnimation type="rotateIn" duration="1000ms">
                  <img src={coffeeMug} className="img-fluid" alt="Coffee" />
                </MDBAnimation>
                <MDBAnimation type="fadeInUp" duration="500ms" delay="400ms">
                  <div className="text-white">
                    <h2 className="font-weight-bold">More than coffee</h2>
                  </div>
                  {loaded && data.slideButton.buttonTitle && (
                    <MDBAnimation
                      type="fadeInUp"
                      duration="500ms"
                      delay="500ms"
                    >
                      <Link to="shop" smooth={true} spy={true} duration={300}>
                        <MDBBtn color="white" size="lg" rounded>
                          {data.slideButton.buttonTitle}
                          <MDBIcon icon="arrow-right" className="pl-3 fa-lg" />
                        </MDBBtn>
                      </Link>
                    </MDBAnimation>
                  )}
                </MDBAnimation>
              </MDBAnimation>
            </div>
          </div>
        </div>
        <div className="overlay justify-content-center align-items-center d-none d-lg-flex">
          <Parallax className="custom-class" y={[-10, 10]} tagOuter="figure">
            <div className="circle">
              <div className="view">
                <MDBAnimation type="fadeIn" duration="500ms">
                  <MDBAnimation type="rotateIn" duration="1000ms">
                    <img src={coffeeMug} className="img-fluid" alt="Coffee" />
                  </MDBAnimation>
                </MDBAnimation>
              </div>
            </div>
          </Parallax>
        </div>
        <MDBRow className="w-100 m-0">
          <MDBCol lg="6" className="p-0">
            <MDBAnimation type="fadeInLeft" duration="900ms">
              <MDBView
                src={
                  loaded
                    ? data.slideLoadimage
                      ? process.env.REACT_APP_BASEURL + data.slideImage.urlLink
                      : localImage
                    : localImage
                }
                className="move"
              >
                <MDBMask className="flex-center" overlay="black-strong">
                  <div className="hero-side hero-left customfont flex-center">
                    <Parallax
                      className="parallax"
                      y={[-20, 20]}
                      tagOuter="figure"
                    >
                      <div>
                        <div className="gradienttext">
                          <h2>Blue</h2>
                          <h2>Lupi</h2>
                        </div>
                        <span className="pt-2">Die Kaffeealternative</span>
                        <span>aus Österreich.</span>
                        {loaded && data.slideButton.buttonTitle && (
                          <MDBAnimation
                            type="fadeInUp"
                            duration="500ms"
                            delay="100ms"
                          >
                            <Link
                              to="shop"
                              smooth={true}
                              spy={true}
                              duration={300}
                            >
                              <MDBBtn color="white" rounded>
                                {data.slideButton.buttonTitle}
                                <MDBIcon
                                  icon="angle-right"
                                  className="pl-3 fa-lg"
                                />
                              </MDBBtn>
                            </Link>
                          </MDBAnimation>
                        )}
                      </div>
                    </Parallax>
                  </div>
                </MDBMask>
              </MDBView>
            </MDBAnimation>
          </MDBCol>
          <MDBCol md="6" className="d-lg-block d-none text-right">
            <div className="hero-side hero-right customfont flex-center">
              <Parallax className="parallax" y={[-20, 20]} tagOuter="figure">
                <div>
                  <div className="gradienttext">
                    <MDBAnimation
                      type="fadeInUp"
                      duration="500ms"
                      delay="450ms"
                    >
                      <h2>Kaffee</h2>
                    </MDBAnimation>
                    <MDBAnimation
                      type="fadeInUp"
                      duration="500ms"
                      delay="400ms"
                    >
                      <h2>Rudel</h2>
                    </MDBAnimation>
                  </div>
                  <MDBAnimation type="fadeInUp" duration="500ms" delay="300ms">
                    <span className="pt-2">Spezialitätenkaffee</span>
                  </MDBAnimation>
                  <MDBAnimation type="fadeInUp" duration="500ms" delay="200ms">
                    <span>für Genießer.</span>
                  </MDBAnimation>
                  {loaded && data.slideButton.buttonTitle && (
                    <MDBAnimation
                      type="fadeInUp"
                      duration="500ms"
                      delay="100ms"
                    >
                      <Link to="shop" smooth={true} spy={true} duration={300}>
                        <MDBBtn color="white" rounded>
                          <MDBIcon icon="angle-left" className="pr-3 fa-lg" />
                          {data.slideButton.buttonTitle}
                        </MDBBtn>
                      </Link>
                    </MDBAnimation>
                  )}
                </div>
              </Parallax>
            </div>
          </MDBCol>
        </MDBRow>
      </div>
    );
  }
}
//#endregion

//#region > Exports
export default Hero;
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Werbeagentur Christian Aichner
 */
