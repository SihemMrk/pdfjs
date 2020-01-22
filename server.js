var express = require("express");
var app = express();

app.get("/", function(req, res) {
  res.sendfile(__dirname + "/index.html");
});

app.get("/pdf", function(req, res) {
  res.sendfile(__dirname + "/template-offre.pdf");
});

var port = 3000;
app.listen(port, function() {
  console.log("Listenning on port" + port);
});
