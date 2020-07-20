"use strict";

var _express = _interopRequireDefault(require("express"));

var _homeController = _interopRequireDefault(require("../controllers/homeController"));

var _webhookController = _interopRequireDefault(require("../controllers/webhookController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

const initWebRoutes = app => {
  router.get('/', _homeController.default.getHomePage);
  router.get('/webhook', _webhookController.default.getWebhook);
  router.post('/webhook', _webhookController.default.postWebhook);
  app.use('/', router);
  app.use(_express.default.static('public'));
};

module.exports = initWebRoutes;