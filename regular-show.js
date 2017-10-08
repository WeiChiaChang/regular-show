#!/usr/bin/env node
'use strict';

var meow = require('meow');
var regualrShow = require('./');

var cli = meow([
  'Examples',
  '  $ regular-show',
  '  Mordecai',
  '',
  '  $ regular-show --all',
  '  Rigby',
  '  Eileen',
  '  Muscle Man',
  '  ...',
  '',
  'Options',
  '  --all  Fetch all the names rather than a random name'
]);

console.log(cli.flags.all ? regualrShow.words.join('\n') : regualrShow());