var request = require('request');
var argv = require('yargs')
		  .command('location', 'enter your location', function(yargs){
			  yargs.options({
				  location:{
					  demand: true,
					  alias: 'l',
					  description:'enter location'
				  }
			  })
		  })
		  .argv;
var command= argv._[0];
//var url = 'http://api.openweathermap.org/data/2.5/weather?APPID=60bfe06501e99d26bfffeef43a84c5cf&q=newyork&units=imperial';
var weather =require('./weather.js');
var location= require('./location.js')

if(command==='location'){
	weather(argv.location, function(callBack){
			console.log(body.main.temp + '  ' + body.name)
	})
}

/*
location(function(location){
	console.log(location.city);
	console.log(location.loc)
})
*/
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