// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World\n');
// }).listen(3000, '127.0.0.1');
// console.log('Server running at http://127.0.0.1:3000/');


// var express = require('express'),
//     flowers = require('./routes/flower');

// var app = express();

// app.get('/flowers', flowers.findAll);
// app.get('/flowers/:id', flowers.findById);

// app.listen(3000);
// console.log('Listening on port 3000...');

var express = require('express'),
    flowers = require('./routes/flower');

var app = express();

app.configure(function () {
    app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser());
});


//app.get('/flowers', flowers.findAll);
app.get('/flowers', function (req, res) {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed
    
    flowers.findAll(req, res);
})


app.listen(3000);
console.log('Listening on port 3000...');





// app.get('/flowers/:id', flowers.findById);
// app.post('/flowers', flowers.addWine);
// app.put('/flowers/:id', flowers.updateWine);
// app.delete('/flowers/:id', flowers.deleteWine);
