import React from "react";
import "./App.css";
import { Grommet, Box, Heading, Paragraph } from "grommet";
import { Switch, BrowserRouter as Router, Link } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";

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
			family: "HelveticaNeue, Arial",
			size: "15px",
			height: "20px",
			maxWidth: "300px"
		}
	},
	paragraph: {
		textAlign: "justify"
	}
};

function App() {
	return (
		<Grommet theme={grommetTheme}>
			<Navbar />
			<Home />
			<Footer />
		</Grommet>
	);
}

export default App;
