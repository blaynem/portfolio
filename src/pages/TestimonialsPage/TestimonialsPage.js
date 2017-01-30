import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Testimonials extends Component {
	render() {
		var container = {
			width: "100%",
			overflowX: "hidden",
			display: "inline-block",
			background: "rgba(0,0,0,0.6)",
			marginTop: "5vh"
		}

		var whoops = {
			fontSize: "4em",
			textAlign: "center",
			color:(this.props.theColor)
		}

		var paraStyle = {
			color: "white",
			textAlign: "left",
			margin: "0 0 10px 0",
			fontSize: "1.5em"
		}

		var pizzaz = {
			color: (this.props.theColor)
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
						<h3 style={paraStyle}>Looks like you navigated to a page that's not quite up yet. Sorry about that. 
						Feel free to click <Link style={pizzaz} to="/">here</Link> or on my name to take you back to the <Link style={pizzaz} to="/">HomePage.</Link></h3>
						<h3 style={paraStyle}>I promise there will be <span style={pizzaz}>great</span> testimonials, the <span style={pizzaz}>best</span> testimonials. From only
						the <span style={pizzaz}>best</span> people. They have such <span style={pizzaz}>bigly</span> things to say, it's going to be
						<span style={pizzaz}> great</span> let me tell you.</h3>
					</div>
				</div>
			</div>
		);
	}
};