import express from 'express';
import homeController from '../controllers/homeController';
import webhookController from '../controllers/webhookController';

const router = express.Router();

const initWebRoutes = (app) => {
  router.get('/', homeController.getHomePage);
  router.get('/webhook', webhookController.getWebhook);
  router.post('/webhook', webhookController.postWebhook);

  app.use('/', router);
  app.use(express.static('public'));
};

module.exports = initWebRoutes;
