var React = require('react');
var WeatherApp = require('../components/portfolioPageApps/weatherApp/components/WeatherApp.jsx');

const PortfolioPage = React.createClass({
	render: function() {
		const descripDivStyle = {
			background: "rgba(0,0,0,.5)",
		}
		const headerStyle = {
			color: (this.props.route.mainColor),
			textAlign: "center"
		}
		const descripStyle = {
			color: "white"	
		}
		return (
			<div>
				<div className="col-md-6">
					<div style={descripDivStyle} className="col-xs-12">
						<h1 style={headerStyle}>Weather App w/ Api</h1>
						<h3 style={descripStyle}>I built this app using the openweathermap API. It was one of the first projects I completed with React.
						I definitely need to go back over the project and refactor it, as well as update to ES6.</h3>
						<h3 style={descripStyle}>I learned how to use:</h3>
						<ul style={{color:"white", fontSize:"1.3em"}}>
							<li>HTTP Requests</li>
							<li>Gathering Data from an API</li>
							<li>A lot about reusability</li>
						</ul>
						<h3 style={descripStyle}>You view the source code <a style={{color:(this.props.route.mainColor)}} href="https://github.com/blaynem/portfolio/tree/master/src/components/portfolioPageApps/weatherApp" target="_blank">here</a></h3>
					</div>
				</div>
				<div className="col-md-6">
					<WeatherApp
						appSize=""
						appColor={this.props.route.mainColor}
						startCity="Portland"/>
				</div>
			</div>
		);
	}
});

module.exports = PortfolioPage;