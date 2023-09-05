const mongoose = require('mongoose');

// MongoDB connection string with your credentials
const dbURL = 'mongodb+srv://aleksander:vfr4eszaq1@cluster0.jgxw19c.mongodb.net/your-database-name';

mongoose.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = mongoose;
