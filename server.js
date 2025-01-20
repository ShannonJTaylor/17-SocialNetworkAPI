const express = require('express');
const mongoose = require('mongoose');

//Initialize the app and set the port
const app = express();
const PORT = process.env.PORT || 3001;

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use('/api/users', require('./social-network-api/routes/api/userRoutes'));
app.use('/api/thoughts', require('./social-network-api/routes/api/thoughtRoutes'));

//Connect to the MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/socialNetworkDB', {  //this can and should be set up to pull from the .env file
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//Log Mongo queries being executed
mongoose.set('debug', true);

//Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));