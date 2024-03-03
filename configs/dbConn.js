const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE, {
      // useUnifiedTopology: true,
      // useNewUrlParser: true,
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectDB;
