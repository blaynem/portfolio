import React, { Component } from 'react';

export default class Testimonials extends Component {
	render() {
		const { theColor } = this.props
		const container = {
			width: "100%",
			overflowX: "hidden",
			display: "inline-block",
			background: "rgba(0,0,0,0.6)",
			marginTop: "5vh"
		}

		const whoops = {
			fontSize: "4em",
			textAlign: "center",
			color:theColor
		}

		const paraStyle = {
			color: "white",
			textAlign: "center",
			margin: "0 0 10px 0",
			fontSize: "1.5em"
		}

		return(
			<div id="comingSoonContainer" style={container} className="container">
				<div className="row">
					<div className="col-xs-offset-3 col-xs-6 col-sm-offset-4 col-sm-4">
						<h1 style={whoops}>Whoops!</h1>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-offset-3 col-lg-6">
						<h3 style={paraStyle}>This is where I'd put my testimonials... if I had some.</h3>
					</div>
				</div>
			</div>
		);
	}
};