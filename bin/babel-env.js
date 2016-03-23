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

  var regex = /\r\n/g;
  var newline = '\n';
  if (process.platform === 'win32') {
    regex = /[^\r]\n/g;
    newline = '\r\n';
  }

  fs.writeFileSync (path.join (root, '.babelrc'), babelrc.toString ().replace (regex, newline));
}
