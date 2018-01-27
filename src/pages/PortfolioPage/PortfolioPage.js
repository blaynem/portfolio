import React, { Component } from 'react';
// import WeatherApp from './weatherApp/components/WeatherApp.jsx';

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
		const posPics = {
		    position: "relative",
		    padding: 0,
		    marginBottom: "0",
		    height: "500px",
		    backgroundPosition: "50% 50%",
		    backgroundRepeat: "no-repeat",
		    backgroundSize: "contain",
		    backgroundImage: "url(images/pos-app.gif)"
		}
		const storepics = {
		    position: "relative",
		    padding: 0,
		    marginBottom: "0",
		    height: "500px",
		    backgroundPosition: "50% 50%",
		    backgroundRepeat: "no-repeat",
		    backgroundSize: "contain",
		    backgroundImage: "url(images/storepic.jpg)"
		}
		const craigslistPics = {
		    position: "relative",
		    padding: 0,
		    marginBottom: "0",
		    height: "500px",
		    backgroundPosition: "50% 50%",
		    backgroundRepeat: "no-repeat",
		    backgroundSize: "contain",
		    backgroundImage: "url(images/craigslist-app.png)"
		}
		const jaredPics = {
		    position: "relative",
		    padding: 0,
		    marginBottom: "15px",
		    height: "500px",
		    backgroundPosition: "50% 50%",
		    backgroundRepeat: "no-repeat",
		    backgroundSize: "contain",
		    backgroundImage: "url(images/jaredpic.jpg)"
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
			<div id="portfolioPageTopPadding">



				<div style={{paddingTop:"15px", paddingBottom:"15px"}} className="col-xs-12">
					<a href="http://blaynepos.surge.sh/" target="_blank">
						<div style={posPics} className="col-md-6"></div>
					</a>
					<div className="col-md-6">
						<div style={descripDivStyle} className="col-xs-12">
							<h1 style={headerStyle}>PoS App</h1>
							<h3 style={descripStyle}>Using React w/ ES6, Redux, and bootstrap to recreate a PoS style application. I started it so I could continue building
							on my previous efforts of learning Redux. Creating multiple stores and being able to set everything up correctly was quite the challenge. The future
							of the App will be throwing it into AWS and allowing users to view their carts online.</h3>
							<div className="col-sm-6">>
							<h3 style={learnedStyles}>Things I learned:</h3>
							<ul style={ulStyle}>
								<li><span style={liStyles}>Making Actions/Reducers correctly</span></li>
								<li><span style={liStyles}>Conditionally loading errors</span></li>
								<li><span style={liStyles}>Todo: Signing with admin/users</span></li>
							</ul>
							</div>
							<div className="col-sm-6">>
							<h3 style={learnedStyles}>Obstacles:</h3>
							<ul style={ulStyle}>
								<li><span style={liStyles}>Getting </span></li>
								<li><span style={liStyles}>Had a problem in my reducers that would remmove everything below the item you selected to delete.</span></li>
								<li><span style={liStyles}>How best to structure the mock data so buttons would render correctly.</span></li>
								<li><span style={liStyles}>Will need to make a lot of Quality of Life updates to the app in the days to come.</span></li>
							</ul>
							</div>
							<h3 style={descripStyle}>You can view the source code
								<a style={{color:(this.props.theColor)}}
								   href="https://github.com/blaynem/pos-app"
								   target="_blank"> here</a></h3>
						</div>
					</div>
				</div>



				<div style={{paddingTop:"15px", paddingBottom:"15px"}} className="col-xs-12">
					<div className="col-md-6">
						<div style={descripDivStyle} className="col-xs-12">
							<h1 style={headerStyle}>Web Store App</h1>
							<h3 style={descripStyle}>Using React w/ ES6, Redux, and bootstrap to recreate a similar shop app to the Polymer Shop App by google.
								The project was started because I wanted to understand redux with something like a shopping carts functionality.</h3>
							<div className="col-sm-6">>
							<h3 style={learnedStyles}>Things I learned:</h3>
							<ul style={ulStyle}>
								<li><span style={liStyles}>Mocking data, and structuring it.</span></li>
								<li><span style={liStyles}>Redux/Stores</span></li>
								<li><span style={liStyles}>React-Router v4</span></li>
							</ul>
							</div>
							<div className="col-sm-6">>
							<h3 style={learnedStyles}>Obstacles:</h3>
							<ul style={ulStyle}>
								<li><span style={liStyles}>Caching -Still to come-</span></li>
								<li><span style={liStyles}>Figuring out how to get cart working correctly</span></li>
								<li><span style={liStyles}>Had a problem in my reducers that would remmove everything below the item you selected to delete.</span></li>
								<li><span style={liStyles}>Had trouble figuring out exactly how to get the right data to places.</span></li>
							</ul>
							</div>
							<h3 style={descripStyle}>You can view the source code
								<a style={{color:(this.props.theColor)}}
								   href="https://github.com/blaynem/store-redo"
								   target="_blank"> here</a></h3>
						</div>
					</div>
					<a href="http://blaynestoretest.surge.sh/" target="_blank">
						<div style={storepics} className="col-md-6"></div>
					</a>
				</div>
				<div style={{paddingTop:"15px", paddingBottom:"15px"}} className="col-xs-12">
					<a href="http://blaynestoretest.surge.sh/" target="_blank">
						<div style={craigslistPics} className="col-md-6"></div>
					</a>
					<div className="col-md-6">
						<div style={descripDivStyle} className="col-xs-12">
							<h1 style={headerStyle}>Craigslist Searcher App</h1>
							<h3 style={descripStyle}>Using React w/ ES6, Redux, and AWS (Lambda, API Gateway) to build a better Craigslist searching experience.
							The goal is to grab all of craigslists’ data (countrywide) regarding opportunities for entrepreneurs, then being able to deliver that
							information straight to those who need it. Minus the noise. Project was started because I really wanted to learn more about setting up API requests.</h3>
							<div className="col-sm-6">>
							<h3 style={learnedStyles}>Things I learned:</h3>
							<ul style={ulStyle}>
								<li><span style={liStyles}>Working with Axios for http reuqests from Node.</span></li>
								<li><span style={liStyles}>AWS Lambda and working with Node.</span></li>
								<li><span style={liStyles}>React-Router v4</span></li>
							</ul>
							</div>
							<div className="col-sm-6">>
							<h3 style={learnedStyles}>Obstacles:</h3>
							<ul style={ulStyle}>
								<li><span style={liStyles}>Formatting URLs for craigslist search. Some have county codes, while others do not.</span></li>
								<li><span style={liStyles}>Making sure when you selected a state, it succesfully changed the drop down to the correct cities.</span></li>
								<li><span style={liStyles}>Working with AWS and figuring out how to add queries to my axios get requests was an exciting learning experience.</span></li>
							</ul>
							</div>
							<h3 style={descripStyle}>You can view the source code
								<a style={{color:(this.props.theColor)}}
								   href="https://github.com/blaynem/craigslist-searcher"
								   target="_blank"> here</a></h3>
						</div>
					</div>
				</div>
				<div style={{paddingTop:"15px", paddingBottom:"15px"}} className="col-xs-12">
					<div className="col-md-6">
						<div style={descripDivStyle} className="col-xs-12">
							<h1 style={headerStyle}>Weather App w/ Api</h1>
							<h3 style={descripStyle}>(App does not work due to surge.sh hosting only static web pages)</h3>
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
						{/* <WeatherApp
							appSize=""
							appColor={this.props.theColor}
							startCity="Portland"/> */}
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
							It helped me learn a lot about react and react-router. Though it's not quite finished and does
							have a bunch of placeholder text, I'm pretty happy with how it's turned out so far.</h3>
							<h3 style={learnedStyles}>Things I learned:</h3>
							<ul style={ulStyle}>
								<li><span style={liStyles}>Using React-Router</span></li>
								<li><span style={liStyles}>Planning of components</span></li>
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