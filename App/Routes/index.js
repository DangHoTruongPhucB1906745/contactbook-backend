import ContactRouter from './ContactRouter.js';
import express from 'express';

const Router = express.Router();

Router.use('/contacts', ContactRouter);

export default Router;



