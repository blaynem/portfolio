import React, { Component } from 'react';

export default class Testimonials extends Component {
	render() {
		const { theColor } = this.props
		const container = {
			width: "100%",
			overflowX: "hidden",
			display: "inline-block",
			background: "rgba(0,0,0,0.6)",
			marginBottom: "35px",
			marginTop: "15vh"
		}

		const whoops = {
			fontSize: "3em",
			textAlign: "center",
			color:theColor
		}

		const paraStyle = {
			color: "white",
			textAlign: "center",
			margin: "0 0 10px 0",
			fontSize: "1.3em"
		}

		return(
			<div id="comingSoonContainer" style={container} className="container">
				<div className="row">
					<div className="col-xs-offset-3 col-xs-6 col-sm-offset-4 col-sm-4">
						<h1 style={whoops}>404 Whoopsidoodles!</h1>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-offset-3 col-lg-6">
						<h3 style={paraStyle}>Looks like you navigated to a page that doesn't exist. Sorry about that.</h3>
					</div>
				</div>
			</div>
		);
	}
};