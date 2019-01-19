'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  app.route('/', (req, res)=>{
    res.sendFile(process.cwd() + '/views/index.html')
  });
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res, next){

    const input = req.query.input;
    
    const num = convertHandler.getNum(input.body);
    const unit = convertHandler.getUnit(input.body);
    
    res.body = {};
    res.body.initNum = num;
    res.body.initUnit = unit;

  });

};
