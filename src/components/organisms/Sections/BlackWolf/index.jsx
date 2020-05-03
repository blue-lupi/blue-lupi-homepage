//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact";

//> CSS
import "./blackwolf.scss";

//> Images
import { ReactComponent as Wolf } from "../../../../assets/content/sections/sub/wolf.svg";
import { ReactComponent as Ground } from "../../../../assets/content/sections/blackwolf/ground.svg";

//> Components
import { Product } from "../../../molecules";

class Blackwolf extends React.Component {
  state = {
    activeField: 0,
    survey: {},
  };

  componentDidMount = () => {
    // Wolf animation
    let frames = document.querySelectorAll(".frame");
    let currentFrame = 0;
    let previousFrame = 7;

    setInterval(function () {
      frames[currentFrame].style.visibility = "visible";
      frames[previousFrame].style.visibility = "hidden";

      if (currentFrame < frames.length - 1) {
        currentFrame += 1;
        previousFrame = currentFrame - 1;
      } else {
        currentFrame = 0;
        previousFrame = 7;
      }
    }, 75);

    // Preset states
    if (this.props.form.formFields) {
      let res = {};

      this.props.form.formFields.map((field, i) => {
        if (!field.choices) {
          res = {
            ...res,
            [field.name]: "",
          };
        }
        return true;
      });
      this.setState({
        survey: { ...this.state.survey, ...res },
      });
    }
  };

  onClick = (name, value, i) => {
    this.setState({
      selected: {
        ...this.state.selected,
        [name]: value,
      },
      fieldsDone: i + 1,
    });
  };

  onChange = (name, value, i) => {
    this.setState({
      selected: {
        ...this.state.selected,
        [name]: value,
      },
      fieldsDone: i + 1,
    });
  };

