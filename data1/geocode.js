const request = require('request');

const geocode = (address, callback) => {

    const geocodeUrl = "https://api.geoapify.com/v1/geocode/search?text=" + address + "&apiKey=79ec50d90e194873ba7df4530c293455";

    request({ url: geocodeUrl, json: true }, (error, response) => {

        if (error) {
            callback("Unable to connect to geocode service!", undefined);

        } else if (response.body.features.length === 0) {
            callback("Unable to find location!", undefined);

        } else {

            const latitude = response.body.features[0].properties.lat;
            const longitude = response.body.features[0].properties.lon;

            callback(undefined, {
                latitude,
                longitude
            });
        }

    });

};

module.exports = geocode;