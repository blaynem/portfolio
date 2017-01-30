import React, {Component} from 'react';
import { Link } from 'react-router';

export default class NavItem extends Component{
	constructor(props, context) {
		super(props, context);

		this.state = {hover: false};
		this.mouseOver =this.mouseOver.bind(this);
		this.mouseOut =this.mouseOut.bind(this);
	}
	mouseOver(e) {
		this.setState({hover: true});
	}
	mouseOut(e) {
		this.setState({hover: false});
	}
	render() {
		var listStyle = {
		  listStyleType:"none",
		  display: "inline-block"
		}

		var hoverText = {
		  color: "#FFF",
		}

		if (this.state.hover){
		  hoverText.color = (this.props.theColor)
		  hoverText.background = "rgba(0,0,0,0)"
		  hoverText.textDecoration = "none"
		  hoverText.boxShadow = "none"
		}
		return (
			<li style={listStyle}
			    className={this.state.hover ? "active":""}
			    onMouseOver={this.mouseOver}
			    onMouseOut={this.mouseOut}>
			    <Link className="linkWithHover" style={hoverText} to={this.props.href}>
			      {this.props.title}
			      <p className="linkWithHoverParagraphs">{this.props.content}</p>
			    </Link>
			</li>
		);
	}
}