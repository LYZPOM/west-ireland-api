var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


var auth = require('./controllers/auth');
var activity = require('./controllers/activity');
var checkAuthenticated = require('./services/checkAuthenticated');
var cors = require('./services/cors');

var stripe = require("stripe")("sk_test_klNA6PIueSqojjO45GrBAhyp");


//Middleware
app.use(bodyParser.json());
app.use(cors);

app.set("view engine", "pug");
app.use(require("body-parser").urlencoded({extended: false}));

//Requests
app.get('/api/activity', activity.get);

app.post('/auth/register', auth.register);

app.post("/api/charge", (req, res) => {
  console.log(" req :" + req.body.stripeToken);
  stripe.charges.create({
    amount: 1,
    currency: "eur",
    description: "Example charge",
    source: req.body.stripeToken,
  }, function(err, charge) {
    // asynchronously called
    console.log(" error :" + err + "charge :" + charge);
  });
});


//Connection
mongoose.connect("mongodb://lucyli:123456@ds151544.mlab.com:51544/west_ireland", function (err, db) {
    if (!err) {
        console.log("we are connected to mongo");
    }
})

var server = app.listen(process.env.PORT || 5000, function () {
    console.log('listening on port ', server.address().port)
})
