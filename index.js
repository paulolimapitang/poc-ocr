'use strict';

const controller = require('./controller');

const ocrScanner = async (event, context) => controller.ocrScanner(event, context);

module.exports = {
  ocrScanner,
};
