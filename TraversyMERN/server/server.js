//initialization
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

//database
const dbConfig = require('./config/keys').mongoURI;
const Item = require('./models/item_model');

//routes
const itemRoute = require('./routes/item_routes');
app.use('/items', itemRoute);

mongoose.connect(dbConfig, {useNewUrlParser: true})
    .then(() => console.log('MongoDB Connected.'))
    .catch((error) => console.log(error));

const port = process.env.PORT || 8000;

app.listen(port, () => console.log('Server is listening on port ' + port));