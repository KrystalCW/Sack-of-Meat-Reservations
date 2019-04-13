// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Star Wars Characters (DATA)
// =============================================================
let reservations = [
  {
    name: "Ryan",
    number: 5038300199,
    email: 'ryangrunest45@gmail.com',
    uniqueID: 1234
  }
];
let waitlist = [
  {
    name: 'asdf',
    number: 1234,
    email: 'riuahsdiug',
    uniqueID: 1234
  }
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, 'reserve.html'));
});
app.get("/api/tables", function(req, res) {

  return res.json(reservations);

// return res.json(false);
});
app.get('/api/waitlist', function(req, res) {
  return res.json(waitlist);
})

// Create New Characters - takes in JSON input
app.post("/api/tables", function(req, res) {
  var newres = req.body;
  console.log(newres);
  reservations.push(newres);
  res.json(newres);
});

app.post("/api/waitlist", function(req, res) {
  var newres = req.body;
  console.log(newres);
  waitlist.push(newres);
  res.json(newres);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
