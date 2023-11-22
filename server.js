// Imports
const express = require('express');
const path = require('path')
const cors = require('cors')
const mongoose = require('mongoose');
const helmet = require('helmet');

// import routes
const adsRoutes = require('./routes/ads.routes');
const userRoutes = require('./routes/user.routes');

const app = express();
app.use(helmet());
// middleware for diferent ports client and server
app.use(cors());

const server = app.listen('3030', () => {
  console.log('Server is running on port: 3030');
});


app.use('/api', adsRoutes); // add ads routes to server
app.use('/api', userRoutes); // add user routes to server













app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '/client/build/index.html'))
})

app.use((req, res) => {
	res.status(404).json({ message: 'Not found...' })
})

module.exports = server;