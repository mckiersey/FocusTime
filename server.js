


// SERVER



const express = require('express');
const app = express();
const port = 1000;
const path = require('path');
const routes = require('./routes.js');
const bodyParser = require('body-parser')

const { DateTime } = require("luxon");

const cors = require('cors'); // From bookshelf

// Using static CSS/JS etc.
app.use(express.static(__dirname));




// middlewear
// Setting the view engine
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.static("public"));

// Add body parser for routes.js file
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));




//start the server
const server = app.listen(port, (error) => {
    if (error) return console.log(`** SERVER ERROR: ${error}`);

    console.log(`Server is running on port: ${server.address().port}`);

});

routes(app)