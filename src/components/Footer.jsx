var React = require('react');
var NavItem = require('./nav/NavItem.jsx');
var ConnectLinks = require('../components/ConnectLinks.jsx');


var Footer = React.createClass({
	render: function() {

		var rowStyle = {
			background:(this.props.baseColor),
			margin: 0,
			color: "white",
			paddingLeft: "1%",
			paddingRight: "1%",
			textAlign:"center",
			paddingBottom: "20px"
		}

		var connectStyle = {
		}

		var listStyle = {
			listStyle: "none",
			padding: "0",
		}

		var mainColor = (this.props.mainColor)
		var createLinkItem = function(item, index) {
	      return (
	      	<div key={item.title + index}  className="col-xs-2">
		      	<NavItem href={item.href} title={item.title} content={item.content} mainColor={mainColor}/>
	      	</div>
	      	);
	    }

		return(
			<div id="footer" style={rowStyle} className="row">
				<div style={connectStyle} className="col-xs-offset-1 col-xs-2">
					<ConnectLinks mainColor={this.props.mainColor}/>
				</div>
				<div>
					<ul>
						{this.props.navLinks.map(createLinkItem)}
					</ul>
				</div>
			</div>
		);
	}
});

module.exports = Footer;