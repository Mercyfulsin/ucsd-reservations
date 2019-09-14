var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Create New Characters - takes in JSON input
app.post("/api/reservation", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newReservation = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegExpression Patterns later https://www.regexbuddy.com/regex.html
  ewReservation.routeName = ewReservation.name.replace(/\s+/g, "").toLowerCase();

  console.log(ewReservation);

  characters.push(ewReservation);
  res.json(ewReservation);
});


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });