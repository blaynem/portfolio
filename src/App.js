import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import './App.css';

const navLinks = [
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



export default class App extends Component{
	constructor(props){
		super(props);
		this.handleColorRed = this.handleColorRed.bind(this);
		this.handleColorOrange = this.handleColorOrange.bind(this);
		this.handleColorGreen = this.handleColorGreen.bind(this);
		this.handleColorBlue = this.handleColorBlue.bind(this);

		this.state = {
			theColor:"#3097d1"
		}
	}
	handleColorRed() {
		this.setState({
			theColor: "#D63230"
		});
	}
	handleColorOrange() {
		this.setState({
			theColor: "#F39237"
		});
	}
	handleColorGreen() {
		this.setState({
			theColor: "#32BA88"
		});
	}
	handleColorBlue() {
		this.setState({
			theColor: "#3097d1"
		});
	}
	render() {
		const theColor = this.state.theColor;

		const background = {
			background:(this.props.route.backgroundColor),
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center center",
			backgroundAttachment: "fixed",
			backgroundSize: "cover"
		}
		const colorChangerRowStyle = {
			margin: 0,
			paddingTop: "5px",
			paddingBottom: "5px",
			backgroundColor: "rgba(0,0,0,0.7)",
			textAlign: "center"
		}
		const redButton = {
			fontSize: "0.9em",
			borderColor:"#D63230",
			backgroundColor: "#D63230"
		}
		const orangeButton = {
			fontSize: "0.9em",
			borderColor:"#F39237",
			backgroundColor: "#F39237"
		}
		const greenButton = {
			fontSize: "0.9em",
			borderColor:"#32BA88",
			backgroundColor: "#32BA88"
		}
		const blueButton = {
			fontSize: "0.9em",
			borderColor:"#3097d1",
			backgroundColor: "#3097d1"
		}

		return (
			<div style={background}>
		        <div>
			        <div style={colorChangerRowStyle} className="row">
			          	<div className="col-xs-offset-0 col-xs-12 colorChangeRow">
			          		<span style={{color:"white", paddingRight:"4vw"}}>Don't like the current <span style={{color:(theColor)}}>color</span>?
			          		Click over here <span style={{color:(theColor)}}>---></span></span>
				          	<button style={redButton} onClick={this.handleColorRed}>Red</button>
				          	<button style={orangeButton} onClick={this.handleColorOrange}>Orange</button>
				          	<button style={greenButton} onClick={this.handleColorGreen}>Green</button>
				          	<button style={blueButton} onClick={this.handleColorBlue}>Blue</button>
			          	</div>
			        </div>
			        <div>
			            <NavBar
		            		baseColor={this.props.route.baseColor}
		            		theColor={theColor}
		            		navLinks={navLinks}/>
			            </div>
			        <div id="middleContainer">
			        	{React.cloneElement(this.props.children, { theColor }, )}
			        </div>
			        <div >
			          	<Footer
				        	baseColor={this.props.route.baseColor}
				        	theColor={theColor}
				        	navLinks={navLinks}/>
			        </div>
		        </div>
		    </div>
		)
	}
};