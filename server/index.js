var express = require('express');
var agSender = require('aerogear-sender-client').AeroGear;
var url = "https://your_ups_url";

var settings = {
 applicationID: "your_application_id",
 masterSecret: "your_master_secret"
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

//when using the OpenShift Cartdridge please use this instead
//var ipaddress  = process.env.OPENSHIFT_NODEJS_IP;
//var port    = parseInt(process.env.OPENSHIFT_NODEJS_PORT) || 8080;
//app.listen(port, ipaddress);

console.log('Express app started on port ' + port);