import React, { Component } from "react";

import { PageRoutes } from './PageRoutes';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import "./App.css";

const buttonColors = [
  {
    hex: "#D63230",
    name: "Red"
  },
  {
    hex: "#F39237",
    name: "Orange"
  },
  {
    hex: "#32BA88",
    name: "Green"
  },
  {
    hex: "#3097d1",
    name: "Blue"
  }
];

const baseColor = "rgba(0,0,0,0)";
const backgroundColor = "url('images/tunnels.jpg')";

export default class App extends Component {
  state = {
    theColor: "#3097d1"
  };
  
  handleColorChange = theColor => {
    this.setState({ theColor });
  };
  
  renderColorButtons = () => {
    const buttonStyle = color => ({
      fontSize: "1em",
      borderColor: color,
      backgroundColor: color
    });

    return buttonColors.map(({ hex, name }) => {
      return (
        <button
          key={hex}
          style={buttonStyle(hex)}
          onClick={() => this.handleColorChange(hex)}>
          {name}
        </button>
      );
    });
  };

  render() {
    const { theColor } = this.state;

    const backgroundStyles = {
      background: backgroundColor,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      backgroundAttachment: "fixed",
      backgroundSize: "cover"
    };
    const colorChangerRowStyle = {
      margin: 0,
      paddingTop: "5px",
      paddingBottom: "5px",
      textAlign: "center"
    };

    return (
      <div style={backgroundStyles}>
        <div>
          <div>
            <NavBar
              baseColor={baseColor}
              theColor={theColor}
            />
          </div>
          <div id="middleContainer">
            <PageRoutes theColor={theColor}/>
          </div>
          <div>
            <Footer
              baseColor={baseColor}
              theColor={theColor}
            />
          </div>
          <div style={colorChangerRowStyle} className="row">
            <div className="col-xs-12 col-sm-4 colorChangeRow">
              {this.renderColorButtons()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
