import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import routes from '../api/index.js';

const expressLoader = (app) => {
    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());

    app.use('/api', routes());
};

export default expressLoader;