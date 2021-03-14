import { Router } from 'express';

const contactRoutes = Router();

const contacts = (router) => {
    router.use('/contacts', contactRoutes);

    contactRoutes.get('/', (req,res) => res.json({ message: 'success' }).status(200));
};


export default contacts;