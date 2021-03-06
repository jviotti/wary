
/*
The MIT License

Copyright (c) 2015 Juan Cruz Viotti. https://jviotti.github.io.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
 */
var Promise, fs, _;

_ = require('lodash');

Promise = require('bluebird');

fs = Promise.promisifyAll(require('fs'));


/**
 * @summary Map trough object values using a promise iterator
 * @function
 * @protected
 *
 * @param {Object} object - input object
 * @param {Function} iterator - promised iterator
 *
 * @returns {Promise<Object>} mapped object
 *
 * @example
 * utils.promiseMapValues
 * 	a: 1
 * 	b: 2
 * , (n) ->
 * 	Promise.try ->
 * 		return n * 3
 * .then (result) ->
 * 	console.log(result)
 */

exports.promiseMapValues = function(object, iterator) {
  return Promise.props(_.mapValues(object, iterator));
};
