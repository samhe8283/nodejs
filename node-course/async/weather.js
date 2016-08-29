var request = require('request');
//var url = 'http://api.openweathermap.org/data/2.5/weather?APPID=60bfe06501e99d26bfffeef43a84c5cf&q=newyork&units=imperial';

module.exports = function(location,callBack){
	var url =encodeURIComponent('http://api.openweathermap.org/data/2.5/weather?APPID=60bfe06501e99d26bfffeef43a84c5cf&q=+lacation+&units=imperial');
	if(!location)
	{
		callBack('can\'t find location');
	}
    request({
	    url: url,
	    json: true
    }, function (error, response, body) {
	if (error) {
		callBack('Unable to fetch weather.');
	} else {
		 //console.log(JSON.stringify(body, null, 4));
		//It's 77.77 in Philadelphia!
		callBack(body);
	}
});

}