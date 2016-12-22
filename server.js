'use strict';

var express = require('express');
var app = express();
var portNum = process.env.PORT || 3000;

// app.configure(function () {
    app.use(
        "/", //the URL throught which you want to access to you static content
        express.static(__dirname + '/public') //where your static content is located in your filesystem
    );
// });

console.log('Listening port ' + portNum);
app.listen(portNum);
