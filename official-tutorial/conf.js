// conf.js
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec1.js', 'spec2.js'],
  suites: {
    all: ['spec*.js'],
    spec_1: ['spec1.js']
  },
  // multiCapabilities: [{
  //   browserName: 'firefox'
  // }, {
  //   browserName: 'chrome'
  // }],
  capability: {
    browserName: 'chrome'
  }
};
