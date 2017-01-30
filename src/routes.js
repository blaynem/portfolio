import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './App';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import PortfolioPage from './pages/PortfolioPage/PortfolioPage';
import TestimonialsPage from './pages/TestimonialsPage/TestimonialsPage';
import HireMePage from './pages/HireMePage/HireMePage';
import NotFound from './pages/NotFound';


const baseColor = "rgba(0,0,0,0)"
const backgroundColor = "url('images/tunnels.jpg')"

const Routes = (props) => (
	<Router history={hashHistory}>
		<Route
			baseColor={baseColor}
			backgroundColor={backgroundColor}
			path="/"
			component={App} >
			<IndexRoute
				baseColor={baseColor}
		    	backgroundColor={backgroundColor}
				component={HomePage}/>
			<Route
				path="/about"
				baseColor={baseColor}
		    	backgroundColor={backgroundColor}
				component={AboutPage} />
			<Route 
		        path="/portfolio"
		        component={PortfolioPage} />
		    <Route
		      	path="/testimonials"
		      	component={TestimonialsPage} />
		    <Route
		        path="/hire-me"
		        component={HireMePage} />
			<Route
				path="*"
				component={NotFound} />
		</Route>
	</Router>
);

export default Routes;