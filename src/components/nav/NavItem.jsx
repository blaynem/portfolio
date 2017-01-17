var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

// This grabs the items from the navbar and places them on the page,
// the function from NavBar passes information here and displays it
// with these styles dynamically
var NavItem = React.createClass({
  getInitialState: function() {
    return {hover: false};
  },
  mouseOver: function(e) {
    this.setState({hover: true});
  },
  mouseOut: function(e) {
    this.setState({hover: false});
  },
  render: function() {

    var hoverText = {
      color: "#FFF",
      fontSize: "1.3em"
    }

    var paraStyle = {
      textShadow: "1px 1px 8px gray, 0 0 15px black",
      fontSize: ".8em"
    }

    if (this.state.hover){
      hoverText.color = (this.props.mainColor)
      hoverText.background = "rgba(0,0,0,0)"
      hoverText.textDecoration = "none",
      hoverText.boxShadow = "none"
    }

    return (
      <li
        className={this.state.hover ? "active":""}
        onMouseOver={this.mouseOver}
        onMouseOut={this.mouseOut}>
        <Link className="linkWithHover" style={hoverText} to={this.props.href}>
          {this.props.title}
          <p style={paraStyle}>{this.props.content}</p>
        </Link>
      </li>
    );
  }
});

module.exports = NavItem;
