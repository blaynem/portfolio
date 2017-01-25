import React, { Component } from 'react';
import NavItem from './NavItem';
import { Link } from 'react-router';

export default class NavBar extends Component {
	render() {
	const navStyle = {
      WebkitBoxShadow: "0 0 4px rgba(0,0,0,0)",
      MozBoxShadow: "0 0 4px rgba(0,0,0,0)",
      boxShadow: "0 0 4px rgba(0,0,0,0)",
      border: 0,
      paddingBottom: 0,
      margin: 0
    }

    const titleStyle = {}
    const nameStyle = {
      color:"white",
      padding: "15px 0 0 0"
    }
    
    const linkStyle = {}

    if (this.props.baseColor) {
      navStyle.background = this.props.baseColor;
    }

    if (this.props.mainColor) {
      titleStyle.color = this.props.mainColor;
    }

    if (this.props.linkColor) {
      linkStyle.color = this.props.linkColor;
    }

    const mainColor = (this.props.mainColor)
    const createLinkItem = function(item, index) {
      return <NavItem key={item.title + index} href={item.href} title={item.title} aStyle={linkStyle} mainColor={mainColor}/>;
    }
	return(
		<div>
	        <nav style={navStyle} className="navbar navbar-default">
	          <div className="navbar-header col-sm-offset-1 col-sm-2">
	            <Link style={nameStyle} className="navbar-brand" to="/">
	              <span style={{fontSize:"1.3em"}}><span style={titleStyle}>Blayne</span>Marjama</span>
	              <p style={{fontSize:".7em", margin:0}}>Junior Developer</p>
	            </Link>
	            <button type="button"
	              className="navbar-toggle collapsed"
	              data-toggle="collapse"
	              data-target="#nav-collapse">
	              <span className="icon-bar"></span>
	              <span className="icon-bar"></span>
	              <span className="icon-bar"></span>
	            </button>
	          </div>
	          <div className="collapse navbar-collapse" id="nav-collapse">
	            <ul className="nav navbar-nav navbar-right">{this.props.navLinks.map(createLinkItem)}</ul>
	          </div>
	        </nav>
	    </div>
	);
	}
}