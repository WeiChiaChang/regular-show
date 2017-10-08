'use strict';

var uniqueRandomArray = require('unique-random-array');
var names = require('./regular-show-names.json');

module.exports = uniqueRandomArray(names);
module.exports.names = names;