import React, { Component } from 'react';
import AboutSkillsList from './AboutSkillsList';

export default class AboutPage extends Component {
	render() {
		var container = {
			height: "700px",
			paddingTop: "3vw",
		}

		var aboutContainerH = {
			paddingBottom: "30px",
			height: "700px"
		}

		var aboutContainer = {
			background: "rgba(0,0,0,0.6)",
		}

		var headerStyle = {
			textAlign: "center",
			color:(this.props.theColor)
		}

		const paragraphStyles = {
			color:"white",
			paddingLeft:"20px",
			paddingRight: "20px"
		}

		const backgroundstyle = {
		    position: "relative",
		    padding: 0,
		    height: "700px",
		    backgroundPosition: "50% 50%",
		    backgroundRepeat: "no-repeat",
		    backgroundSize: "contain",
		    backgroundImage: "url(images/me.jpg)"
		}
		const rowStyle = {
			marginLeft:0,
			marginRight:0,
		}
		const pizzaz = {
			color:(this.props.theColor)
		}
		return(
			<div style={container}>
				<div style={backgroundstyle} className="col-sm-offset-1 col-sm-10 col-md-offset-0 col-md-6 col-lg-offset-1 col-lg-4"></div>
				<div style={aboutContainerH} className="col-sm-offset-1 col-sm-10 col-md-offset-0 col-md-6 col-lg-6">
					<div style={aboutContainer}>
						<div style={rowStyle} className="row">
							<div className="col-xs-12">
								<h1 id="aboutMeHeader" style={headerStyle}>About Me</h1>
							</div>
						</div>
						<div style={rowStyle} className="row">
							<div className="col-xs-12">
								<h3 style={paragraphStyles}>Web Developer<span style={pizzaz}>/</span>QA Tester</h3>
								<h4 style={paragraphStyles}>I began learning web development around 2 years ago. It started off with HTML
								<span style={pizzaz}>/</span>CSS and then expanded to learning the basics of JavaScript, Ruby, Rails, 
								C<span style={pizzaz}>#</span>, and some Java for Android. I kept switching back and forth between what was
								<span style={pizzaz}> "the best"</span> thing to learn for a beginner. The struggle most self<span style={pizzaz}>-</span>
								taught developers know well.</h4>
								<h4 style={paragraphStyles}>I ultimately settled on learning Front<span style={pizzaz}>-</span>End development.
								I began flying through FreeCodeCamps challenges, helping out in the gitter chat channel as much as I possibly could.
								While working on FreeCodeCamp projects, React<span style={pizzaz}>JS</span> caught my eye and after completing a few
								courses through CodeAcademy<span style={pizzaz}>/</span>Udemy, I knew I found the language for me.</h4>
							</div>
						</div>
						<div style={rowStyle} className="row">
							<AboutSkillsList theColor={this.props.theColor}/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}