  render() {
    const { products, form } = this.props;

    return (
      <section id="blackwolf" className="pb-0 balckwolfsection">
        <MDBContainer className="text-center">
          <h2 className="text-center font-weight-bold">{form.surveyHead}</h2>
          <p
            className="lead mb-5"
            dangerouslySetInnerHTML={{ __html: form.surveySubhead }}
          ></p>
          {form.formFields && (
            <>
              {this.state.activeField < form.formFields.length ? (
                <>
                  {this.state.survey &&
                    form.formFields.map((field, i) => {
                      switch (field.fieldType) {
                        case "multiselect":
                          return (
                            <React.Fragment key={i}>
                              {this.state.activeField === i && (
                                <div>
                                  <p className="lead font-weight-bold mb-0 mt-3">
                                    {field.title}
                                  </p>
                                  <p className="my-0">
                                    <small className="text-muted">
                                      Mehrere Antworten möglich
                                    </small>
                                  </p>
                                  <p className="mb-2">{field.helpText}</p>
                                  <div className="d-flex justify-content-center flex-wrap-wrap">
                                    {field.choices
                                      .split(",")
                                      .map((choice, k) => {
                                        return (
                                          <MDBBtn
                                            color="white"
                                            key={k}
                                            className={
                                              this.state.survey[field.name] &&
                                              this.state.survey[
                                                field.name
                                              ].includes(choice.trim())
                                                ? "active"
                                                : undefined
                                            }
                                            onClick={() =>
                                              this.setState({
                                                survey: {
                                                  ...this.state.survey,
                                                  [field.name]: this.state
                                                    .survey[field.name]
                                                    ? !this.state.survey[
                                                        field.name
                                                      ].includes(choice.trim())
                                                      ? [
                                                          ...this.state.survey[
                                                            field.name
                                                          ],
                                                          choice.trim(),
                                                        ]
                                                      : this.state.survey[
                                                          field.name
                                                        ].filter(function (
                                                          item
                                                        ) {
                                                          return (
                                                            item !==
                                                            choice.trim()
                                                          );
                                                        })
                                                    : [choice.trim()],
                                                },
                                              })
                                            }
                                          >
                                            {choice}
                                          </MDBBtn>
                                        );
                                      })}
                                  </div>
                                  {this.state.activeField !== 0 && (
                                    <MDBBtn
                                      color="white"
                                      outline
                                      className="mt-4"
                                      onClick={() =>
                                        this.setState({
                                          activeField:
                                            this.state.activeField - 1,
                                        })
                                      }
                                    >
                                      <MDBIcon
                                        icon="angle-left"
                                        className="mr-2"
                                      />
                                      Zurück
                                    </MDBBtn>
                                  )}
                                  <MDBBtn
                                    color="white"
                                    className="mt-4"
                                    disabled={
                                      field.required
                                        ? this.state.survey[field.name]
                                          ? this.state.survey[field.name]
                                              .length === 0
                                            ? true
                                            : false
                                          : true
                                        : false
                                    }
                                    onClick={() =>
                                      this.setState({
                                        activeField: this.state.activeField + 1,
                                      })
                                    }
                                  >
                                    Weiter
                                    <MDBIcon
                                      icon="angle-right"
                                      className="ml-2"
                                    />
                                  </MDBBtn>
                                </div>
                              )}
                            </React.Fragment>
                          );
                        case "radio":
                          return (
                            <React.Fragment key={i}>
                              {this.state.activeField === i && (
                                <div>
                                  <p className="lead font-weight-bold mb-0 mt-3">
                                    {field.title}
                                  </p>
                                  <p className="mb-2">{field.helpText}</p>
                                  <div className="d-flex justify-content-center flex-wrap-wrap">
                                    {field.choices
                                      .split(",")
                                      .map((choice, k) => {
                                        return (
                                          <MDBBtn
                                            color="white"
                                            key={k}
                                            className={
                                              this.state.survey[field.name] &&
                                              this.state.survey[field.name] ===
                                                choice.trim()
                                                ? "active"
                                                : undefined
                                            }
                                            onClick={() =>
                                              this.setState({
                                                survey: {
                                                  ...this.state.survey,
                                                  [field.name]: choice.trim(),
                                                },
                                              })
                                            }
                                          >
                                            {choice}
                                          </MDBBtn>
                                        );
                                      })}
                                  </div>
                                  {this.state.activeField !== 0 && (
                                    <MDBBtn
                                      color="white"
                                      outline
                                      className="mt-4"
                                      onClick={() =>
                                        this.setState({
                                          activeField:
                                            this.state.activeField - 1,
                                        })
                                      }
                                    >
                                      <MDBIcon
                                        icon="angle-left"
                                        className="mr-2"
                                      />
                                      Zurück
                                    </MDBBtn>
                                  )}
                                  <MDBBtn
                                    color="white"
                                    className="mt-4"
                                    disabled={
                                      field.required
                                        ? this.state.survey[field.name]
                                          ? false
                                          : true
                                        : false
                                    }
                                    onClick={() =>
                                      this.setState({
                                        activeField: this.state.activeField + 1,
                                      })
                                    }
                                  >
                                    Weiter
                                    <MDBIcon
                                      icon="angle-right"
                                      className="ml-2"
                                    />
                                  </MDBBtn>
                                </div>
                              )}
                            </React.Fragment>
                          );
                        case "email":
                          return (
                            <React.Fragment key={i}>
                              {this.state.activeField === i && (
                                <div>
                                  <p className="lead font-weight-bold mb-0 mt-3">
                                    {field.title}
                                  </p>
                                  <p className="mb-2">{field.helpText}</p>
                                  <MDBRow className="flex-center">
                                    <MDBCol md="4">
                                      <input
                                        type="email"
                                        name={field.name}
                                        placeholder={field.placeholder}
                                        className="form-control"
                                        value={this.state.survey[field.name]}
                                        onChange={(e) =>
                                          this.setState({
                                            survey: {
                                              ...this.state.survey,
                                              [field.name]: e.target.value,
                                            },
                                          })
                                        }
                                      />
                                    </MDBCol>
                                  </MDBRow>
                                  {this.state.activeField !== 0 && (
                                    <MDBBtn
                                      color="white"
                                      outline
                                      className="mt-4"
                                      onClick={() =>
                                        this.setState({
                                          activeField:
                                            this.state.activeField - 1,
                                        })
                                      }
                                    >
                                      <MDBIcon
                                        icon="angle-left"
                                        className="mr-2"
                                      />
                                      Zurück
                                    </MDBBtn>
                                  )}
                                  <MDBBtn
                                    color="white"
                                    className="mt-4"
                                    disabled={
                                      field.required
                                        ? this.state.survey[field.name] !== ""
                                          ? false
                                          : true
                                        : false
                                    }
                                    onClick={() =>
                                      this.setState({
                                        activeField: this.state.activeField + 1,
                                      })
                                    }
                                  >
                                    Weiter
                                    <MDBIcon
                                      icon="angle-right"
                                      className="ml-2"
                                    />
                                  </MDBBtn>
                                </div>
                              )}
                            </React.Fragment>
                          );
                        case "multiline":
                          return (
                            <React.Fragment key={i}>
                              {this.state.activeField === i && (
                                <div>
                                  <p className="lead font-weight-bold mb-0 mt-3">
                                    {field.title}
                                  </p>
                                  <p className="text-muted">Optional</p>
                                  <p className="mb-2">{field.helpText}</p>
                                  <MDBRow className="flex-center">
                                    <MDBCol md="5">
                                      <textarea
                                        name={field.name}
                                        className="form-control"
                                        value={this.state.survey[field.name]}
                                        rows="5"
                                        placeholder={field.placeholder}
                                        onChange={(e) =>
                                          this.setState({
                                            survey: {
                                              ...this.state.survey,
                                              [field.name]: e.target.value,
                                            },
                                          })
                                        }
                                      />
                                    </MDBCol>
                                  </MDBRow>
                                  {this.state.activeField !== 0 && (
                                    <MDBBtn
                                      color="white"
                                      outline
                                      className="mt-4"
                                      onClick={() =>
                                        this.setState({
                                          activeField:
                                            this.state.activeField - 1,
                                        })
                                      }
                                    >
                                      <MDBIcon
                                        icon="angle-left"
                                        className="mr-2"
                                      />
                                      Zurück
                                    </MDBBtn>
                                  )}
                                  <MDBBtn
                                    color="white"
                                    className="mt-4"
                                    disabled={
                                      field.required
                                        ? this.state.survey[field.name] !== ""
                                          ? false
                                          : true
                                        : false
                                    }
                                    onClick={() =>
                                      this.setState({
                                        activeField: this.state.activeField + 1,
                                      })
                                    }
                                  >
                                    Weiter
                                    <MDBIcon
                                      icon="angle-right"
                                      className="ml-2"
                                    />
                                  </MDBBtn>
                                </div>
                              )}
                            </React.Fragment>
                          );
                        default:
                          return (
                            <>
                              <p>
                                Der Typ {field.fieldType} wird nicht
                                unterstützt.
                              </p>
                              <MDBBtn
                                color="white"
                                className="mt-4"
                                onClick={() =>
                                  this.setState({
                                    activeField: this.state.activeField + 1,
                                  })
                                }
                              >
                                Überspringen
                                <MDBIcon icon="angle-right" className="ml-2" />
                              </MDBBtn>
                            </>
                          );
                      }
                    })}
                </>
              ) : (
                <>
                  {!this.state.sent &&
                    this.setState({ sent: true }, () =>
                      this.props.createSurvey(this.state.survey)
                    )}
                  <h3 className="green-text font-weight-bold">
                    Ihr persönlicher Black Wolf
                  </h3>
                  <p
                    className="lead"
                    dangerouslySetInnerHTML={{ __html: form.thankYouText }}
                  ></p>
                  <MDBRow className="mt-4 flex-center">
                    {products.map((product, i) => {
                      if (
                        product.node.collections.edges[0].node.title ===
                        "Personal"
                      ) {
                        return (
                          <Product
                            key={i}
                            id={product.node.id}
                            product={product}
                            addVariantToCart={this.props.addVariantToCart}
                            checkout={this.state.checkout}
                          />
                        );
                      } else {
                        return null;
                      }
                    })}
                  </MDBRow>
                </>
              )}
            </>
          )}
          <div className="mt-5 text-center">
            <Wolf id="wolfsvg" />
            <Ground id="ground" />
          </div>
        </MDBContainer>
      </section>
    );
  }
}

export default Blackwolf;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Werbeagentur Christian Aichner
 */
