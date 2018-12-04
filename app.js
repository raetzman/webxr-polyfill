var express = require('express');
var app = express();

app.use(express.static(__dirname+'/site'));

app.get('/', function (req, res) {
  res.sendFile(__dirname+'/site/index.html');
  console.log(__dirname);
});

app.listen(3800, function () {
  console.log('Example app listening on port 3800!');
});