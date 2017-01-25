import React, { Component } from 'react';

export default class AboutSkillsList extends Component {
	render() {
		const skillHeaderStyle = {
			color: (this.props.mainColor),
			marginTop: "10px"
		}

		const paraStyle = {
			color:"white"
		}

		const ulStyles = {
			float: "left",
			color: (this.props.mainColor)
		}
		return(
			<div id="AboutSkillsList" className="col-xs-12">
				<div>
					<div style={paraStyle} className="col-xs-12">
						<h3 style={{marginTop:"10px", marginBottom:0}} >Some of the skills I'm proficient with:</h3>
					</div>
				</div>
				<div style={paraStyle} className="col-xs-4">
					<h3 style={skillHeaderStyle}>Web Development:</h3>
					<ul style={ulStyles}>
						<li><span>JavaScript</span></li>
						<li><span>HTML/CSS</span></li>
						<li><span>APIs</span></li>
					</ul>
					<ul style={ulStyles}>
						<li><span>ReactJS</span></li>
						<li><span>React-Router</span></li>
						<li><span>Redux</span></li>
					</ul>
				</div>
				<div style={paraStyle} className="col-xs-8">
					<h3 style={skillHeaderStyle}>QA Testing:</h3>
					<ul style={ulStyles}>
						<li><span>Types:</span></li>
						<li><span>Ad Hoc</span></li>
						<li><span>Black-Box</span></li>
						<li><span>Data Driven</span></li>
						<li><span>Automation</span></li>
						<li><span>Regression(light)</span></li>
					</ul>
					<ul style={ulStyles}>
						<li><span>Automation(least exp)</span>:</li>
						<li><span>WATIR</span></li>
						<li><span>Selenium</span></li>
						<li><span>Firebug</span></li>
						<li><span>RSpec</span></li>
					</ul>
					<ul style={ulStyles}>
						<li><span>Tools:</span></li>
						<li><span>JIRA</span></li>
						<li><span>DaPulse</span></li>
					</ul>
				</div>
			</div>
		);
	}
};