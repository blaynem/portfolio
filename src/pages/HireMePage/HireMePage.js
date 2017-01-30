import React, { Component } from 'react';

export default class HireMePage extends Component {
	render() {

		var container = {
			overflowX: "hidden",
			display: "inline-block",
			background: "rgba(0,0,0,0.6)",
			marginTop: "5vh"
		}

		var whoops = {
			fontSize: "4em",
			textAlign: "center",
			color:(this.props.route.mainColor)
		}

		var paraStyle = {
			color: "white",
			textAlign: "left",
			margin: "0 0 10px 0",
			fontSize: "1.5em"
		}

		var pizzaz = {
			color: (this.props.route.mainColor)
		}

		var arrowStyle = {
			margin: 0,
			color: (this.props.route.mainColor),
			textAlign: "center",
			fontSize: "30px"
		}

		return(
			<div id="comingSoonContainer" style={container} className="col-xs-12 col-sm-offset-1 col-sm-10">
				<div className="row">
					<div className="col-xs-12">
						<h1 style={whoops}>Hire Me!</h1>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-offset-1 col-lg-10">
						<h3 style={paraStyle}>I prefer working on <span style={pizzaz}>Front-End Development</span> but enjoy <span style={pizzaz}>QA Testing</span> as well.</h3>
						<h3 style={paraStyle}>I'm currently enjoying the beautiful nature scenery of <span style={pizzaz}>Portland, OR</span>,
							but am open to relocating or potentially working remotely. If you'd like to go over a potential opportunity or remote
							position feel free to reach out via email.</h3>
						<h3 style={paraStyle}><span style={pizzaz}>Email:</span> Blayne.Marjama@gmail.com</h3>
						<h3 style={paraStyle}>I can also be reached at one of the social media links below.</h3>
						<h3 style={arrowStyle}><i className="glyphicon glyphicon-chevron-down"></i></h3>
					</div>
				</div>
			</div>
		);
	}
};