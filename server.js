var http = require('http');
var swig  = require('swig');

http.createServer(function (req, res) {
    console.log('Got request for ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(swig.renderFile('/swig/Intro.html', {
        pagename: 'awesome people',
        authors: ['Paul', 'Jim', 'Jane']
    }));
}).listen(process.env.PORT);
