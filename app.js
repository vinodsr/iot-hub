var express = require("express");
var r = require('rethinkdb');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json({
  type: "*/*"
}));


// install checks
require("./lib/init");

require("./lib/routes").init(app);


app.listen(3000);
