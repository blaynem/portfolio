import React, { Component } from 'react';

export default class HireMePage extends Component {
	render() {

		var container = {
			overflowX: "hidden",
			display: "inline-block",
			background: "rgba(0,0,0,0.6)",
			marginBottom: "50px",
			marginTop: "15vh"
		}

		var whoops = {
			fontSize: "80px",
			textAlign: "center",
			color:(this.props.route.mainColor)
		}

		var paraStyle = {
			color: "white",
			textAlign: "left",
			margin: "0 0 10px 0"
		}

		var pizzaz = {
			color: (this.props.route.mainColor)
		}

		var arrowStyle = {
			margin: 0,
			color: (this.props.route.mainColor),
			textAlign: "center",
			fontSize: "30px",
			marginBottom: "15px"
		}

		return(
			<div id="comingSoonContainer" style={container} className="col-xs-12 col-md-offset-2 col-md-8">
				<div className="row">
					<div className="col-xs-12">
						<h1 style={whoops}>Hire Me!</h1>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-offset-1 col-lg-10">
						<h3 style={paraStyle}>No seriously, <span style={pizzaz}>hire me</span>. Please.</h3>
						<h3 style={paraStyle}>I am interested in <span style={pizzaz}>Front-End Development</span>, or <span style={pizzaz}>QA</span> positions</h3>
						<h3 style={paraStyle}>I currently live in <span style={pizzaz}>Portland, OR</span>. Though I am open to
							a remote position, I much prefer being around my peers in a team environment. 
							If you'd like to go over a potential remote position, feel free to 
							reach out via email.</h3>
						<h3 style={paraStyle}><span style={pizzaz}>Email:</span> Blayne.Marjama@gmail.com</h3>
						<h3 style={paraStyle}>I can also be reached at one of the social media links below.</h3>
						<h3 style={arrowStyle}><i className="glyphicon glyphicon-chevron-down"></i></h3>
					</div>
				</div>
			</div>
		);
	}
};