// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static(__dirname + '/public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

app.get('/api/:date', function (req, res) {
  let dateInput = req.params.date;
  let isUnixInput = /^\d*$/.test(dateInput);
  console.log(isUnixInput);
  let newDate = isUnixInput ? new Date(Number(dateInput)) : new Date(dateInput);
  let unixTime = isUnixInput ? Number(dateInput) : newDate.valueOf();
  let utcTime = newDate.toUTCString();
  if (!isNaN(newDate) && newDate !== 'Invalid Date') {
    res.send({ unix: unixTime, utc: utcTime });
  } else {
    res.send({ error: 'Invalid Date' });
  }
});

app.get('/api/', function (req, res) {
  let dateInput = new Date();
  let newDate = new Date(dateInput);
  let unixTime = newDate.valueOf();
  let utcTime = newDate.toUTCString();
  res.send({ unix: unixTime, utc: utcTime });
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

//  Export the Express API
module.exports = app;
