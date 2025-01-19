const express = require('express');
const mongoose = require('mongoose');

//Initialize the app and set the port
const app = express();
const PORT = process.env.PORT || 3001;

//Middleware
app.search(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use(require('./routes'));

//Connect to the MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/socialNetworkDB', {  //this can and should be set up to pull from the .env file
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//Log Mongo queries being executed
mongoose.set('debug', true);

//Start the server
app.listen(PORT, () => console.log('Server running on http://localhost:${PORT}'));



