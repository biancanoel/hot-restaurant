// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var reservations = [
    {
      name: "Sumi",
      phone: "555-1234",
      email: "sumi@gmail.com",
      id: 2000
    },
    {
      
      name: "Bianca",
      phone: "555-1236",
      email: "bianca@gmail.com",
      id: 2001
    }
  ];

  var waitlist = [
    {
      name: "David",
      phone: "555-1239",
      email: "david@gmail.com",
      id: 2006
    },
    {
      name: "Bayani",
      phone: "555-1237",
      email: "bayani@gmail.com",
      id: 2004
    }
  ];

  app.get("/", function (req,res ) {
        res.sendFile(path.join(__dirname, "home.html"));
  });

  app.get("/reserve", function (req,res ) {
    res.sendFile(path.join(__dirname, "make.html"));
});


app.get("/api/viewreservations", function (req,res) {
    return res.json(reservations);
});

app.get("/api/viewwaitlist", function (req,res) {
    return res.json(waitlist);
});

app.post("/api/new", function (req, res) {
    var newReservation = req.body;
    console.log(newReservation);

    if (reservations.length > 4) {
        waitlist.push(newReservation);
        console.log("Sorry, you are on the waitlist");
        return res.json(waitlist);
    } else {
        reservations.push(newReservation);
        console.log('Congrats, you have reserved a table!');
        return res.json(reservations);
    };
    
});





// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });