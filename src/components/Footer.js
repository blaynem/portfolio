import React, { Component } from 'react';
import NavItem from './NavBar/NavItem';
import ConnectLinks from './ConnectLinks';


export default class Footer extends Component {
	render() {
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
		
		var theColor = (this.props.theColor)
		var createLinkItem = function(item, index) {
	      return (
	      	<div key={item.title + index} className="col-xs-2">
		      	<NavItem href={item.href} title={item.title} content={item.content} theColor={theColor}/>
	      	</div>
	      	);
	    }

		return(
			<div id="footer" style={rowStyle} className="row">
				<div id="footerConnectLinks" style={connectStyle} className="col-xs-offset-0 col-xs-4">
					<ConnectLinks theColor={this.props.theColor}/>
				</div>
				<div id="footerParagraphs">
					<ul>
						{this.props.navLinks.map(createLinkItem)}
					</ul>
				</div>
			</div>
		);
	}
}