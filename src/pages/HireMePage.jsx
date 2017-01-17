var React = require('react');

var HireMePage = React.createClass({
	render: function() {

		var container = {
			minWidth: "100%",
			overflowX: "hidden",
			display: "inline-block",
			background: "rgba(0,0,0,0.6)"
		}

		var whoops = {
			fontSize: "80px",
			textAlign: "center",
			borderBottom: "3px solid white",
			color: "white"
		}

		var paraStyle = {
			color: "white",
			textAlign: "center"
		}

		return(
			<div id="comingSoonContainer" style={container} className="container">
				<div className="row">
					<div className="col-xs-offset-3 col-xs-6 col-sm-offset-4 col-sm-4">
						<h1 style={whoops}>Hire Me!</h1>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-offset-3 col-lg-6">
						<h3 style={paraStyle}>No seriously, hire me. Please. Will update this later before I go to bed, but who knows, maybe
						someone will accidentally come across this beautiful page.</h3>
						<h3 style={paraStyle}>You can reach me at my email: Blayne.Marjama@gmail.com</h3>
						<h3 style={paraStyle}>Or my phone number: (701)630-9449</h3>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = HireMePage;