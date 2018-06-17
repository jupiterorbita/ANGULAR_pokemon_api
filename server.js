var express = require("express");
var app = express();

const server = app.listen(5000);
console.log('listening on post: 5000');


app.use(express.static( __dirname + '/public/dist/public' ));

