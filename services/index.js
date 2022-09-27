'use strict';

const scanService = require('./ocrScanner');

const ocrScanner = {
  scan: scanService().scan,
};

module.exports = ocrScanner;
