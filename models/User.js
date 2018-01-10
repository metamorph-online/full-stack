const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create mongoose schema to create new table in the db
const userSchema =  new Schema({
	googleId: String
});

mongoose.model('users', userSchema);