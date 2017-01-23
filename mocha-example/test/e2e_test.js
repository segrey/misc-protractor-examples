var chai = require('chai')
  , chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

describe('Protractor Demo App', function () {
  it('has "first" element', function () {
    browser.get('http://juliemr.github.io/protractor-demo/');
    var firstNumber = element(by.model('first'));
    expect(firstNumber).to.be.defined;
  });
});
