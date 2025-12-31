const sequelize = require('../db');
const User = require('./user');
const Flight = require('./flight');
const Booking = require('./booking');

// Export all models and the sequelize instance
module.exports = { sequelize, User, Flight, Booking };
