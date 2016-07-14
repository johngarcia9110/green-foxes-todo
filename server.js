var express = require('express');
var app = express();

var port = process.env.PORT || 4000;

app.listen(port, function() {
    console.log('app listening on ' + port);
});

app.use(express.static('public'));
