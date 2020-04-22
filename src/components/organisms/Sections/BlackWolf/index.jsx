//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import { MDBContainer, MDBRow, MDBBtn } from "mdbreact";

//> CSS
import "./blackwolf.scss";

//> Images
import { ReactComponent as Wolf } from "../../../../assets/content/sections/sub/wolf.svg";

//> Components
import { Product } from "../../../molecules";

//> Apollo
import { gql } from "apollo-boost";

//> Mutation
// Create survey
const CREATE_SURVEY = gql`
  mutation setSurvey($token: String!, $values: GenericScalar!) {
    surveySurveyFormPage(token: $token, url: "/home/survey", values: $values) {
      result
      errors {
        name
        errors
      }
    }
  }
`;

class Blackwolf extends React.Component {
  state = {
    fieldsDone: 0,
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
        if (field.choices) {
          res = {
            ...res,
            [field.name]: undefined,
          };
        } else {
          res = {
            ...res,
            [field.name]: "",
          };
        }
        return true;
      });
      this.setState({
        selected: res,
      });
    }
  };

  createSurvey = () => {
    this.props.client
      .mutate({
        mutation: CREATE_SURVEY,
        variables: {
          token: localStorage.getItem("jwt"),
          values: this.state.selected,
        },
      })
      .then(({ data }) => {
        this.setState({
          surveySent: true,
        });
      })
      .catch((error) => {
        this.setState({
          surveySent: false,
        });
      });
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
          {!this.state.showResult ? (
            <>
              {form.formFields &&
                this.state.selected &&
                form.formFields.map((field, i) => {
                  if (i <= this.state.fieldsDone) {
                    return (
                      <div className="text-center" key={i}>
                        <h3 className="mt-2">Test</h3>
                        <p className="lead">{field.helpText}</p>
                        {field.choices ? (
                          <>
                            {field.choices.split(",").map((choice, c) => {
                              return (
                                <MDBBtn
                                  key={c}
                                  color={
                                    this.state.selected[field.name] ===
                                    choice.trim()
                                      ? "success"
                                      : "white"
                                  }
                                  rounded
                                  onClick={() =>
                                    this.onClick(field.name, choice.trim(), i)
                                  }
                                >
                                  {choice.trim()}
                                </MDBBtn>
                              );
                            })}
                          </>
                        ) : (
                          <input
                            className="form-control w-auto m-auto"
                            type="text"
                            onChange={(e) =>
                              this.onChange(field.name, e.target.value, i)
                            }
                            value={this.state.selected[field.name]}
                          />
                        )}
                      </div>
                    );
                  } else {
                    return null;
                  }
                })}
              {this.state.fieldsDone === form.formFields.length && (
                <MDBBtn
                  color="white"
                  className="mt-4"
                  onClick={() => {
                    this.setState({ showResult: true });
                    this.createSurvey();
                  }}
                >
                  Zu deiner persönlichen Röstung
                </MDBBtn>
              )}
            </>
          ) : (
            <>
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
                    product.node.collections.edges[0].node.title === "Personal"
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
          <div className="mt-5">
            <Wolf id="wolfsvg" />
          </div>
        </MDBContainer>
      </section>
    );
  }
}

export default Blackwolf;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
