const http = require('http');

const URL = process.argv[2];

http.get(
	URL,
	(response) => {
		response.on('data', (data) => {
			console.log(data.toString());
		})
	}
);