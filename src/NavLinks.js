import React from "react";
import { Link } from "react-router-dom";
import { Heading, Box } from "grommet";

const links = (
	<React.Fragment>
		<Link to="/">
			<Heading level="4">Home</Heading>
		</Link>
		<Link to="/about">
			<Heading level="4">About Next Act</Heading>
		</Link>
		<Link to="/current">
			<Heading level="4">Current season</Heading>
		</Link>
		<Link to="/past">
			<Heading level="4">Past shows</Heading>
		</Link>
		<Link to="/past">
			<Heading level="4">Join</Heading>
		</Link>
		<Link to="/past">
			<Heading level="4">Donate</Heading>
		</Link>
		<Link to="/past">
			<Heading level="4">FAQs</Heading>
		</Link>
		<Link to="/past">
			<Heading level="4">Contact</Heading>
		</Link>
	</React.Fragment>
);

export function LinksDesktop() {
	return (
		<Box
			align="center"
			justify="between"
			direction="row-responsive"
			overflow="auto"
			pad={{ left: "large", right: "large" }}
			margin={{ bottom: "large" }}
			wrap={false}
			background={{ dark: true, color: "brand" }}
			elevation="small"
			className="navbar"
		>
			{links}
		</Box>
	);
}

export function LinksMobile() {
	return (
		<Box
			align="center"
			justify="between"
			direction="column"
			overflow="auto"
			pad={{ left: "large", right: "large" }}
			margin={{ bottom: "large" }}
			wrap={false}
			background={{ dark: true, color: "brand" }}
			className="navbar"
		>
			{links}
		</Box>
	);
}
