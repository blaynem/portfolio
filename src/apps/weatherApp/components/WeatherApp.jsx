import React, { Component } from 'react';

import WeatherListItem from './WeatherListItem';
import WeatherToday from './WeatherToday';
import HTTP from '../services/httpservice'

class WeatherApp extends Component {
  // initializes the app with the base cities weather
  // base city can be changed by replacing var city
  constructor(props){
    super(props)

    this.state = {
      location: this.props.startCity
    }
  }
  // this gathers the information from the API based on the city that was searched for
  handleSearch = (search) => {
    HTTP.get(search)
      .then(function(data) {
        for(var i=0; i<4; i++){
          console.log(Math.round(data.list[i].main.temp - 273.15));
          console.log(data.list[i].weather[0].id);
          console.log(data.list[i].dt_txt.substring(8, 10));
          console.log(data.list[i].dt_txt.substring(5, 7));
        }
        this.setState({
          location: data.city.name,
          //This is for todays temperatures
          windSpeed: Math.round((data.list[0].wind.speed) / 0.44704),
          tempsDay1: Math.round(data.list[0].main.temp - 273.15),
          cloudIcon1: data.list[0].weather[0].id,
          dateDay1: data.list[0].dt_txt.substring(8, 10),
          dateMonth1: data.list[0].dt_txt.substring(5, 7),
          dateYear1: data.list[0].dt_txt.substring(0, 4),
          windDirection: data.list[0].wind.deg,

          //These are for the following days in the 5 day forecast.
          tempsDay2: Math.round(data.list[8].main.temp - 273.15),
          cloudIcon2: data.list[8].weather[0].id,
          dateDay2: data.list[8].dt_txt.substring(8, 10),
          dateMonth2: data.list[8].dt_txt.substring(5, 7),
          tempsDay3: Math.round(data.list[16].main.temp - 273.15),
          cloudIcon3: data.list[16].weather[0].id,
          dateDay3: data.list[16].dt_txt.substring(8, 10),
          dateMonth3: data.list[16].dt_txt.substring(5, 7),
          tempsDay4: Math.round(data.list[24].main.temp - 273.15),
          cloudIcon4: data.list[24].weather[0].id,
          dateDay4: data.list[24].dt_txt.substring(8, 10),
          dateMonth4: data.list[24].dt_txt.substring(5, 7),
          tempsDay5: Math.round(data.list[32].main.temp - 273.15),
          cloudIcon5: data.list[32].weather[0].id,
          dateDay5: data.list[32].dt_txt.substring(8, 10),
          dateMonth5: data.list[32].dt_txt.substring(5, 7)
        });
      }.bind(this));
      
  }
  // this gathers the information from the API based on the starting city
  componentWillMount = () =>  {
    const { startCity } = this.props
    HTTP.get(startCity)
      .then(function(data) {
        this.setState({
          location: data.city.name,
          //This is for todays temperatures
          windSpeed: Math.round((data.list[0].wind.speed) / 0.44704),
          tempsDay1: Math.round(data.list[0].main.temp - 273.15),
          cloudIcon1: data.list[0].weather[0].id,
          dateDay1: data.list[0].dt_txt.substring(8, 10),
          dateMonth1: data.list[0].dt_txt.substring(5, 7),
          dateYear1: data.list[0].dt_txt.substring(0, 4),
          windDirection: data.list[0].wind.deg,

          // These are for the following days in the 5 day forecast.
          tempsDay2: Math.round(data.list[8].main.temp - 273.15),
          cloudIcon2: data.list[8].weather[0].id,
          dateDay2: data.list[8].dt_txt.substring(8, 10),
          dateMonth2: data.list[8].dt_txt.substring(5, 7),
          tempsDay3: Math.round(data.list[16].main.temp - 273.15),
          cloudIcon3: data.list[16].weather[0].id,
          dateDay3: data.list[16].dt_txt.substring(8, 10),
          dateMonth3: data.list[16].dt_txt.substring(5, 7),
          tempsDay4: Math.round(data.list[24].main.temp - 273.15),
          cloudIcon4: data.list[24].weather[0].id,
          dateDay4: data.list[24].dt_txt.substring(8, 10),
          dateMonth4: data.list[24].dt_txt.substring(5, 7),
          tempsDay5: Math.round(data.list[32].main.temp - 273.15),
          cloudIcon5: data.list[32].weather[0].id,
          dateDay5: data.list[32].dt_txt.substring(8, 10),
          dateMonth5: data.list[32].dt_txt.substring(5, 7)
        });
      }.bind(this));
  }
  // makes it so every other list item changes color
  // the num it recieves is from the mapping of [2,3,4,5]
  listColor(num){
    if (num % 2 === 0){
      return "#EBEBEB"
    }
      return "#F5F5F5"
  }

  renderWeatherList = () => {
    return [2,3,4,5].map((number, i) => (
      <WeatherListItem
        key={number + i}
        listColor={this.listColor(number)}
        dateDay={this.state["dateDay" + number]}
        dateMonth={this.state["dateMonth" + number]}
        cloudIcon={this.state["cloudIcon" + number]}
        temps={this.state["tempsDay" + number]}/>
    ))
  }

  render() {

    // cleans up code by getting rid of calling "this.state" always
    const { location, dateDay1, dateMonth1, dateYear1, cloudIcon1, tempsDay1, windDirection, windSpeed } = this.state;
    // cleans up code by getting rid of calling "this.props" always
    const { appColor, appSize } = this.props;
    //removes the top padding from the panel body.
    var panelBodyStyle = {
      paddingTop: 0,
      paddingBottom: 0
    }

    if (appSize) {
      var appSizeClass = (appSize)
    } else {
      appSizeClass = "col-xs-12"
    };

    return (
      <div className={appSizeClass}>
        <div style={{marginBottom:0}} className="panel panel-default">
          <WeatherToday
            headingColor={appColor}
            currentCity={location}
            dateDay={dateDay1}
            dateMonth={dateMonth1}
            dateYear={dateYear1}
            cloudIcon={cloudIcon1}
            todayTemp={tempsDay1}
            windDegrees={windDirection}
            windSpeed={windSpeed} 
            searchNewCity={this.handleSearch} />
          <div style={panelBodyStyle} className="panel-body">
            {this.renderWeatherList()}
          </div>
        </div>
      </div>
    )
  }
}

export default WeatherApp;