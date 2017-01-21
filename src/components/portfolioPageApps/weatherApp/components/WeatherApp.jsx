var React = require('react');
var WeatherListItem = require('./WeatherListItem.jsx');
var WeatherToday = require('./WeatherToday.jsx');
var HTTP = require('../services/httpservice');

//starting city

var WeatherApp = React.createClass({
  // initializes the app with the base cities weather
  // base city can be changed by replacing var city
  getInitialState: function() {
    city=(this.props.startCity)
    return {
      location: city
    };
  },
  // this gathers the information from the API based on the city that was searched for
  handleSearch: function(search) {
    HTTP.get(search)
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
  },
  // this gathers the information from the API based on the starting city
  componentWillMount: function() {
    HTTP.get(city)
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
  },
  render: function() {

    //removes the top padding from the panel body.
    var panelBodyStyle = {
      paddingTop: "0"
    }

    if (this.props.appSize) {
      appSize = (this.props.appSize)
    } else {
      appSize = "col-xs-12"
    };

    return (
      <div className={appSize}>
        <div className="panel panel-default">
            <WeatherToday
              headingColor={this.props.appColor}
              currentCity={this.state.location}
              dateDay={this.state.dateDay1}
              dateMonth={this.state.dateMonth1}
              dateYear={this.state.dateYear1}
              cloudIcon={this.state.cloudIcon1}
              todayTemp={this.state.tempsDay1}
              windDegrees={this.state.windDirection}
              windSpeed={this.state.windSpeed} 
              searchNewCity={this.handleSearch} />
          <div style={panelBodyStyle} className="panel-body">
            <WeatherListItem
              listColor="#EBEBEB"
              dateDay={this.state.dateDay2}
              dateMonth={this.state.dateMonth2}
              cloudIcon={this.state.cloudIcon2}
              temps={this.state.tempsDay2}/>
            <WeatherListItem
              listColor="#F5F5F5"
              dateDay={this.state.dateDay3}
              dateMonth={this.state.dateMonth3}
              cloudIcon={this.state.cloudIcon3}
              temps={this.state.tempsDay3}/>
            <WeatherListItem
              listColor="#EBEBEB"
              dateDay={this.state.dateDay4}
              dateMonth={this.state.dateMonth4}
              cloudIcon={this.state.cloudIcon4}
              temps={this.state.tempsDay4}/>
            <WeatherListItem
              listColor="#F5F5F5"
              dateDay={this.state.dateDay5}
              dateMonth={this.state.dateMonth5}
              cloudIcon={this.state.cloudIcon5}
              temps={this.state.tempsDay5}/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = WeatherApp;
