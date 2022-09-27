'use strict';

const { createWorker } = require('tesseract.js');

const worker = createWorker();

const tesseract = async (image) => {
  await worker.load();
  await worker.loadLanguage('por');
  await worker.initialize('por');
  const { data: { text } } = await worker.recognize(image);
  console.log(text);
  await worker.terminate();
}

module.exports = tesseract;