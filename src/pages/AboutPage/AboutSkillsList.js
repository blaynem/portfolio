import React, { Component } from 'react';

export default class AboutSkillsList extends Component {
	state = {
		showWebDevSkills:true,
		showQaSkills:false
	}
	handleWebDevSkills = () => {
		this.setState({
			showWebDevSkills:true,
			showQaSkills:false
		});
	}
	handleQaSkills = () => {
		this.setState({
			showWebDevSkills:false,
			showQaSkills:true
		});
	}
	render() {
		const { showWebDevSkills, showQaSkills } = this.state;
		const { theColor } = this.props
		const webDevStyle = {
			margin:"auto",
			display: showWebDevSkills ? "inline" : "none"
		}
		const webDevBtnStyle = {
			width:"100%",
			borderRadius: 0,
			backgroundColor: showWebDevSkills ? theColor : "white",
			color: showWebDevSkills ? "white" : theColor
		}
		const qaStyle = {
			margin:"auto",
			display: showQaSkills ? "inline" : "none"			
		}
		const qaBtnStyle = {
			width:"100%",
			borderRadius: 0,
			backgroundColor: showQaSkills ? theColor : "white",
			color: showQaSkills ? "white" : theColor
		}

		const headerStylerThinger = {
			marginTop:"10px",
			marginBottom: "10px"
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
			color: theColor,
			borderBottom: `1px solid ${theColor}`
		}
		const pizzaz = {
			color:theColor
		}
		return(
			<div id="AboutSkillsList" className="col-xs-12">
				<div style={{color:"white"}} className="col-xs-12">
					<h3 style={headerStylerThinger} >Some of the skills I'm proficient with:</h3>
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
						<li>JavaScript ES6</li>
					</ul>
					<ul style={ulStyles} className="col-xs-6 col-sm-4" >
						<li><span style={listHeadingStyles}>Libraries:</span></li>
						<li>ReactJS</li>
						<li>React<span style={pizzaz}>-</span>Router</li>
						<li>Redux</li>
						<li>Bootstrap</li>
					</ul>
					<ul style={ulStyles} className="col-xs-6 col-sm-4" >
						<li><span style={listHeadingStyles}>Tools:</span></li>
						<li>RESTful APIs</li>
						<li>AWS Lambda</li>
						<li>DynamoDB</li>
						<li>Git</li>
					</ul>
				</div>
				<div style={qaStyle} className="row">
					<ul style={ulStyles} className="col-xs-6 col-sm-6" >
						<li><span style={listHeadingStyles}>Types:</span></li>
						<li>Ad Hoc</li>
						<li>Black<span style={pizzaz}>-</span>Box</li>
						<li>Data Driven</li>
						<li>Automation</li>
						<li>Regression</li>
					</ul>
					<ul style={ulStyles} className="col-xs-6 col-sm-6" >
						<li><span style={listHeadingStyles}>Tools:</span></li>
						<li>JIRA</li>
						<li>DaPulse</li>
					</ul>
				</div>
			</div>
		);
	}
};