var express = require('express');
var app = express();

app.use(express.static("./dist/lets-explore-sydney"));
app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: "./dist/lets-explore-sydney/"}
  );
  });
  app.listen(process.env.PORT || 8080);
