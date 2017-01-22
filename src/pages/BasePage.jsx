var React = require('react');
var NavBar = require('../components/nav/NavBar.jsx');
var Footer = require('../components/Footer.jsx');

// these are the navigation links
var navLinks = [
  {
    title: "About",
    content: "Learn more about me",
    href: "/about"
  },
  {
    title: "Portfolio",
    content: "View my portfolio",
    href: "/portfolio"
  },
  {
    title: "Testimonials",
    content: "Read what clients have said",
    href: "/testimonials"
  },
  {
    title: "Hire Me",
    content: "Currently looking for work",
    href: "hire-me"
  }
];

var BasePage = React.createClass({
  render:function() {

    var background = {
      background:(this.props.route.backgroundColor),
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      backgroundAttachment: "fixed",
      backgroundSize: "cover"
    }

    var style = {
      paddingTop: 0
    }

    return(
      <div style={background}>
        <div>
          <div>
            <NavBar
              baseColor={this.props.route.baseColor}
              mainColor={this.props.route.mainColor}
              navLinks={navLinks}/>
            </div>
          <div id="middleContainer">
            {this.props.children}
          </div>
          <div >
            <Footer
              baseColor={this.props.route.baseColor}
              mainColor={this.props.route.mainColor}
              navLinks={navLinks}/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = BasePage;
