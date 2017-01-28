var express = require('express');
var app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    var response = {};

    console.log(req.connection)

    var ipaddress = req.connection.remoteAddress;
    response["ipaddress"] = ipaddress;

    var os = req.headers['user-agent'];
    response["software"] = os.substring(os.indexOf('(')+1, os.indexOf(')'));

    var language = req.headers['accept-language'];
    response["language"] = language.split(',')[0];

    res.send(response);
});

// use process.env.PORT for compatibility with heroku
app.listen(process.env.PORT || 3000);
