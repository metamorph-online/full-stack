const express = require('express');
const mongoose = require('mongoose');
require('./services/passport');
const authRouts = require('./routes/authRoutes');
const keys = require('./config/keys');

mongoose.connect(keys.mongoURI);

const app = express();


authRouts(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);