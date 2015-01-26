/*!
 * arr-reduce <https://github.com/jonschlinkert/arr-reduce>
 *
 * Copyright (c) 2015 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var isNumber = require('is-number');

module.exports = reduce;

function reduce(arr, cb, initial) {
  // idea for args length from github.com/mout/mout
  var init = arguments.length > 2;
  if (arr == null) {
    if (init) {
      return initial;
    } else {
      throw new Error('arr-reduce expects an array or initial value');
    }
  }

  var len = arr.length;
  var res = initial;
  var i = 0;

  if (!arr.length) return initial;

  for (var i = 0; i < len; i++) {
    if (!init) {
      res = arr[i];
      init = true;
    } else {
      res = cb(res, arr[i], i, arr);
    }
  }

  return res;
}
