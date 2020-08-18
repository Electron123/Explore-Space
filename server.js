const {createServer} = require("http");
const {readFileSync} = require("fs"); // imma use sync since this is not a real project

createServer( (req, res) => {
	let text;
	if(req.url == "/") {
		res.writeHead(200, {'Content-Type': 'text/html'});
		text = readFileSync(__dirname + "/index.html", "utf8");
	}
	else if(req.url == "/header.css") {
		res.writeHead(200, {'Content-Type': 'text/css'});
		text = readFileSync(__dirname + "/header.css", "utf8");
	}
	else if(req.url == "/footer.css") {
		res.writeHead(200, {'Content-Type': 'text/css'});
		text = readFileSync(__dirname + "/footer.css", "utf8");
	}
	else if(req.url == "/extra.css") {
		res.writeHead(200, {'Content-Type': 'text/css'});
		text = readFileSync(__dirname + "/extra.css", "utf8");
	}
	else if(req.url == "/container.css") {
		res.writeHead(200, {'Content-Type': 'text/css'});
		text = readFileSync(__dirname + "/container.css", "utf8");
	}
	else if(req.url == "/responsive.css") {
		res.writeHead(200, {'Content-Type': 'text/css'});
		text = readFileSync(__dirname + "/responsive.css", "utf8");
	}
	else if(req.url == "/images/header.jpg") { // this code is so unflexible but this is for testing so
		// shrug
		text = readFileSync(__dirname + "/images/header.jpg");
	}
	else if(req.url == "/images/planet.png") {
		text = readFileSync(__dirname + "/images/planet.png");
	}
	else {
		text="fuck";
	}


	res.write(text);
	res.end();
}).listen(8080);