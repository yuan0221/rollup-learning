(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.name = {}));
})(this, (function (exports) { 'use strict';

	const sum = (a, b) => a + b;

	exports.sum = sum;

}));
