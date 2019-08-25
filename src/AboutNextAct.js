import React from "react";
import { Grommet, Box, Heading, Paragraph } from "grommet";
import Fade from "react-reveal/Fade";
import mersisters from "./images/mersisters.jpg";

function AboutNextAct() {
	document.body.background = mersisters;
	return (
		<Box>
			<Box
				className="info-box"
				align="center"
				justify="center"
				pad="medium"
				margin="small"
				alignSelf="center"
				elevation="large"
				width="large"
			>
				<Heading>About Next Act</Heading>
				<Paragraph>
					<b>
						Founded in the spring of 1985 by Lauren Singer '86, Next
						Act began as a small but dedicated musical theater group
						composed of Next House residents.
					</b>{" "}
					Under Lauren's direction, Next Act performed "Anything Goes"
					as its debut production, followed by "The Pajama Game" in
					the spring of 1986. Upon her graduation, Lauren passed the
					Director's Hat to Ivan Deutsch '87 who followed in her
					footsteps by directing the Spring 1987 production of "Sweet
					Charity". Since that time, each Next Act director has
					continued the tradition of passing along the Director's Hat
					in this manner.
				</Paragraph>
				<Heading level="2">The Popping of the Director's Hat</Heading>
				<Paragraph>
					Each performance of Next Act kicks off with the ceremonial
					popping of the Director's Hat. At the conclusion of the
					final performance, the Director turns over the hat to
					his/her successor who pops it for the first time to signify
					the end of yet another season.
				</Paragraph>
				<Heading level="2">Cabaret</Heading>
				<Paragraph>
					Some years, Next Act members put on Cabaret in the fall.
					Vocalists and musicians perform songs, both from musical
					theater and not. We hope you'll join us at our next one for
					delicious food, great company, and beautiful music!
				</Paragraph>
			</Box>
		</Box>
	);
}

export default AboutNextAct;
