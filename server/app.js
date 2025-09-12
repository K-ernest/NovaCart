// ......
const express = require('express');
const path = require('path');

// express app
const app = express();

// listen for requests
app.listen(8080);

// register view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// home page route
// app.get('/', (req, res) => {
//   res.render('index');
// });


// exporting app
// module.exports = app;