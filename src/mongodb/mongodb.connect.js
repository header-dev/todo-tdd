const mongoose = require('mongoose');

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
  } catch (error) {
    console.error('Error connecting to mongodb');
    console.error(err);
  }
};

module.exports = { connect };
