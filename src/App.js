import React from "react";
import "./App.css";
import { Grommet, Box, Heading, Paragraph, ResponsiveContext } from "grommet";
import { Switch, BrowserRouter as Router, Link, Route } from "react-router-dom";
import MobileSidebar from "./MobileSidebar";

import { LinksDesktop, LinksMobile } from "./NavLinks";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import AboutNextAct from "./AboutNextAct";

const grommetTheme = {
  rounding: 12,
  spacing: 20,
  global: {
    colors: {
      brand: "#ba1600;",
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
    textAlign: "justify"
  },
  heading: {
    font: {
      family: "Avenir, HelveticaNeue, Roboto, Arial"
    }
  }
};

function App() {
  const [mobileSidebarOpen, setMobileSidebar] = React.useState(false);

  /*
  routeSwitch is what acts as different pages for the site.

  Grommet's ResponsiveContext allows us to render either the
  mobile sidebar or the desktop navbar based on screen size.

  The if/else cases essentially render the rest of the page,
  since routeSwitch's links cause React components/pages to
  render.
  */
  const routeSwitch = (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={AboutNextAct} />
    </Switch>
  );

  return (
    <Grommet theme={grommetTheme}>
      <Router>
        {/* Grommet context for rendering the navbar or sidebar.*/}
        <ResponsiveContext.Consumer>
          {size => {
            if (size == "small") {
              // Mobile size.
              return (
                <MobileSidebar>
                  {routeSwitch}
                  <Footer />
                </MobileSidebar>
              );
            } else {
              // Desktop size.
              return (
                // Wrap in React.Fragment
                // as needed.
                <React.Fragment>
                  <Navbar />
                  {routeSwitch}
                  <Footer />
                </React.Fragment>
              );
            }
          }}
        </ResponsiveContext.Consumer>
      </Router>
    </Grommet>
  );
}

export default App;
