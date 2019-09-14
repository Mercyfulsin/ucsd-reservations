var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var reservation = [
  {
    name: "Guillermo",
    phone: "555555555",
    email: "glara9@gmail.com  ",
    unique: "memo1"

  },
  {
    name: "francisco",
    phone: "555555555",
    email: "flara8@gmail.com  ",
    unique: "fla9"

  }
];

var waitList = [
  {
    name: "Luis",
    phone: "4444444444",
    email: "luis@gmail.com  ",
    unique: "luis8"
  }
]

app.get("/reservation", (req, res) => {
  res.sendFile(path.join(__dirname, "/reservation.html"));
});

app.get("/waitlist", (req, res) => {
  res.sendFile(path.join(__dirname, "/waitlist.html"));
});
// Displays Reservations
app.get("/api/tables", function (require, response) {
  let arrayObj = {
    reservation,
    waitList
  };
  return response.json(arrayObj);
});
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});



app.post("/api/reservation", function (require, response) {
  // require.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newReservation = require.body;

  if (reservation.length < 5) {
    reservation.push(newReservation);
    console.log(newReservation);
    response.json(newReservation);

  }
  else {
    waitList.push(newReservation);
    console.log(newReservation);
    response.json(newReservation)
  }
});

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});