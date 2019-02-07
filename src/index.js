// index.js
const express = require('express');
const app = express();
app.get('/', (req, res) =>  {
   res.send('Hello World!');
});
app.listen(5000, () => console.log('Already prepared to receive a GET request on port 5000.'));
