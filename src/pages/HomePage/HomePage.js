import React, { Component } from 'react';

export default class HomePage extends Component {

  render() {

  	const borderTest = {
      paddingTop: "15vh"
  	}
    const thingcolor = {
      color:"white",
      padding: 0,
      marginTop: 0,
      marginBottom: 0,
      textAlign: "center",
      fontSize:"4em"
    }
    const resetMarginPadding = {
      margin:0,
      padding:0,
    }
    const liStyle = {
      margin: "0 10px 0 10px",
      fontSize: ".65em",
      display: "inline-block",
      color: "white"
    }
    const pizzaz = {
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
}