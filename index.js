const express = require('express');
const app = express();
const url = require('url');

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.get('/getImage', function (req, res) {
  res.sendFile('E:/PROJEKTER/temp-express-server/assets/kitten.jpeg');
});

app.get('/test', (req, res) => {
    console.log('/test got hit .. doing stuff (logging to DB)');

    console.log("Req:");
    console.dir(req);

    const response = "<h1> testing </h1>";

    res.send(response);
});

app.post('/add', (req, res) => {
  const theQuery = url.parse(req.url, true);
  console.log(theQuery);

  const response = `<p>things added</p><ul><li>${theQuery.query.firstName}</li><li>${theQuery.query.lastName}</li></ul>`;

  res.send(response);
});

app.listen(3000);