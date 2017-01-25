import React, { Component } from 'react';

export default class Testimonials extends Component {
	render() {

		const container = {
			minWidth: "100%",
			overflowX: "hidden",
			display: "inline-block",
			background: "rgba(0,0,0,0.6)",
			marginTop: "8%"
		}

		const whoops = {
			fontSize: "80px",
			textAlign: "center",
			color: "white"
		}

		const paraStyle = {
			color: "white",
			textAlign: "center"
		}

		return(
			<div id="comingSoonContainer" style={container} className="container">
				<div className="row">
					<div className="col-xs-offset-3 col-xs-6 col-sm-offset-4 col-sm-4">
						<h1 style={whoops}>404! Whoops!</h1>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-offset-3 col-lg-6">
						<h3 style={paraStyle}>Looks like you navigated to a page that's not quite up yet. Sorry about that. 
						Feel free to click on my name to take you back to the HomePage.</h3>
					</div>
				</div>
			</div>
		);
	}
};