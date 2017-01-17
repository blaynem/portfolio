var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

// The 'Connect' component, allows a user to click on a social media icon to reach out to us.

// change fasize to increase/decrease size of icons
// add or remove icons by adding to socialMediaLinks 
var faSize = "fa-3x"
var socialMediaLinks = [
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
	}
];
// NEED TO MAKE SURE LINKS OPEN THE APPS ON PHONES.


var ConnectLinks = React.createClass({
	render: function() {


		var mainColor = (this.props.mainColor)
		// function that creates the social media icons
		var createSocialIcons = function(item, index) {
	      return (
	      	<Link key={item.title + index} href={item.href} style={{padding:0, paddingRight:"12px"}} className="btn">
	      		<span style={{color:(mainColor)}} className={item.faClass + " " + faSize}/>
	      	</Link>
	      	);
	    }

		return(
			<div>
				<div className="row">
					{socialMediaLinks.map(createSocialIcons)}
				</div>
			</div>
		);
	}
});

module.exports = ConnectLinks;