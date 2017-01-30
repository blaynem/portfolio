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

    const nameStyle = {
      color:"white",
      padding: "15px 0 0 0"
    }
    
    const linkStyle = {}

    const titleStyle = {}
    if (this.props.baseColor) {
      navStyle.background = this.props.baseColor;
    }

    if (this.props.theColor) {
      titleStyle.color = this.props.theColor;
    }

    if (this.props.linkColor) {
      linkStyle.color = this.props.linkColor;
    }

    const theColor = (this.props.theColor)
    const createLinkItem = function(item, index) {
      return <NavItem key={item.title + index} href={item.href} title={item.title} aStyle={linkStyle} theColor={theColor}/>;
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
              <p style={nameStyleTitle}>ReactJS Developer</p>
            </Link>
          </div>
          <div className="navbar">
            <ul className="nav navbar-nav navbar-right">{this.props.navLinks.map(createLinkItem)}</ul>
          </div>
        </nav>
      </div>
    );
	}
}

      // <div>
      //     <nav style={navStyle} className="navbar navbar-default">
      //       <div className="navbar-header col-sm-offset-1 col-sm-2">
      //         <Link style={nameStyle} className="navbar-brand" to="/">
      //           <span><span style={titleStyle}>Blayne</span>Marjama</span>
      //           <p style={nameStyleTitle}>Junior Developer</p>
      //         </Link>
      //         <button type="button"
      //           className="navbar-toggle collapsed"
      //           data-toggle="collapse"
      //           data-target="#nav-collapse">
      //           <span className="icon-bar"></span>
      //           <span className="icon-bar"></span>
      //           <span className="icon-bar"></span>
      //         </button>
      //       </div>
      //       <div className="collapse navbar-collapse" id="nav-collapse">
      //         <ul className="nav navbar-nav navbar-right">{this.props.navLinks.map(createLinkItem)}</ul>
      //       </div>
      //     </nav>
      // </div>
      //   