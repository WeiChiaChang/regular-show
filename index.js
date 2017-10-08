'use strict';

var uniqueRandomArray = require('unique-random-array');
var words = require('./regular-show-names.json');

module.exports = uniqueRandomArray(words);
module.exports.words = words;