const request = require("request");

const forecast = (latitude, longtitude, callback) => {
    const url =
        "https://api.openweathermap.org/data/2.5/onecall?lat=" +
        encodeURIComponent(latitude) +
        "&lon=" +
        encodeURIComponent(longtitude) +
        "&units=metric&appid=dd231fc73460cff09dded3dde15fd6a8";

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback("Unable to connect to weather service!", undefined);
        } else if (body.error) {
            callback("Unable to find location", undefined);
        } else {
            callback(
                undefined,
                body.current.weather[0].description +
                    ". It is currently " +
                    body.current.temp +
                    " degrees out there" +
                    ". There is " +
                    body.current.humidity +
                    "%" +
                    " chance of rain."
            );
        }
    });
};

module.exports = forecast;
