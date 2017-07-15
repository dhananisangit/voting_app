var assert = require('assert');
var http = require('http');
var request = require('request')

// Use 'describe' to group together similar tests

describe('Page load', function(){

	it('should return the login if the url is correct', function(done){
		http.get('http://localhost:3000/', function(res) {
			assert.equal(200, res.statusCode);
			done();
		})
	});

	it('should not return the home page if the url is wrong', function(done){
		http.get('http://localhost:3000/ho', function(res) {
			assert.equal(404, res.statusCode);
			done();
		})
	});
});

describe('REST API', function(){

  it('should return list of fruits', function(done){
		http.get('http://localhost:3000/v1/getlist', function(res) {
			assert.equal(200, res.statusCode);
			done();
		})
	});

  it('should return users voted fruits', function(done) {
    request
      .post('http://localhost:3000/v1/fetchvotes')
      .send({'userID':1})
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) done(err);
        assert.equal(200, res.statusCode);
        done();
      });
  });

});
