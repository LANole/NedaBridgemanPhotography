var express = require('express');
var path = require('path');

var app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.all('/', function(req, res) {			    
    res.sendFile('index.html', { root: 'public'});
});

app.listen(8080, function () {
  console.log("I'm listening...");
})