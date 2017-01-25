import React, { Component } from 'react';
import WeatherApp from './weatherApp/components/WeatherApp.jsx';

export default class PortfolioPage extends Component {
	render() {
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
		const jaredPics = {
		    position: "relative",
		    padding: 0,
		    height: "100%",
		    backgroundPosition: "50% 50%",
		    backgroundRepeat: "no-repeat",
		    backgroundSize: "contain",
		    backgroundImage: "url(images/jaredpic.png)"
		}
		return (
			<div style={{paddingTop:"10vh"}}>
			<div className="col-xs-12">
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
			<div style={{paddingTop:"5vh", paddingBottom:"5vh", height:"500px"}} className="col-xs-12">
				<div style={jaredPics} className="col-md-6">
				</div>
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
			</div>
			</div>
		);
	}
};