var React = require('react');
var AboutSkillsList = require('../components/AboutSkillsList.jsx');

var AboutPage = React.createClass({
	render: function() {

		var container = {
			// height: "600px"
			height: "700px",
			paddingTop: "2%"
		}

		var aboutContainerH = {
			// height: "100%"
			paddingTop: "2%"
		}

		var aboutContainer = {
			background: "rgba(0,0,0,0.6)",
			// height: "100%"
		}

		var headerStyle = {
			fontSize: "4vw",
			textAlign: "center",
			color:(this.props.route.mainColor)
		}

		var pizzaz = {
			color: (this.props.route.mainColor)
		}

		const paragraphStyles = {
			color:"white",
			paddingLeft:"20px",
			paddingRight: "20px"
		}

		const backgroundstyle = {
		    position: "relative",
		    padding: 0,
		    height: "100%",
		    backgroundPosition: "50% 50%",
		    backgroundRepeat: "no-repeat",
		    backgroundSize: "contain",
		    backgroundImage: "url(images/me.jpg)"
		}
					// <img style={{height:"450px"}} className="img-responsive" src="images/me.jpg" />
		return(
			<div style={container}>
				<div style={backgroundstyle} className="col-sm-offset-1 col-sm-10 col-md-offset-0 col-md-6 col-lg-offset-1 col-lg-4"></div>
				<div style={aboutContainerH} className="col-sm-offset-1 col-sm-10 col-md-offset-0 col-md-6 col-lg-6">
				<div style={aboutContainer}>
					<div style={{marginLeft:0, marginRight:0}} className="row">
						<div className="col-xs-12">
							<h1 style={headerStyle}>About Me</h1>
						</div>
					</div>
					<div style={{marginLeft:0, marginRight:0}} className="row">
						<div className="col-xs-12">
							<h3 style={paragraphStyles}>Junior Web Developer/QA Tester.</h3>
							<h4 style={paragraphStyles}>I began learning web development around 2 years ago. It started off with HTML/CSS and then expanded
							to learning the basics of JavaScript, Ruby, Rails, C#, and some Java for Android. I kept switching back and forth between what was "the best" thing
							to learn for a beginner. The struggle most self-taught developers know well.</h4>
							<h4 style={paragraphStyles}>I ultimately settled on learning Front-End development. I began flying through FreeCodeCamps challenges, helping out in
							the gitter chat channel as much as I possibly could. After completing a few projects I came across ReactJS. After completing a few courses through
							CodeAcademy and Udemy, I knew I found the language for me.</h4>
						</div>
					</div>
					<div style={{marginLeft:0, marginRight:0}} className="row">
						<AboutSkillsList mainColor={this.props.route.mainColor}/>
					</div>
				</div>
				</div>
			</div>
		);
	}
});

module.exports = AboutPage;