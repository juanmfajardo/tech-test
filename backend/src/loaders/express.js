import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';

import routes from '../api/index.js';
import errorController from '../api/controllers/errors.js';

const expressLoader = (app) => {
    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(cors());

    app.use('/api', routes());

    app.use(errorController);
};

export default expressLoader;
