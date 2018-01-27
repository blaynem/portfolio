import React, { Component } from "react";
import NavItem from "./NavBar/NavItem";
import ConnectLinks from "./ConnectLinks";

import { NavLinks } from "./NavLinks";

export default class Footer extends Component {
  renderFooterLinks = theColor => {
    return NavLinks.map(item => {
      return (
        <div key={item.title} className="col-xs-2">
          <NavItem
            href={item.href}
            title={item.title}
            content={item.content}
            theColor={theColor}
          />
        </div>
      );
    });
  };

  render() {
    const rowStyle = {
      margin: 0,
      paddingLeft: "1%",
      paddingRight: "1%",
      textAlign: "center",
      paddingTop: "10px",
      paddingBottom: "10px"
    };

    const { theColor } = this.props;
    return (
      <div id="footer" style={rowStyle} className="row">
        <div id="footerConnectLinks" className="col-xs-offset-0 col-xs-4">
          <ConnectLinks theColor={theColor} />
        </div>
        <div id="footerParagraphs">
          <ul>{this.renderFooterLinks(theColor)}</ul>
        </div>
      </div>
    );
  }
}
