import React from "react";
import "./App.css";
import { Grommet, Box, Heading, Paragraph } from "grommet";
import { Switch, BrowserRouter as Router, Link, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import AboutNextAct from "./AboutNextAct";

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
			family: "Montserrat, HelveticaNeue, Arial",
			size: "15px",
			height: "20px",
			maxWidth: "300px"
		}
	},
	paragraph: {
		textAlign: "justify",
	},
	heading: {
		font: {
			family: "Avenir, HelveticaNeue, Roboto, Arial"
		}
	}
};

function App() {
	return (
		<Grommet theme={grommetTheme}>
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/about" exact component={AboutNextAct} />
				</Switch>
			</Router>
			<Footer />
		</Grommet>
	);
}

export default App;
