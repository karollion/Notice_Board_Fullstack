// Imports
const path = require('path');
const cors = require('cors');
const connectToDB = require('./db');
const helmet = require('helmet');
const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose')

// import routes
const adsRoutes = require('./routes/ads.routes');
const authRoutes = require('./routes/auth.routes');

const app = express();
app.use(helmet());

// middleware for diferent ports client and server
if(process.env.NODE_ENV !== 'production') {
  app.use(
    cors({
      origin: ['http://localhost:3000'],
      credentials: true,
    })
  );
}

const server = app.listen(process.env.PORT || 3030, () => {
  console.log('Server is running on port: 3030');
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/client/build')));

// connect to DB
connectToDB()

app.use(express.urlencoded({ extended: true }));   // x-www-form-urlencoded
app.use(express.json());    // form-data JSON format

const sessionSecret = process.env.DB_SESSIONSECRET
app.use(session({
	secret: sessionSecret,
	store: MongoStore.create(mongoose.connection),
	resave: false,
	saveUninitialized: false,
	cookie: {
		secure: process.env.NODE_ENV == 'production',
	},
}));

// add routes
app.use('/api', adsRoutes); // add ads routes to server
app.use('/api/auth', authRoutes); // add auth routes to server

app.use((req, res) => {
	res.status(404).json({ message: 'Not found...' });
});

module.exports = server;