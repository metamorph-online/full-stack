const express = require('express');
require('./services/passport');
const authRouts = require('./routes/authRoutes');

const app = express();


authRouts(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);