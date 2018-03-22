import config from './config';
import app from './config/express';
import mongoose from './config/mongoose';

mongoose.connect();

app.listen(config.port, config.host, () => {
  console.log('--');
  console.info('Chatting App');
  console.log();
  console.info(`Environment:       ${config.env}`);
  console.info(`Server:            ${config.host}:${config.port}`);
  console.log('--');
});

export default app;
