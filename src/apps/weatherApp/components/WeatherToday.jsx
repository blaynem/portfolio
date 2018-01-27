import React, { Component } from 'react';

import SearchButton from './SearchButton';

class WeatherToday extends Component {

  // handleSearch: function(search) {
  //   console.log(search);
  // },


  render() {

    var headingstyles = {
      color: "white",
      background: (this.props.headingColor),
      paddingTop: "0"
    }

    var currentCityStyle = {
      textAlign: "left"
    }

    var currentCityh4 = {
      marginBottom: "0",
      fontWeight: "bold"
    }

    var currentCityh5 = {
      marginTop: '5px'
    }

    var cloudSize = {
      textAlign: "left",
      paddingLeft: "40px"
    }

    var tempStyle = {
      fontSize: "1em",
      marginTop: "15px",
      paddingRight: "25px",
      textAlign: "right",
      fontWeight: "bold"
    }

    var currentTempStyle = {
      fontSize: "6em"
    }

    var windStyle = {
      fontSize: "1.4em",
      paddingLeft: "25px"
    }

    var windSpeedStyle = {
      textAlign: "right",
      paddingRight: "40px"
    }

    var cloudIconPic = ("wi wi-owm-" + (this.props.cloudIcon));

    // returns the name of the month depending on the given month number
    var monthName = function(month){
      if (month === "01") {
        return "January"
      } else if (month === "02") {
        return "February"
      } else if (month === "03") {
        return "March"
      } else if (month === "04") {
        return "April"
      } else if (month === "05") {
        return "May"
      } else if (month === "06") {
        return "June"
      } else if (month === "07") {
        return "July"
      } else if (month === "08") {
        return "August"
      } else if (month === "09") {
        return "September"
      } else if (month === "10") {
        return "October"
      } else if (month === "11") {
        return "November"
      } else {
        return "December"
      }
    }

    // this returns the angle and correct compass style depending on the wind direction from the api
    var windDirection = function(deg) {
      var angle = deg;
      var object = {
        direction: "",
        compassClass: ""
      }
      if (angle <= "22.5") {
        object.direction = "North"
        object.compassClass = "wi wi-wind wi-towards-n"
      } else if (angle <= "67.5") {
        object.direction = "North East"
        object.compassClass = "wi wi-wind wi-towards-ne"
      } else if (angle <= "112.5") {
        object.direction = "East"
        object.compassClass = "wi wi-wind wi-towards-e"
      } else if (angle <= "157.5") {
        object.direction = "South East"
        object.compassClass = "wi wi-wind wi-towards-se"
      } else if (angle <= "202.5") {
        object.direction = "South"
        object.compassClass = "wi wi-wind wi-towards-s"
      } else if (angle <= "247.5") {
        object.direction = "South West"
        object.compassClass = "wi wi-wind wi-towards-sw"
      } else if (angle <= "292.5") {
        object.direction = "West"
        object.compassClass = "wi wi-wind wi-towards-w"
      } else if (angle <= "337.5") {
        object.direction = "North West"
        object.compassClass = "wi wi-wind wi-towards-nw"
      } else {
        object.direction = "North"
        object.compassClass = "wi wi-wind wi-towards-n"
      }
      return object;
    }

    // changes degrees from Celsius to Fahrenheit
    var todaysTempC = (this.props.todayTemp);
    var todayTempF = (Math.round(todaysTempC * 9/5 + 32));

    return (
      <div style={headingstyles} className="panel-heading">
        <div className="row">
          <div style={currentCityStyle} className="col-xs-6">
            <h4 style={currentCityh4}>{this.props.currentCity.toUpperCase()}</h4>
            <h5 style={currentCityh5}>{this.props.dateDay} {monthName(this.props.todayMonth).toUpperCase()} {this.props.dateYear}</h5>
          </div>
          <div className="col-xs-6">
            <SearchButton searchNewCity={this.props.searchNewCity}/>
          </div>
          </div>
        <div style={currentTempStyle} className="row">
          <div style={cloudSize} className="col-xs-6">
            <i className={cloudIconPic}></i>
          </div>
          <div className="col-xs-6">
            <h3 style={tempStyle}>{todayTempF}&deg;</h3>
          </div>
        </div>
        <div style={windStyle} className="row"> 
          <div className="col-xs-6">
              <i className={windDirection(this.props.windDegrees).compassClass}></i>
              <span>{windDirection(this.props.windDegrees).direction}</span>
          </div>
          <div style={windSpeedStyle} className="col-xs-6">
            <span>
              <i className="wi wi-strong-wind"></i>
              <span>{this.props.windSpeed} MPH</span>
            </span>
          </div>
        </div>
      </div>
    );
  }
};

export default WeatherToday;