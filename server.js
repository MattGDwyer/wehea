var express = require('express');

var app = express();

var PORT = process.env.PORT || 3000;

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/theme/index.html");
  }
);

app.use(express.static(__dirname + "/theme"));
app.use(__dirname, express.static(__dirname + '/theme'));



app.listen(PORT, function() {
    console.log('Server is running on PORT:',PORT);
});