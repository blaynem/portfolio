import React, { Component } from "react";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";

import { NavLinks } from "../NavLinks";

export default class NavBar extends Component {
  renderNavLinks = (theColor) => {
    return NavLinks.map( ({ title, href }) => {
      return (
        <NavItem
          key={title}
          href={href}
          title={title}
          theColor={theColor}
        />
      );
    })
  }
  render() {
    const { baseColor, theColor } = this.props

    const navStyle = {
      WebkitBoxShadow: "0 0 4px rgba(0,0,0,0)",
      MozBoxShadow: "0 0 4px rgba(0,0,0,0)",
      boxShadow: "0 0 4px rgba(0,0,0,0)",
      border: 0,
      paddingBottom: 0,
      margin: 0
    };

    const nameStyle = {
      color: "white",
      padding: "15px 0 0 0",
      textShadow: "none"
    };
    const pizzaz = {
      color: theColor
    };

    const titleStyle = {
      color: theColor
    };
    // believe this is here so i dont have to search through all the code to find the correct background color.. 
    if (baseColor) {
      navStyle.background = baseColor;
    }

    const nameStyleTitle = {
      margin: "2px 0 0 0"
    };
    return (
      <div>
        <nav style={navStyle} className="navbar navbar-default">
          <div
            style={{ zIndex: 1 }}
            className="navbar-header col-sm-offset-1 col-xs-3"
          >
            <Link style={nameStyle} className="navbar-brand" to="/">
              <span>
                <span style={titleStyle}>Blayne</span>Marjama
              </span>
              <p style={nameStyleTitle}>
                React<span style={pizzaz}>JS</span> Developer
              </p>
            </Link>
          </div>
          <div className="navbar">
            <ul className="nav navbar-nav navbar-right">
              {this.renderNavLinks(theColor)}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
