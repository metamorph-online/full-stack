const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;


const app = express();

//clientid = 431497791297-8gp911q3160qod51fhih90n7flvkimth.apps.googleusercontent.com
//client secret = MSk3AYC19M_j2dHo6UbffneP
passport.use(new GoogleStrategy());

const PORT = process.env.PORT || 5000;

app.listen(PORT);