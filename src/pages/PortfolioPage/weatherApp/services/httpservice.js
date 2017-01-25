// eslint-disable-next-line
var Fetch = require('whatwg-fetch');
var baseUrl = 'http://api.openweathermap.org/data/2.5/forecast/weather?q=';
var apiUrl = '&APPID=a07f627d8d593dfe2e91c117ba8f195d';

var service = {
  get: function(place) {
    return fetch(baseUrl + place + apiUrl)
    .then(function(response) {
      return response.json();
    });
  }
};

module.exports = service;
