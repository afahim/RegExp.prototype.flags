'use strict';

var implementation = require('./implementation');

var supportsDescriptors = require('define-properties').supportsDescriptors;
var gOPD = Object.getOwnPropertyDescriptor;
var TypeErr = TypeError;

module.exports = function getPolyfill() {
	if (!supportsDescriptors) {
		throw new TypeErr('RegExp.prototype.flags requires a true ES5 environment that supports property descriptors');
	}
	if (/a/mig.flags === 'gim') {
		return gOPD(RegExp.prototype, 'flags').get;
	}
	return implementation;
};
