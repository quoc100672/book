// config/MongoDB.cjs
const mongoose = require('mongoose');

const mongoURL = 'mongodb://localhost:27017/book';
mongoose.connect(mongoURL, { })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

module.exports = mongoose;


