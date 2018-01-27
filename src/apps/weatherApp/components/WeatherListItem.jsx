import React, { Component } from 'react';

class WeatherListItem extends Component {
  render() {

    // changes degrees from Celsius to Fahrenheit
    var todaysTempC = (this.props.temps);
    var todayTempF = (Math.round((todaysTempC) * 9/5 + 32));

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

    var listStyle = {
      color: "BCBCBC",
      height: "60px",
      background: (this.props.listColor),
      textAlign: "center",
      fontSize: "1.4em"
    }

    var cloudStyle = {
      padding: "10px 0 10px 0"
    }

    // this will return a different cloud icon depending on the type of weather
    var cloudIconPic = ("wi wi-owm-" + (this.props.cloudIcon));
    
    return (
      <div style={listStyle} className="row">
        <div className="col-xs-5">
          <h4 >{this.props.dateDay} {monthName(this.props.dateMonth)}</h4>
        </div>
        <div className="col-xs-2">
          <i style={cloudStyle} className={cloudIconPic}></i>
        </div>
        <div className="col-xs-5">
          <h4>{todaysTempC}&deg; / {todayTempF}&deg;</h4>
        </div>
      </div>
    );
  }
};


export default WeatherListItem