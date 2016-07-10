export function httpRequest(query) {

	const https = require("https");

	const options = {
		hostname: "dev.tescolabs.com",
		path: "/grocery/products/?query=chocolate&offset=1&limit=1",
		port: "443",
		method: "GET",
		headers: {
  			"Ocp-Apim-Subscription-Key": "fe5f1a7e8a874183a547af9bc296b5dd"
  		}
	};

	let req = https.request(options, (res) => {
		console.log(`STATUS: ${res.statusCode}`);
		console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
		res.setEncoding('utf8');
		res.on('data', (chunk) => {
		console.log(`BODY: ${chunk}`);
	});

	console.log(res);

	res.on('end', () => {
		console.log('No more data in response.')
		})
	});

	req.on('error', (e) => {
		console.log(`problem with request: ${e.message}`);
	});

	req.end();
}
