import React from "react";
import { Switch, BrowserRouter as Router } from "react-router-dom";
import { Grommet, Box, Heading, Paragraph } from "grommet";

export default class Navbar extends React.Component {
	render() {
		return (
			<Box
				align="center"
				justify="between"
				direction="row-responsive"
				overflow="auto"
				animation={{ type: "slideDown", size: "large" }}
				pad={{ left: "large", right: "large" }}
				margin={{ bottom: "large" }}
				wrap={false}
				background={{ dark: true, color: "brand" }}
				elevation="small"
			>
				<Heading level="4">Home</Heading>
				<Heading level="4">About Next Act</Heading>
				<Heading level="4">Current season</Heading>
				<Heading level="4">Past shows</Heading>
				<Heading level="4">Join</Heading>
				<Heading level="4">Donate</Heading>
				<Heading level="4">FAQs</Heading>
				<Heading level="4">Contact</Heading>
			</Box>
		);
	}
}
