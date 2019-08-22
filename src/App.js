import React from "react";
import "./App.css";
import { Grommet, Box, Heading, Paragraph } from "grommet";

import Navbar from "./Navbar";
import Footer from "./Footer";

const grommetTheme = {
	rounding: 12,
	spacing: 20,
	global: {
		colors: {
			brand: "#ba1600",
			"accent-1": "#5589bd",
			focus: "#eb7f7f"
		},
		font: {
			family: "HelveticaNeue-Light, Arial",
			size: "15px",
			height: "20px",
			maxWidth: "300px"
		}
	},
	paragraph: {
		textAlign: "justify"
	}
};

const nactHome = (
	<Grommet theme={grommetTheme}>
		<Navbar />
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
				<Heading>What is Next Act?</Heading>
				<Paragraph>
					Next Act is a student theatre group at the Massachusetts
					Institute of Technology dedicated to presenting an annual
					full-length musical production during MIT's Campus Preview
					Weekend each spring. Our members come from across campus and
					include veterans to acting and beginners alike. Anyone who
					auditions for an acting role is guaranteed to be cast in a
					speaking-role, regardless of experience. We welcome students
					to join our Stage Crew, design sets as part of our Art team,
					play music for the Pit, and more! Our rehearsals are full of
					fun, song, and laughter. We invite all members of the MIT
					community to join us!
				</Paragraph>
			</Box>
			<Box
				className="info-box"
				align="center"
				justify="center"
				pad="large"
				margin="small"
				alignSelf="center"
				width="large"
			>
				<Heading>Announcements</Heading>
				<ul>
					{" "}
					<li>
						<h3>
							We are in the process of deciding our show for the
							S2020 semester. The show will be announced in
							November. Auditions will be held at the end of
							January 2020. Please stay tuned.
						</h3>
					</li>
					<li>
						You can now make donations to Next Act! Check out the
						donation page for more information.
					</li>
				</ul>
			</Box>
		</Box>
		<Footer />
	</Grommet>
);

function App() {
	return nactHome;
}

export default App;
