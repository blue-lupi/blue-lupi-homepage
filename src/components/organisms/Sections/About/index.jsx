//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> Additional libraies
// Parallax
//import { Parallax } from 'react-scroll-parallax';

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import { MDBRow, MDBCol, MDBCard } from "mdbreact";

//> CSS
import "./about.scss";

//> Images
import { ReactComponent as Wolf } from "../../../../assets/content/sections/about/wolf.svg";

class About extends React.Component {
	renderCardsLeft = (data) => {
		let cards = data.aboutCards;

		let rtn = cards.map((card, i) => {
			if (i % 2 !== 1) {
				return (
					<MDBCard className="p-4" key={"l_" + i}>
						<h3>{card.value.card_head}</h3>
						<p
							dangerouslySetInnerHTML={{ __html: card.value.card_paragraph }}
						></p>
					</MDBCard>
				);
			} else {
				return undefined;
			}
		});

		return rtn;
	};

	renderCardsRight = (data) => {
		let cards = data.aboutCards;

		let rtn = cards.map((card, i) => {
			if (i % 2 === 1) {
				return (
					<MDBCard className="p-4" key={"r_" + i}>
						<h3>{card.value.card_head}</h3>
						<p
							dangerouslySetInnerHTML={{ __html: card.value.card_paragraph }}
						></p>
					</MDBCard>
				);
			} else {
				return undefined;
			}
		});

		return rtn;
	};

	render() {
		const { data } = this.props;

		return (
			<section id="about">
				<h2 className="font-weight-bold text-center">{data.aboutHead}</h2>
				<MDBRow className="m-0 p-2 flex-center">
					<MDBCol md="5">{this.renderCardsLeft(data)}</MDBCol>
					<MDBCol md="2" className="text-center">
						<div className="circle">
							<div className="icon">
								<Wolf />
							</div>
						</div>
					</MDBCol>
					<MDBCol md="5" className="text-right">
						{this.renderCardsRight(data)}
					</MDBCol>
				</MDBRow>
			</section>
		);
	}
}

export default About;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
