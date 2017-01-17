var React = require('react');
var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

// design colors header
var mainColor = "#3097d1"
var secondaryColor = ""
var baseColor = "rgba(0,0,0,0)"
var backgroundColor = "url('images/tunnels.jpg')"

var BasePage = require('./pages/BasePage.jsx');
var HomePage = require('./pages/HomePage.jsx');
var ProductPage = require('./pages/ProductPage.jsx');
var ComingSoonPage = require('./pages/ComingSoonPage.jsx');
var HireMePage = require('./pages/HireMePage.jsx');

var Routes = (
  <Router history={hashHistory}>
    <Route
    	baseColor={baseColor}
    	mainColor={mainColor}
    	backgroundColor={backgroundColor}
    	path="/"
    	component={BasePage}>
      <IndexRoute
      	baseColor={baseColor}
      	mainColor={mainColor}
      	backgroundColor={backgroundColor}
      	component={HomePage} />
      <Route
      	path="/product/:productId"
      	component={ProductPage} />
      <Route
      	path="/coming-soon"
      	component={ComingSoonPage} />
      <Route
        path="/hire-me"
        component={HireMePage} />
    </Route>
  </Router>
);

module.exports = Routes;
