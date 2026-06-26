const request = require('request');

const url = "http://api.weatherapi.com/v1/current.json?key=132298ea4fce40f49a585047262506&q=Cairo&aqi=no"


const forecast= require('./data1/forecast.js')


const geocode = require('./data1/geocode.js')

const country = process.argv[2]

   geocode(country,(error,data)=>{

    if(error){
        return console.log(error)
    }

    forecast(data.latitude,data.longitude,(error,weatherData)=>{

        if(error){
            return console.log(error)
        }

        console.log("-------------------") ,
console.log("Country :",country) ,
console.log("Latitude :",data.latitude),
console.log("Longitude :",data.longitude) ,
console.log("Temperature :",weatherData.temperature+" °C"),
console.log("Condition :",weatherData.condition),
console.log("-------------------")

})


   })




