var React = require('react');
var NavBar = require('../components/nav/NavBar.jsx');
var Footer = require('../components/Footer.jsx');

// these are the navigation links
var navLinks = [
  {
    title: "About",
    content: "Learn more about me",
    href: "/coming-soon"
  },
  {
    title: "Portfolio",
    content: "View my portfolio",
    href: "/coming-soon"
  },
  {
    title: "Testimonials",
    content: "Read about how awesome people think I am",
    href: "/coming-soon"
  },
  {
    title: "Contact",
    content: "Send me a message",
    href: "/coming-soon"
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

    var headerStyle = {
      height:"200px"
    }

    return(
      <div style={background}>
        <div>
          <NavBar
              baseColor={this.props.route.baseColor}
              mainColor={this.props.route.mainColor}
              navLinks={navLinks}/>
          <div style={headerStyle}>
          </div>
          <div id="middleContainer">
            {this.props.children}
          </div>
          <div>
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
