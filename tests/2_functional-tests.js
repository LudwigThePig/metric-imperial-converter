/*
*
*
*       FILL IN EACH FUNCTIONAL TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]-----
*       (if additional are added, keep them at the very end!)
*/

var chaiHttp = require('chai-http');
var chai = require('chai');
var assert = chai.assert;
var server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {

  suite('Routing Tests', function() {
    
    suite('GET /api/convert => conversion object', function() {
      
      test('Convert 10L (valid input)', function(done) {
       chai.request(server)
        .get('/api/convert')
        .query({input: '10L'})
        .end(function(err, res){
          assert.equal(res.status, 200);
          assert.equal(res.body.initNum, 10);
          assert.equal(res.body.initUnit, 'l');
          assert.approximately(res.body.returnNum, 2.64172, 0.1);
          assert.equal(res.body.returnUnit, 'gal');
          done();
        });
      });
      
      test('Convert 32g (invalid input unit)', function(done) {
        chai.request(server)
          .get('/api/convert')
          .query({input: '10Litres'})
          .end(function(err, res){
            assert.equal(res.status, 200);
            assert.equal(res.body.initNum, 10);
            assert.equal(res.body.initUnit, 'invalid');
          });
        done();
      });
      
      test('Convert 3/7.2/4kg (invalid number)', function(done) {
        chai.request(server)
          .get('/api/convert')
          .query({input: '10.1.2l'})
          .end(function(err, res){
            assert.equal(res.status, 200);
            assert.equal(res.body.initNum, 'invalid');
            assert.equal(res.body.initUnit, 'l');
          });
        done();
      });  
      
      test('Convert 3/7.2/4kilomegagram (invalid number and unit)', function(done) {
        chai.request(server)
          .get('/api/convert')
          .query({input: '1.2.3Litres'})
          .end(function(err, res){
            assert.equal(res.status, 200);
            assert.equal(res.body.unit, 'invalid');
          });
        done();
      });
      
      test('Convert kg (no number)', function(done) {
        chai.request(server)
          .get('/api/convert')
          .query({input: 'gal'})
          .end(function(err, res){
            assert.equal(res.status, 200);
            assert.equal(res.body.initNum, 1);
            assert.equal(res.body.initUnit, 'gal')
          });
        done();
      });
      
    });

  });

});
