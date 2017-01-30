import React, { Component } from 'react';

export default class Testimonials extends Component {
	render() {

		var container = {
			width: "100%",
			overflowX: "hidden",
			display: "inline-block",
			background: "rgba(0,0,0,0.6)",
			marginBottom: "35px",
			marginTop: "15vh"
		}

		var whoops = {
			fontSize: "3em",
			textAlign: "center",
			color:(this.props.theColor)
		}

		var paraStyle = {
			color: "white",
			textAlign: "left",
			margin: "0 0 10px 0",
			fontSize: "1.3em"
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