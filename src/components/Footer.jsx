var React = require('react');
var NavItem = require('./nav/NavItem.jsx');
var ConnectLinks = require('../components/ConnectLinks.jsx');


var Footer = React.createClass({
	render: function() {

		var rowStyle = {
			background:(this.props.baseColor),
			margin:"0",
			color: "white"
		}

		var connectStyle = {
			paddingTop: "220px"
		}

		var listStyle = {
			listStyle: "none",
			padding: "0"
		}

		var mainColor = (this.props.mainColor)
		var createLinkItem = function(item, index) {
	      return <NavItem key={item.title + index} href={item.href} title={item.title} content={item.content} mainColor={mainColor}/>;
	    }

		return(
			<div id="footer" style={rowStyle} className="row">
				<div style={connectStyle} className="col-xs-offset-2 col-xs-4 col-sm-offset-3 col-sm-3">
					<ConnectLinks mainColor={this.props.mainColor}/>
				</div>
				<div className="col-xs-offset-1 col-xs-5 col-sm-offset-2 col-sm-3">
					<ul style={listStyle}>
						{this.props.navLinks.map(createLinkItem)}
					</ul>
				</div>
			</div>
		);
	}
});

module.exports = Footer;