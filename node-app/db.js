const mongoose = require('mongoose');

// MongoDB connection string with your credentials and database name
const uri = 'mongodb+srv://aleksander:vfr4eszaq1@cluster0.jgxw19c.mongodb.net/diploma';

async function run() {
  try {
    // Connect to MongoDB
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Check if the connection was successful
    if (mongoose.connection.readyState === 1) {
      console.log("You successfully connected to MongoDB!");
    } else {
      console.error("Failed to connect to MongoDB.");
    }
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  } finally {
    // Close the connection when done
    mongoose.connection.close();
  }
}

run();
