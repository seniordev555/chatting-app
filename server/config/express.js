import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compress from 'compression';
import methodOverride from 'method-override';
import helmet from 'helmet';
import cors from 'cors';
import passport from 'passport';
import strategies from './passport';
import config from './index';
import routes from '../api/routes/v1';
import error from '../api/middlewares/error';

const app = express();

app.use(logger(config.env === 'development' ? 'dev' : 'combined'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(compress());
app.use(methodOverride());

app.use(helmet());

app.use(cors());

app.use(passport.initialize());
passport.use('jwt', strategies.jwt);

app.use('/v1', routes);

app.use(error.converter);
app.use(error.notFound);
app.use(error.handler);

export default app;
