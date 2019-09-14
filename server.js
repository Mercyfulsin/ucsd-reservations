var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());




app.get("/reservation", (req, res) => {
  res.sendFile(path.join(__dirname, "/reservation.html"));
});

app.get("/waitlist", (req, res) => {
  res.sendFile(path.join(__dirname, "/waitlist.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

// Create New Characters - takes in JSON input
app.post("/api/reservation", function (req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newReservation = req.body;
  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegExpression Patterns later https://www.regexbuddy.com/regex.html
  newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();
  console.log(newReservation);
  characters.push(newReservation);
  res.json(newReservation);
});

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});