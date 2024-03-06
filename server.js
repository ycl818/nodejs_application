const dotenv = require('dotenv');

process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: './config.env' });
const mongoose = require('mongoose');
const connectDB = require('./configs/dbConn');

connectDB();

const app = require('./app');

// mongoose
//   .connect(process.env.DATABASE, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//   })
//   .then((con) => {
//     console.log('DB connection successful!');
//   });

const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`app running on port ${port}...`);
// });

mongoose.connection.once('open', () => {
  console.log('Connected to 線上版 mongoDB');
});

const server = app.listen(port, () =>
  console.log(`Server running on port ${port} http://localhost:${port}`),
);
///

process.on('unhandledRejection', (err) => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
