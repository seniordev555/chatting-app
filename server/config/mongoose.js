const mongoose = require('mongoose');
const config = require('./index');

Promise = require('bluebird'); // eslint-disable-line no-global-assign

mongoose.Promise = Promise;

mongoose.connection.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
  process.exit(-1);
});

if (config.env === 'development') {
  mongoose.set('debug', true);
}

exports.connect = () => {
  const options = {
    autoIndex: false,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
    poolSize: 10,
    bufferMaxEntries: 0,
  };
  mongoose.connect(config.mongo.uri, options);
};
