var player = require('play-sound')({})
var express = require('express');
var app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/play', function (req, res, next) {
  player.play('shout.mp3', next)
  res.send('quieting the dogs.');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});