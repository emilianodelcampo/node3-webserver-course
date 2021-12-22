const request = require('postman-request');

const myWeather = (location = 'Mendoza',callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=86b4899c92fdd1103dc9a011d349ae70&query=' + location
    request({url: url, json: true}, (error, { body })  => {
      if(error){
        callback('Unable to connect to weather service!', undefined)
    } else if (body.error) {
        callback('Unable to find location', undefined)
     } else{
        callback(undefined, body.current.weather_descriptions+ ' It is currently ' + body.current.temperature + 
        ". And it feels like: " + body.current.feelslike);
    }
         
 })
}
module.exports= myWeather

