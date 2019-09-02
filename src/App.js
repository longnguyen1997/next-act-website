import React from "react";
import "./css/App.css";
import { Grommet, Box, Heading, Paragraph, ResponsiveContext } from "grommet";
import { Switch, BrowserRouter as Router, Link, Route } from "react-router-dom";
import MobileSidebar from "./MobileSidebar";

// User navigation essentials.
import { LinksDesktop, LinksMobile } from "./NavLinks";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Page imports.
import Home from "./pages/Home";
import AboutNextAct from "./pages/AboutNextAct";
import CurrentSeason from "./pages/CurrentSeason";

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
      height: "20px"
    }
  },
  paragraph: {
    textAlign: "justify"
  },
  heading: {
    font: {
      family: "HelveticaNeue, Roboto, Arial"
    }
  }
};

function App() {
  document.body.style.backgroundColor = "black";

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
      <Route path="/current" exact component={CurrentSeason} />
    </Switch>
  );

  return (
    <Grommet theme={grommetTheme}>
      <Router>
        {/* Grommet context for rendering the navbar or sidebar.*/}
        <ResponsiveContext.Consumer>
          {screenSize => {
            if (screenSize == "small") {
              document.body.style.backgroundSize = "auto";
              // Mobile size.
              return (
                <MobileSidebar>
                  {routeSwitch}
                  <Footer />
                </MobileSidebar>
              );
            } else {
              document.body.style.backgroundSize = "cover";
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
