const mongoose = require('mongoose');

const connectDatabase = () => {
  mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
    // ... other options
  }).then((data) => {
    console.log(`Mongodb connected with server: ${data.connections[0].host}`);
  })
};

module.exports = connectDatabase;