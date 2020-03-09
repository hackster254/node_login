var http = require('http');

var hostname = '127.0.0.1';

var port = 3000;

var fs = require('fs');

fs.readFile('login.html', (err, html)=>{
		if (err) {
			throw err;
		}

		var server = http.createServer((req, res)=>{
		res.statusCode =200;
		res.setHeader('content-type', 'text/html');

		res.write(html);
		res.end('hello there');
		});

		server.listen(port, hostname, () =>{
			console.log('server connected on port 3000');

		});


});