import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// The 'Connect' component, allows a user to click on a social media icon to reach out to us.

// change fasize to increase/decrease size of icons
// add or remove icons by adding to socialMediaLinks 
const faSize = "fa-2x"
// depending on what you have declared below, more or less connectlinks will be shown
const socialMediaLinks = [
	{
	    title: "github",
	    faClass: "fa fa-github-square",
	    href: "https://github.com/blaynem"
	},
	{
	    title: "linkedin",
	    faClass: "fa fa-linkedin-square",
	    href: "https://www.linkedin.com/in/blaynem"
	},
	{
	    title: "facebook",
	    faClass: "fa fa-facebook-square",
	    href: "https://www.facebook.com/blayne.marjama"
	},
	{
	    title: "twitter",
	    faClass: "fa fa-twitter-square",
	    href: "https://twitter.com/drilkmops"
	}
];

// NEED TO MAKE SURE LINKS OPEN THE APPS ON PHONES.
// Well, don't really need to, would just be nice i guess.
export default class ConnectLinks extends Component {
	render() {


		var theColor = (this.props.theColor)
		// function that creates the social media icons depending on how many you want
		var createSocialIcons = function(item, index) {
	      return (
	      	<Link key={item.title + index} to={item.href} style={{padding:"0px 5px 0 0"}} className="btn" target="_blank" rel="noopener noreferrer">
	      		<span style={{color:(theColor)}} className={item.faClass + " " + faSize + " connectLinks"}/>
	      	</Link>
	      	);
	    }

		return(
			<div>
				<div style={{paddingTop:"10px"}}>
					{socialMediaLinks.map(createSocialIcons)}
				</div>
			</div>
		);
	}
};

