import React, { Component } from 'react';
import NavItem from './NavItem';
import { Link } from 'react-router-dom';

import { NavLinks } from '../NavLinks';

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

    const nameStyle = {
      color:"white",
      padding: "15px 0 0 0",
      textShadow: "none"
    }
    const pizzaz = {
      color:(this.props.theColor)
    }
    
    const titleStyle = {}
    // asks if you set a bakground for the nav, and if you did, change the color accordingly.
    // can be changed in routes.js, but it's set to invisible
    if (this.props.baseColor) {
      navStyle.background = this.props.baseColor;
    }
    // asks for a title color to be given can be changed in App.js
    if (this.props.theColor) {
      titleStyle.color = this.props.theColor;
    }

    const theColor = (this.props.theColor)
    const createLinkItem = function(item, index) {
      return <NavItem key={item.title + index} href={item.href} title={item.title} theColor={theColor}/>;
    }
    const nameStyleTitle = {
      margin: "2px 0 0 0"
    }
	return (
      <div>
        <nav style={navStyle} className="navbar navbar-default">
          <div style={{zIndex:1}} className="navbar-header col-sm-offset-1 col-xs-3">
            <Link style={nameStyle} className="navbar-brand" to="/">
              <span><span style={titleStyle}>Blayne</span>Marjama</span>
              <p style={nameStyleTitle}>React<span style={pizzaz}>JS</span> Developer</p>
            </Link>
          </div>
          <div className="navbar">
            <ul className="nav navbar-nav navbar-right">{NavLinks.map(createLinkItem)}</ul>
          </div>
        </nav>
      </div>
    );
	}
}