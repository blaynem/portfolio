var React = require('react');
var AboutSkillsList = require('../components/AboutSkillsList.jsx');

var AboutPage = React.createClass({
	render: function() {

		var container = {
			background: "rgba(0,0,0,0.6)",
		}

		var headerStyle = {
			fontSize: "4vw",
			textAlign: "center",
			color:(this.props.route.mainColor)
		}

		var pizzaz = {
			color: (this.props.route.mainColor)
		}

		const backgroundstyle = {
		    position: "relative",
		    padding: 0,
		    height: "600px",
		    backgroundPosition: "50% 50%",
		    backgroundRepeat: "no-repeat",
		    backgroundSize: "contain",
		    backgroundImage: "url(images/me.jpg)"
		}
					// <img style={{height:"450px"}} className="img-responsive" src="images/me.jpg" />
		return(
			<div>
				<div style={backgroundstyle} className="col-md-6 col-lg-offset-1 col-lg-4"></div>
				<div style={container} className="col-sm-offset-1 col-sm-10 col-md-offset-0 col-md-6">
					<div className="row">
						<div className="col-xs-12">
							<h1 style={headerStyle}>About Me</h1>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-12">
							<h3 style={{color:"white"}}>Junior Web Developer/QA Tester.</h3>
							<h4 style={{color:"white"}}>I began learning web development around 2 years ago. It started off with HTML/CSS and then expanded
							to learning the basics of JavaScript, Ruby, Rails, C#, and some Java for Anroid. I kept switching back and forth between what was "the best" thing
							to learn for a beginner. The struggle most self-taught developers know well.</h4>
							<h4 style={{color:"white"}}>I ultimately settled on learning Front-End development. I began flying through FreeCodeCamps challenges, helping out in
							the gitter chat channel as much as I possibly could. After completing a few projects I came across ReactJS. After completing a few courses through
							CodeAcademy and Udemy, I knew I found the language for me.</h4>
						</div>
					</div>
					<div className="row">
						<AboutSkillsList mainColor={this.props.route.mainColor}/>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = AboutPage;