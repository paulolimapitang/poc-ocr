'use strict';

const scanController = require('./ocrScanner');

const ocrScanner = async (event, context) =>
  scanController.scan(event, context);

module.exports = {
  ocrScanner,
};
