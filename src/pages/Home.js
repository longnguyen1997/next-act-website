import React from "react";
import { Grommet, Box, Heading, Paragraph } from "grommet";
import Fade from "react-reveal/Fade";
import seussical from "../images/seussical.jpg";

function Home() {
	document.body.background = seussical;
	return (
		<Fade>
		<Box margin="small">
			<Box
				className="info-box"
				align="center"
				justify="center"
				pad="large"
				margin="xsmall"
				alignSelf="center"
				elevation="large"
				width="large"
			><Fade bottom cascade>
				<Heading>What is Next Act?</Heading>
				<Paragraph>
					Next Act is a{" "}
					<b>
						student theatre group at the Massachusetts Institute of
						Technology
					</b>{" "}
					dedicated to presenting an{" "}
					<b>annual full-length musical production</b> during MIT's
					Campus Preview Weekend each spring. Our members come from
					across campus and include veterans to acting and beginners
					alike. Anyone who auditions for an acting role is guaranteed
					to be cast in a speaking-role, regardless of experience. We
					welcome students to join our Stage Crew, design sets as part
					of our Art team, play music for the Pit, and more! Our
					rehearsals are full of fun, song, and laughter.{" "}
					<b>
						We invite all members of the MIT community to join us!
					</b>
				</Paragraph></Fade>
			</Box>
			<Box
				className="info-box"
				align="center"
				justify="center"
				pad="large"
				margin="xsmall"
				alignSelf="center"
				width="large"
				elevation="large"
			><Fade bottom cascade>
				<Heading>Announcements</Heading>
				<Paragraph>
					- We are in the process of deciding our show for the S2020
					semester. The show will be announced in November. <b>Auditions
					will be held at the end of January 2020.</b> Please stay tuned.
				</Paragraph>
				<Paragraph>
					- You can now make donations to Next Act! Check out the
					donation page for more information.
				</Paragraph></Fade>
			</Box>
		</Box></Fade>
	);
}

export default Home;
