import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class NavItem extends Component{
	state = {
		hover: false
	}
	mouseOver = (e) => {
		this.setState({hover: true});
	}
	mouseOut = (e) => {
		this.setState({hover: false});
	}
	render() {
		const { hover } = this.state
		const { content, href, title, theColor } = this.props

		var listStyle = {
			listStyleType:"none",
			display: "inline-block"
		}

		var hoverText = {
			color: hover ? theColor: "#FFF",
			background: "transparent"
		}

		const pizzaz = {
			color:theColor
		}

		const listClass = hover ? "active" : ""

		return (
			<li style={listStyle}
				className={listClass}
				onMouseOver={this.mouseOver}
				onMouseOut={this.mouseOut}>
				<Link className="linkWithHover" style={hoverText} to={href}>
					{title}
					<p style={pizzaz} className="linkWithHoverParagraphs">{content}</p>
				</Link>
			</li>
		);
	}
}