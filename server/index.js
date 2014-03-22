var express = require('express');
var agSender = require('aerogear-sender-client').AeroGear;
var url = "https://hackergartenups-sblanc.rhcloud.com";

var settings = {
  applicationID: "applicationID",
  masterSecret: "masterSecret"
};

var app = express();

app.use(express.bodyParser());
app.use(app.router);
app.use(express.errorHandler());

app.post('/messages', function(req, res) {
  console.log(req.body);
  var message = {
    alert: req.body.message,
    sound: "default"
  };

  agSender.Sender(url).send(message, settings)
    .on("success", function(response) {
      console.log('success', response);
      res.send(response);
    })
    .on("error", function(err) {
      console.log('error', err);
      res.send(err);
    });
});

var port = process.env.PORT || 1414;
app.listen(port);
console.log('Express app started on port ' + port);