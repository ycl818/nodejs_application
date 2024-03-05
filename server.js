const dotenv = require('dotenv');

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
  app.listen(port, () =>
    console.log(`Server running on port ${port} http://localhost:${port}`),
  );
});

///