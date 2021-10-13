const express = require('express');
const axios = require('axios');
const path = require("path");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname, '../dist')));

// app.get('/', () => {
//   console.log('Hello!');
// })

app.listen(process.env.PORT || port, () => {
  console.log(`Listening on port ${process.env.PORT || port}`);
});