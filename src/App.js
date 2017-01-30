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
			theColor: "#8AB9B5"
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

		return (
			<div style={background}>
		        <div>
		          <div>
		          	<button onClick={this.handleColorRed}>Red</button>
		          	<button onClick={this.handleColorOrange}>Orange</button>
		          	<button onClick={this.handleColorGreen}>Green</button>
		          	<button onClick={this.handleColorBlue}>Blue</button>
		            <NavBar
		              baseColor={this.props.route.baseColor}
		              mainColor={theColor}
		              navLinks={navLinks}/>
		            </div>
		          <div id="middleContainer">
		            {React.cloneElement(this.props.children, {...this.props})}
		          </div>
		          <div >
		          	<Footer
			          baseColor={this.props.route.baseColor}
			          mainColor={theColor}
			          navLinks={navLinks}/>
		          </div>
		        </div>
		    </div>
		)
	}
};