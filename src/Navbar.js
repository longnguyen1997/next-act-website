import React from "react";
import { Switch, BrowserRouter as Router, Link } from "react-router-dom";
import { Grommet, Box, Heading, Paragraph } from "grommet";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

export default class Navbar extends React.Component {
	render() {
		return (
			<Fade top>
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
					className='navbar'
				>
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
				</Box>
			</Fade>
		);
	}
}
