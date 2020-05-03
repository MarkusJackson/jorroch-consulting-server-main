const http = require('http');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

const app = express();

/*
 * Add Middlewares
 *
 * Here we cann add Authentification in e.g.
 */
app.use(cors());

// BodyParser
app.use(bodyParser.json());

// Routes
const server_router = require('./src/server/routes');
const todo_app_router = require('./src/apps/todo/routes');
app.use(server_router);
app.use('/app/todo', todo_app_router);

// Others
app.use('/config', () => {
	console.log('This will always be executed, when the config is called');
});

/*
 * Connect to DB
 */
mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true, useNewUrlParser: true }, () => {
	console.log('Conntected to mongoDb.');
});

/*
 * Start listening
 */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
