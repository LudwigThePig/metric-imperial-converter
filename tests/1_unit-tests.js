/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

const chai = require('chai');
const assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

const convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
  suite('Function convertHandler.getNum(input)', function() {
    
    test('Whole number input', function(done) {
      const input = '32l';
      assert.equal(convertHandler.getNum(input), 32);
      done();
    });
    
    test('Decimal Input', function(done) {
      const input = '3.2L';
      assert.equal(convertHandler.getNum(input), 3.2);
      done();
    });
    
    test('Fractional Input', function(done) {
      const input = '4/4L';
      assert.equal(convertHandler.getNum(input), 1);
      done();
    });
    
    test('Fractional Input w/ Decimal', function(done) {
      const input = '3/.2L';
      assert.equal(convertHandler.getNum(input), 15);
      done();
    });
    
    test('Invalid Input (double fraction)', function(done) {
      const input = '4/4/4L';
      assert.equal(convertHandler.getNum(input), 'invalid')
      done();
    });
    
    test('No Numerical Input', function(done) {
      const input = "L"
      assert.equal(convertHandler.getNum(input), 1);
      done();
    }); 
    
  });
  
  suite('Function convertHandler.getUnit(input)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      const input = ['gal','l','mi','km','lbs','kg'];
      input.forEach(function(ele) {
        let input = 1 + ele;
        assert.equal(convertHandler.getUnit(input), ele);
      });
      done();
    });
    
    test('Unknown Unit Input', function(done) {
      const input = '24Liters'
      assert.equal(convertHandler.getUnit(input), 'invalid');
      done();
    });  
    
  });
  
  suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      const input = ['gal','l','mi','km','lbs','kg'];
      const expect = ['l','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
    
  });  
  
  suite('Function convertHandler.spellOutUnit(unit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      const input = ['gal','l','mi','km','lbs','kg'];
      const output = ['Gallons','Liters','Miles','Kilometers','Pounds','Kilograms'];
      input.forEach(function(ele, i){
        assert.equal(convertHandler.spellOutUnit(ele), output[i]);
      });
      done();
    });
    
  });
  
  suite('Function convertHandler.convert(num, unit)', function() {
    
    test('Gal to L', function(done) {
      const input = [5, 'gal'];
      const expected = 18.9271;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('L to Gal', function(done) {
      const input = [5, 'l'];
      const output = 1.32086;
      assert.approximately(convertHandler.convert(input[0], input[1]), output, 0.1);
      done();
    });
    
    test('Mi to Km', function(done) {
      const input = [3.1, 'mi'];
      const output = 5;
      assert.approximately(convertHandler.convert(input[0], input[1]), output, 0.1);
      done();
    });
    
    test('Km to Mi', function(done) {
      const input = [5, 'km'];
      const output = 3.1;
      assert.approximately(convertHandler.convert(input[0], input[1]), output, 0.1);
      done();
    });
    
    test('Lbs to Kg', function(done) {
      const input = [2.2, 'lbs'];
      const output = 1;
      assert.approximately(convertHandler.convert(input[0], input[1]), output, 0.1);
      done();
    });
    
    test('Kg to Lbs', function(done) {
      const input = [2, 'kg'];
      const output = 4.4;
      assert.approximately(convertHandler.convert(input[0], input[1]), output, 0.1);
      done();
    });
    
  });

});