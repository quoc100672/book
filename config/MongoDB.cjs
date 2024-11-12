// config/MongoDB.cjs
const mongoose = require('mongoose');

const mongoURL = 'mongodb+srv://len71231:XTcfnHl8Lvf9FA2C@cluster0.dmz6c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(mongoURL, { })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

module.exports = mongoose;


