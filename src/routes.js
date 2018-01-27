import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage/AboutPage';
// import PortfolioPage from './pages/PortfolioPage/PortfolioPage';
// import TestimonialsPage from './pages/TestimonialsPage/TestimonialsPage';
// import HireMePage from './pages/HireMePage/HireMePage';
// import NotFound from './pages/NotFound';


const baseColor = "rgba(0,0,0,0)"
const backgroundColor = "url('images/tunnels.jpg')"

const Routes = (props) => (
	<App>
		<Router>
			{/* <Route
				baseColor={baseColor}
				backgroundColor={backgroundColor}
				pathName="/"
				component={App} > */}
				<Route
					baseColor={baseColor}
					pathname="/"
					backgroundColor={backgroundColor}
					component={HomePage}/>
				{/* <Route
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
					component={NotFound} /> */}
			{/* </Route> */}
		</Router>
	</App>	
);

export default Routes;