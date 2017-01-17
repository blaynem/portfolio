var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var ConnectLinks = require('../components/ConnectLinks.jsx');

var HomePage = React.createClass({

  render:function() {

  	var resetMarginPadding = {
  		margin:0,
  		padding:0,
  	}
  	var thingcolor = {
  		color:"white",
  		padding: 0,
  		marginTop: 0,
  		marginBottom: 0,
  		textAlign: "center"
  	}
  	var liStyle = {
  		margin: "0 10px 0 10px",
  		fontSize: "1.5em",
  		display: "inline-block",
  		color: "white"
  	}

  	var borderTest = {
  	}

    var pizzaz = {
      color:(this.props.route.mainColor)
    }

    return(
      <div style={borderTest} className="container">
      	<div className="row">
	        <div>
	        	<h1 style={thingcolor}><span style={pizzaz}>Responsive</span> Front<span style={pizzaz}>-</span>End Development</h1>
	        </div>
    		</div>
    		<div className="row">
    			<div style={thingcolor}>
    				<ul style={resetMarginPadding}>
    					<li className="first" style={liStyle}>HTML</li>
    					<li className="second" style={liStyle}>CSS</li>
    					<li className="third" style={liStyle}>JavaScript</li>
    					<li className="fourth" style={liStyle}>ReactJS</li>
    					<li className="fifth" style={liStyle}>Redux</li>
    				</ul>
    			</div>
    		</div>
      </div>
    );
  }
});

module.exports = HomePage;
