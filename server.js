// Imports
const path = require('path');
const cors = require('cors');
const socket = require('socket.io');
const mongoose = require('mongoose');
const helmet = require('helmet');
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const passportSetup = require('./config/passport');

// import routes
const adsRoutes = require('./routes/ads.routes');
const userRoutes = require('./routes/user.routes');

const app = express();
app.use(helmet());
// middleware for diferent ports client and server
app.use(cors());

// init session mechanism
app.use(session({ secret: 'anything' }));

// init passport
app.use(passport.initialize());
app.use(passport.session());

const server = app.listen('3030', () => {
  console.log('Server is running on port: 3030');
});

const io = socket(server)

app.use(express.static(path.join(__dirname, '/public')))
// Serve static files from the React app
app.use(express.static(path.join(__dirname, '/client/build')))
app.use(express.urlencoded({ extended: true }));   // x-www-form-urlencoded
app.use(express.json());    // form-data JSON format

app.use((req, res, next) => {
	req.io = io
	next()
})

app.use('/api', adsRoutes); // add ads routes to server
app.use('/api', userRoutes); // add user routes to server

// connects our backend code with the database
const NODE_ENV = process.env.NODE_ENV;
let dbUri = '';

if(NODE_ENV === 'production') dbUri = `mongodb+srv://karollion:${process.env.DB_PASS}@cluster0.pbd1wk2.mongodb.net/NoticeBoardDB?retryWrites=true&w=majority`;
else if(NODE_ENV === 'test') dbUri = 'mongodb://0.0.0.0:27017/NoticeBoardDBtest';
else dbUri = 'mongodb://0.0.0.0:27017/NoticeBoardDB';

mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to the database');
});
db.on('error', err => console.log('Error ' + err));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '/client/build/index.html'))
})

app.use((req, res) => {
	res.status(404).json({ message: 'Not found...' })
})

io.on('connection', socket => {
	console.log('New client' + socket.id)
})

module.exports = server;