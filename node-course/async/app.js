var request = require('request');
var url = 'http://api.openweathermap.org/data/2.5/weather?APPID=60bfe06501e99d26bfffeef43a84c5cf&q=newyork&units=imperial';
var weather =require('./weather.js');
var location= require('./location.js')

weather(function(currentWeather){
	console.log(currentWeather);
})

location(function(location){
	console.log(location.city);
	console.log(location.loc)
})

/*request({
	url: url,
	json: true
}, function (error, response, body) {
	if (error) {
		console.log('Unable to fetch weather.');
	} else {
		 console.log(JSON.stringify(body, null, 4));
		//It's 77.77 in Philadelphia!
		//console.log('It\'s ' + body.main.temp + ' in ' + body.name + '!');
	}
});

console.log('After request!');
*/