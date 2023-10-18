const connectDB = require('./db');
const User = require('./models/User');
const Todo = require('./models/Todo');

module.exports = {connectDB, User,Todo};