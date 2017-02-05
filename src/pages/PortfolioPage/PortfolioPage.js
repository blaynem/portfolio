import React, { Component } from 'react';
import WeatherApp from './weatherApp/components/WeatherApp.jsx';

export default class PortfolioPage extends Component {
	render() {
		const descripDivStyle = {
			background: "rgba(0,0,0,.5)",
			marginBottom:"15px"
		}
		const headerStyle = {
			color: (this.props.theColor),
			textAlign: "center"
		}
		const descripStyle = {
			color: "white"	
		}
		const storepics = {
		    position: "relative",
		    padding: 0,
		    marginBottom: "15px",
		    height: "600px",
		    backgroundPosition: "50% 50%",
		    backgroundRepeat: "no-repeat",
		    backgroundSize: "contain",
		    backgroundImage: "url(images/storepic.png)"
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
			color: (this.props.theColor)
		}
		const ulStyle = {
			color: (this.props.theColor),
			fontSize:"1.3em"
		}
		const liStyles = {
			color: "white"
		}
		return (
			<div style={{paddingTop:"55px"}}>
				<div style={{paddingTop:"15px", paddingBottom:"15px"}} className="col-xs-12">
					<a href="http://blaynestoretest.surge.sh/" target="_blank">
						<div style={storepics} className="col-md-6"></div>
					</a>
					<div className="col-md-6">
						<div style={descripDivStyle} className="col-xs-12">
							<h1 style={headerStyle}>Web Store App (Current Project)</h1>
							<h3 style={descripStyle}>Began creating a Web Store App project this weekend (2/4/17) because I really wanted to solidify
							my knowledge of Redux, and work with ES6 more. I'll be doing constant push updates to the site, so make sure you come check
							back later and see the updates.</h3>
							<div className="col-sm-6">>
							<h3 style={learnedStyles}>Things I learned:</h3>
							<ul style={ulStyle}>
								<li><span style={liStyles}>Mocking API data</span></li>
								<li><span style={liStyles}>Reusability (I repeat that a lot, but React is awesome like that)</span></li>
								<li><span style={liStyles}>Redux/Stores</span></li>
							</ul>
							</div>
							<div className="col-sm-6">>
							<h3 style={learnedStyles}>Obstacles:</h3>
							<ul style={ulStyle}>
								<li><span style={liStyles}>Caching</span></li>
								<li><span style={liStyles}>Figuring out how to get cart working correctly</span></li>
								<li><span style={liStyles}>Figuring out Check-out process</span></li>
								<li><span style={liStyles}>Had trouble figuring out exactly how to get the right data to places, but ultimately figured it out.</span></li>
							</ul>
							</div>
							<h3 style={descripStyle}>You can view the source code
								<a style={{color:(this.props.theColor)}}
								   href="https://github.com/blaynem/store-prototype"
								   target="_blank"> here</a></h3>
						</div>
					</div>
				</div>
				<div style={{paddingTop:"15px", paddingBottom:"15px"}} className="col-xs-12">
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
							<h3 style={descripStyle}>You can view the source code
								<a style={{color:(this.props.theColor)}}
								   href="https://github.com/blaynem/portfolio/tree/master/src/pages/PortfolioPage/weatherApp/components"
								   target="_blank"> here</a></h3>
						</div>
					</div>
					<div style={{padding:0}} className="col-md-6">
						<WeatherApp
							appSize=""
							appColor={this.props.theColor}
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
							<h3 style={descripStyle}>I started a rough draft of this app for a chef friend of mine.
							It helped me learn a lot about redux and stores. Though it's not quite finished and does
							have a bunch of placeholder text, I'm pretty happy with how it's turned out so far.</h3>
							<h3 style={learnedStyles}>Things I learned:</h3>
							<ul style={ulStyle}>
								<li><span style={liStyles}>Redux/Stores</span></li>
								<li><span style={liStyles}>More about planning for reusability</span></li>
								<li><span style={liStyles}>Implementing cool hover effects and stylings</span></li>
							</ul>
							<h3 style={descripStyle}>You can view the source code
								<a style={{color:(this.props.theColor)}}
								   href="https://github.com/blaynem/portfolio-instagram"
								   target="_blank"> here</a></h3>
						</div>
					</div>
				</div>
			</div>
		);
	}
};