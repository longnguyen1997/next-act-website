import React from "react";
import { Switch, BrowserRouter as Router } from "react-router-dom";
import { Grommet, Box, Heading, Paragraph } from "grommet";
import { Organization } from "grommet-icons";
import { Fade } from "react-reveal";

export default class Footer extends React.Component {
	render() {
		return (
			<Box
				align="center"
				justify="center"
				direction="row-responsive"
				overflow="auto"
				pad={{ left: "large", right: "large" }}
				wrap={false}
				margin={{ top: "large" }}
				background={{ dark: true, color: "black" }}
				elevation="small"
			>
				<Heading level="4"><Fade cascade>© MIT Next Act 2020.</Fade></Heading>
			</Box>
		);
	}
}
