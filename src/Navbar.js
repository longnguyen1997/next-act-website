import React from "react";
import { Switch, BrowserRouter as Router, Link } from "react-router-dom";
import { Grommet, Box, Heading, Paragraph } from "grommet";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import {LinksDesktop} from "./NavLinks";

export default class Navbar extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Fade top>
					<LinksDesktop/>
			</Fade>
		);
	}
}
