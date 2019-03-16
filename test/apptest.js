const assert = require('chai').assert;
// const sayHello = require('../index').sayHello;
// const addNumbers = require('../index').addNumbers;
const app = require('../index');


sayHelloResult = app.sayHello();
addNumbersResult = app.addNumbers(5,15);

describe('App', function(){
	describe('sayHello', function(){
		it('app should return hello', function(){
		assert.equal(sayHelloResult, 'hello');
		});

		it('app should return type string', function(){
			assert.typeOf(sayHelloResult, 'string');
		});
	});
	
	describe('addNumbers', function(){
		
		it('app should be above 5', function(){
			assert.isBelow(addNumbersResult, 15);
		});

		it('app should be type number', function(){
			assert.typeOf(addNumbersResult, 'number');
		});
	});

});
