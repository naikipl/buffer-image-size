'use strict';

var expect = require('expect.js');

var imageSize = require('..');

// If something other than a buffer or filepath is passed
describe('Invalid invocation', function () {

  describe('invalid type', function () {
    it('should throw', function() {
      expect(imageSize.bind(null, {})).to.throwException(function (e) {
        expect(e).to.be.a(TypeError);
        expect(e.message).to.be('expecting only a buffer as input');
      });
    });
  });
});


describe('.types property', function () {
  it('should expose supported file types', function() {
    expect(imageSize.types).to.eql(['bmp', 'cur', 'dds', 'gif', 'ico', 'jpg', 'png', 'psd', 'svg', 'webp']);
  });
});
