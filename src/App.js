import React from 'react';
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



const App = React.createClass({
	render() {

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
		)
	}
});

export default App;