// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Create a set of variables (hint: arrays of objects) for holding the reservation and waitlist data
var reservations = [];

// Get all reservations
app.get("/reservations", function(req, res) {
    res.json(reservations);
});
        
app.post("/api/tables", function(req, res) {

  var newReservation = req.body;

  //newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

  console.log(newReservation);

  reservations.push(newReservation);

  res.json(newReservation);
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
});