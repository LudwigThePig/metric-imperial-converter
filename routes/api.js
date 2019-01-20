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
    
    if (res.body.initNum !== 'invalid' && res.body.initUnit !== 'invalid'){
      res.body.returnNum = convertHandler.convert(num, unit);
      res.body.returnUnit = convertHandler.getReturnUnit(unit);
      res.body.string = convertHandler.getString(num, unit, res.body.returnNum, res.body.returnUnit);
    }
    
    next()
  }, function(req, res){
    let response;
    if (res.body.initNum === 'invalid' && res.body.initUnit === 'invalid'){
      response = Object.assign({}, res.body, {string: 'Invalid Number and Unit'});
    } else if (res.body.initNum === 'invalid'){
      response = Object.assign({}, res.body, {string: 'Invalid Number Input'});
    } else if (res.body.initUnit === 'invalid'){
      response = Object.assign({}, res.body, {string: 'Invalid Number and Unit'});
    } else {
      response = {
        initNum: res.body.initNum,
        initUnit: res.body.initUnit,
        returnNum: res.body.returnNum,
        returnUnit: res.body.returnUnit,
        string: res.body.strinig
      }
    }
    res.status(200).json(response);
  });

};
