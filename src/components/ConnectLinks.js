import React, { Component } from 'react';
import { Link } from 'react-router';

// The 'Connect' component, allows a user to click on a social media icon to reach out to us.

// change fasize to increase/decrease size of icons
// add or remove icons by adding to socialMediaLinks 
const faSize = "fa-2x"
const socialMediaLinks = [
	{
	    title: "github",
	    faClass: "fa fa-github-square",
	    href: "https://github.com/blaynem",
	    styles: ""
	},
	{
	    title: "linkedin",
	    faClass: "fa fa-linkedin-square",
	    href: "https://www.linkedin.com/in/blaynem",
	    styles: ""
	},
	{
	    title: "facebook",
	    faClass: "fa fa-facebook-square",
	    href: "https://www.facebook.com/blayne.marjama",
	    styles: ""
	},
	{
	    title: "twitter",
	    faClass: "fa fa-twitter-square",
	    href: "https://twitter.com/drilkmops",
	    styles: ""
	}
];
// NEED TO MAKE SURE LINKS OPEN THE APPS ON PHONES.


export default class ConnectLinks extends Component {
	render() {


		var mainColor = (this.props.mainColor)
		// function that creates the social media icons
		var createSocialIcons = function(item, index) {
	      return (
	      	<Link key={item.title + index} href={item.href} style={{padding:"0px 5px 0 0"}} className="btn">
	      		<span style={{color:(mainColor)}} className={item.faClass + " " + faSize + " connectLinks"}/>
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

