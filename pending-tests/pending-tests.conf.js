exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['pending-test.js'],
  capability: {
    browserName: 'chrome'
  }
};
