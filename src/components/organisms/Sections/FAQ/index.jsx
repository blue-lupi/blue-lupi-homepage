//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> Additional modules
// Fade in
import FadeIn from "react-fade-in";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";

//> CSS
import "./faq.scss";

class FAQ extends React.Component {
	state = {};

	render() {
		const { data } = this.props;

		return (
			<section id="faq">
				<MDBContainer>
					<h2 className="text-center font-weight-bold">
						Häufig gestellte Fragen
					</h2>
					<MDBRow className="text-center mt-5">
						{data.questions.map((item, i) => {
							return (
								<MDBCol key={i} md="6" className="my-3">
									{item.icon && (
										<MDBIcon
											icon={item.value.question_icon}
											className="fa-lg"
										/>
									)}
									<p
										className="lead clickable blue-text"
										onClick={() => this.setState({ ["faq" + i]: true })}
									>
										{item.value.question_head}
									</p>
									{this.state["faq" + i] && (
										<FadeIn>
											<p
												dangerouslySetInnerHTML={{
													__html: item.value.question_paragraph,
												}}
											></p>
										</FadeIn>
									)}
								</MDBCol>
							);
						})}
					</MDBRow>
				</MDBContainer>
			</section>
		);
	}
}

export default FAQ;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
