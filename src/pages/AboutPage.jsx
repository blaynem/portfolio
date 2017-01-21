var React = require('react');

var AboutPage = React.createClass({
	render: function() {

		var container = {
			// minWidth: "100%",
			overflowX: "hidden",
			display: "inline-block",
			background: "rgba(0,0,0,0.6)",
			marginBottom: "50px"
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

		return(
			<div>
				<div className="col-sm-offset-2 col-sm-3">
					<img style={{height:"600px"}} className="img-responsive" src="images/me.jpg" />
				</div>
				<div style={container} className="col-xs-offset-1 col-sm-offset-0 col-sm-5">
					<div className="row">
						<div className="col-xs-12">
							<h1 style={whoops}>About Me</h1>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-offset-1 col-lg-10">
							<h3 style={paraStyle}></h3>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = AboutPage;