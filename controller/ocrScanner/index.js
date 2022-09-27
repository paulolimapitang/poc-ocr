'use strict';

const Stream = require('stream').Readable;
const formidable = require('formidable');
const ocrScanner = require('../../services');

const scan = async (event) => {
  try {

    let { body } = event;
    body = JSON.parse(body);

    const response = await ocrScanner.scan(body);
    
    // const form = new formidable.IncomingForm();
    // const stream = new Stream();

    // stream.push(event.body);
    // stream.headers = event.headers;

    // form.parse(stream, (err, fields, files) => {
    //   console.log({ fields, files })
    // })
    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (error) {
    return {
      statusCode: error.status || 500,
      body: `${error.message}`,
    };
  }
};

module.exports = { scan };
