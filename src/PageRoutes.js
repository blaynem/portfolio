import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Portfolio from "./pages/PortfolioPage";
import HireMePage from "./pages/HireMePage";
import Testimonials from "./pages/TestimonialsPage";
import NotFound from "./pages/NotFound";

export const PageRoutes = ({ theColor }) => (
  <Switch>
    <Route exact path="/" component={() => <HomePage theColor={theColor} />} />
    <Route
      exact
      path="/about"
      component={() => <AboutPage theColor={theColor} />}
    />
    <Route
      exact
      path="/portfolio"
      component={() => <Portfolio theColor={theColor} />}
    />
    <Route
      exact
      path="/testimonials"
      component={() => <Testimonials theColor={theColor} />}
    />
    <Route
      exact
      path="/hire-me"
      component={() => <HireMePage theColor={theColor} />}
    />
    <Route component={() => <NotFound theColor={theColor} />} />
  </Switch>
);
