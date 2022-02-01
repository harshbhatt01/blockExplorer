const express = require('express');
const app = express();

//import dotenv
const dotenv = require('dotenv');
dotenv.config();

// Routes
const explorer = require('./routes/explorer');
app.use('/explorer', explorer); 

// start on port 3000
app.listen(3000, () => {
    console.log('listening on port 3000');
});