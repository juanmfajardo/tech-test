import { Router } from 'express';

import contacts from './routes/contacts.js';

const router = Router();

const routes = () => {
    contacts(router);

    return router;
};

export default routes;
