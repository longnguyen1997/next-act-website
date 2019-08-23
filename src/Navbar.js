import React from "react";
import { Switch, BrowserRouter as Router, Link } from "react-router-dom";
import { Grommet, Box, Heading, Paragraph } from "grommet";
import styled from "styled-components";
const StyledLink = styled(Link)`
	text-decoration: none;
	color: white;

	&:focus,
	&:hover,
	&:visited,
	&:link,
	&:active {
		text-decoration: none;
	}
`;

export default class Navbar extends React.Component {
	render() {
		return (
			<Router>
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
					<StyledLink to="/">
						<Heading level="4">Home</Heading>
					</StyledLink>
					<StyledLink to="/about">
						<Heading level="4">About Next Act</Heading>
					</StyledLink>
					<StyledLink to="/current">
						<Heading level="4">Current season</Heading>
					</StyledLink>
					<StyledLink to="/past">
						<Heading level="4">Past shows</Heading>
					</StyledLink>
					<StyledLink to="/past">
						<Heading level="4">Join</Heading>
					</StyledLink>
					<StyledLink to="/past">
						<Heading level="4">Donate</Heading>
					</StyledLink>
					<StyledLink to="/past">
						<Heading level="4">FAQs</Heading>
					</StyledLink>
					<StyledLink to="/past">
						<Heading level="4">Contact</Heading>
					</StyledLink>
				</Box>
			</Router>
		);
	}
}
