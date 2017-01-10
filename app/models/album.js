var https = require('https');

var headers = {
	"Content-Type": "application/json; charset=utf-8"
};

var options = {
	host: 'itunes.apple.com',
	path: '/search?term=sonunigam&limit=5',
	method: 'GET',
	headers: headers
};

function Album() {
	this.list = function( req, response ){
		var responseString = '';

		https.request(options, function(res) {
		  //console.log('STATUS: ' + res.statusCode);
		  //console.log('HEADERS: ' + JSON.stringify(res.headers));
		  var headers = res.headers;
		  Object.keys(headers).forEach(function(key) {
			  var val = headers[key];
			  response.setHeader(key,val);
		  });
		  res.on('data', function (chunk) {
		     response.write(chunk);
		  });
		  res.on('end', function (chunk) {
		    return response.end();
		  });
		}).end();
	}
}

module.exports = new Album();