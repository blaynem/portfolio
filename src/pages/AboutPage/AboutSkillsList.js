import React, { Component } from 'react';

export default class AboutSkillsList extends Component {
	constructor(props) {
		super(props);
		this.handleWebDevSkills = this.handleWebDevSkills.bind(this);
		this.handleQaSkills = this.handleQaSkills.bind(this);
		this.state = {
			showWebDevSkills:true,
			showQaSkills:false
		};
	}
	handleWebDevSkills(){
		this.setState({
			showWebDevSkills:true,
			showQaSkills:false
		});
	}
	handleQaSkills(){
		this.setState({
			showWebDevSkills:false,
			showQaSkills:true
		});
	}
	render() {
		const showWebDevSkills = this.state.showWebDevSkills;
		const webDevStyle = {
			margin:"auto"
		}
		const webDevBtnStyle = {
			width:"100%",
			borderRadius: 0,
		}
		const qaStyle = {
			margin:"auto"
		}
		const qaBtnStyle = {
			width:"100%",
			borderRadius: 0,
		}

		// this changes which skill set is shown depending on button pressed
		// then changes the style of the button to be unpressed or not
		if (showWebDevSkills) {
			webDevStyle.display = "inline";
			webDevBtnStyle.backgroundColor = (this.props.theColor)
			webDevBtnStyle.color = "white"
			qaStyle.display = "none"
			qaBtnStyle.backgroundColor = "white"
			qaBtnStyle.color = (this.props.theColor)
		} else {
			webDevStyle.display = "none"
			webDevBtnStyle.backgroundColor = "white"
			webDevBtnStyle.color = (this.props.theColor)
			qaStyle.display = "inline"
			qaBtnStyle.backgroundColor = (this.props.theColor)
			qaBtnStyle.color = "white"
		}
		const headerStylerThinger = {
			marginTop:"10px",
			marginBottom:0
		}
		const paraStyle = {
			padding: 0
		}
		const ulStyles = {
			float: "left",
			color: "white",
			fontSize: "1.3em",
			listStyle: "none"
		}
		const listHeadingStyles = {
			color: (this.props.theColor),
			borderBottom: `1px solid ${this.props.theColor}`
		}
		const pizzaz = {
			color:(this.props.theColor)
		}
		return(
			<div id="AboutSkillsList" className="col-xs-12">
				<div>
					<div style={{color:"white"}} className="col-xs-12">
						<h3 style={headerStylerThinger} >Some of the skills I'm proficient with:</h3>
					</div>
				</div>
				<div style={{paddingLeft:"15px", paddingRight:"15px"}} className="row">
					<div style={paraStyle} className="col-xs-6">
						<button
							onClick={this.handleWebDevSkills}
							style={webDevBtnStyle}
							className="btn">Web Development:</button>
					</div>
					<div style={paraStyle} className="col-xs-6">
						<button
							onClick={this.handleQaSkills}
							style={qaBtnStyle}
							className="btn">QA Testing:</button>
					</div>
				</div>
				<div style={webDevStyle} className="row">
					<ul style={ulStyles} className="col-xs-6 col-sm-4" >
						<li><span style={listHeadingStyles}>Languages:</span></li>
						<li>HTML</li>
						<li>CSS</li>
						<li>JavaScript</li>
					</ul>
					<ul style={ulStyles} className="col-xs-6 col-sm-4" >
						<li><span style={listHeadingStyles}>Libraries:</span></li>
						<li>ReactJS</li>
						<li>React<span style={pizzaz}>-</span>Router</li>
						<li>Redux</li>
						<li>JQuery</li>
						<li>Bootstrap</li>
					</ul>
					<ul style={ulStyles} className="col-xs-6 col-sm-4" >
						<li><span style={listHeadingStyles}>Tools:</span></li>
						<li>Git</li>
						<li>APIs</li>
						<li>Chrome Dev Tools</li>
						<li>FireFox Dev Tools</li>
					</ul>
				</div>
				<div style={qaStyle} className="row">
					<ul style={ulStyles} className="col-xs-6 col-sm-4" >
						<li><span style={listHeadingStyles}>Types:</span></li>
						<li>Ad Hoc</li>
						<li>Black<span style={pizzaz}>-</span>Box</li>
						<li>Data Driven</li>
						<li>Automation</li>
						<li>Regression</li>
					</ul>
					<ul style={ulStyles} className="col-xs-6 col-sm-4" >
						<li><span style={listHeadingStyles}>Automation:</span></li>
						<li>WATIR</li>
						<li>Selenium</li>
						<li>Firebug</li>
						<li>RSpec</li>
					</ul>
					<ul style={ulStyles} className="col-xs-6 col-sm-4" >
						<li><span style={listHeadingStyles}>Tools:</span></li>
						<li>JIRA</li>
						<li>DaPulse</li>
					</ul>
				</div>
			</div>
		);
	}
};