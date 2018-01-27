import React, { Component } from 'react';

import ConnectLinks from '../../components/ConnectLinks';

export default class HireMePage extends Component {
	render() {
		const { theColor } = this.props
		const container = {
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
			textAlign: "left",
			margin: "0 0 10px 0",
			fontSize: "1.5em"
		}

		const pizzaz = {
			color: theColor
		}

		const arrowStyle = {
			margin: 0,
			color: theColor,
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
						<h3 style={paraStyle}>I prefer working on with <span style={pizzaz}>React</span> and <span style={pizzaz}>Redux</span> on the Frontend.</h3> 
						<h3 style={paraStyle}>I'm currently enjoying the beautiful nature scenery of <span style={pizzaz}>Portland, OR</span>,
							but am open to relocating or working remotely. If you'd like to go over a potential opportunity feel free to reach out via email.</h3>
						<h3 style={paraStyle}><span style={pizzaz}>Email: </span><a href="mailto:Blayne.Marjama@gmail.com" style={{color:"white"}}>Blayne.Marjama@gmail.com</a></h3>
						<h3 style={paraStyle}>I can also be reached at one of the social media links below.</h3>
						<h3 style={arrowStyle}><i className="glyphicon glyphicon-chevron-down"></i></h3>
						<div style={{textAlign:"center", marginBottom: "20px" }}><ConnectLinks theColor={theColor}/></div>
					</div>
				</div>
			</div>
		);
	}
};