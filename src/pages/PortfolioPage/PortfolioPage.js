import React, { Component } from 'react';
import WeatherApp from './weatherApp/components/WeatherApp.jsx';

export default class PortfolioPage extends Component {
	render() {
		const descripDivStyle = {
			background: "rgba(0,0,0,.5)",
			marginBottom:"15px"
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
		    marginBottom: "15px",
		    height: "500px",
		    backgroundPosition: "50% 50%",
		    backgroundRepeat: "no-repeat",
		    backgroundSize: "contain",
		    backgroundImage: "url(images/jaredpic.png)"
		}
		const learnedStyles = {
			color: (this.props.route.mainColor)
		}
		const ulStyle = {
			color: (this.props.route.mainColor),
			fontSize:"1.3em"
		}
		const liStyles = {
			color: "white"
		}
		return (
			<div style={{paddingTop:"55px"}}>
				<div style={{padding:0}} className="col-xs-12">
					<div className="col-md-6">
						<div style={descripDivStyle} className="col-xs-12">
							<h1 style={headerStyle}>Weather App w/ Api</h1>
							<h3 style={descripStyle}>I built this app using the openweathermap API. It was one of the first projects I completed with React.
							I definitely need to go back over the project and refactor it, as well as update to ES6.</h3>
							<h3 style={learnedStyles}>I learned how to use:</h3>
							<ul style={ulStyle}>
								<li><span style={liStyles}>HTTP Requests</span></li>
								<li><span style={liStyles}>Gathering Data from an API</span></li>
								<li><span style={liStyles}>A lot about reusability</span></li>
							</ul>
							<h3 style={descripStyle}>You can view the source code <a style={{color:(this.props.route.mainColor)}} href="https://github.com/blaynem/portfolio/tree/master/src/pages/PortfolioPage/weatherApp/components" target="_blank">here</a></h3>
						</div>
					</div>
					<div style={{padding:0}} className="col-md-6">
						<WeatherApp
							appSize=""
							appColor={this.props.route.mainColor}
							startCity="Portland"/>
					</div>
				</div>
				<div style={{paddingTop:"15px", paddingBottom:"15px"}} className="col-xs-12">
					<a href="http://grouchy-yard.surge.sh/" target="_blank">
						<div style={jaredPics} className="col-md-6"></div>
					</a>
					<div className="col-md-6">
						<div style={descripDivStyle} className="col-xs-12">
							<h1 style={headerStyle}>Instagram-esque Portfolio</h1>
							<h3 style={descripStyle}>I started a rough draft of this app for a chef friend of mine. It helped me learn a lot about redux and stores.
							Though it's not quite finished and does have a bunch of placeholder text, I'm pretty happy with how it's turned out so far.</h3>
							<h3 style={learnedStyles}>Thing I learned:</h3>
							<ul style={ulStyle}>
								<li><span style={liStyles}>Redux/Stores</span></li>
								<li><span style={liStyles}>More about planning for reusability</span></li>
								<li><span style={liStyles}>Implementing cool hover effects and stylings</span></li>
							</ul>
							<h3 style={descripStyle}>You can view the source code <a style={{color:(this.props.route.mainColor)}} href="https://github.com/blaynem/portfolio-instagram" target="_blank">here</a></h3>
						</div>
					</div>
				</div>
			</div>
		);
	}
};


// <a href="http://grouchy-yard.surge.sh/" target="_blank"><div style={jaredPics} className="col-md-6">
// 					</div></a>