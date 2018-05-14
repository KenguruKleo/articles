const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config');
const routes = require('./routes');

const logger = require('./utils/logger');

/** worker */
function start() {
  const { APP_PORT } = config;

  const app = express();

  app.use(morgan('dev', { stream: logger }));
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  routes(app);

  app.listen(APP_PORT, () => {
    logger.info(`App is now running on http://localhost:${APP_PORT}, in process: ${process.pid}`);
  });
}

/** if load as script - start it */
if (require.main === module) {
  start();
}

module.exports = start;
