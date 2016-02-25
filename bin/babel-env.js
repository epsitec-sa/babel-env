'use strict';
/* global require */
/* global process */

var fs = require ('fs');
var path = require ('path');

var cwd = process.cwd ().replace (/\\/g, '/');
var suffix = '/node_modules/babel-env';

if (cwd.endsWith (suffix)) {
  var root = cwd.substr (0, cwd.length - suffix.length);
  var babelrc = fs.readFileSync (path.join (cwd, 'templates', '.babelrc'));
  fs.writeFileSync (path.join (root, '.babelrc'), babelrc);
}
