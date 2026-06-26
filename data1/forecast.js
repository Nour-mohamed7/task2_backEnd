
const request = require('request');

const forecast = (latitude, longitude, callback) => {
const url = `https://api.weatherapi.com/v1/current.json?key=132298ea4fce40f49a585047262506&q=${latitude},${longitude}`;

    request({ url, json: true }, (error, response) => {
        if (error) {
            callback("Unable to connect to weather service!", undefined);
        } else if (response.body.error) {
            callback("Error: " + response.body.error.message, undefined);
        } else {
callback(undefined, {
    location: response.body.location.name,
    condition: response.body.current.condition.text,
    temperature: response.body.current.temp_c
});        }


    }
    )}


    module.exports = forecast;

