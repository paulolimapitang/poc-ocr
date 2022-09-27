'use strict';

const tesseract = require("../../commons/tesseract");

const scanService = () => {
  const scan = async ({ image }) => {    
    
    tesseract(image);  

    return {
      text: 'Hello World',
    }
  }

  return { 
    scan,
  }
};

module.exports = scanService;
