const config = require('./config'),
  app = require('./config/express'),
  mongoose = require('./config/mongoose');

mongoose.connect();

app.listen(config.port, config.host, () => {
  console.log('--');
  console.info('Chatting App');
  console.log();
  console.info(`Environment:       ${config.env}`);
  console.info(`Server:            ${config.host}:${config.port}`);
  console.log('--');
});

module.exports = app;
