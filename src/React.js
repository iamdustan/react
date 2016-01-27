/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule React
 */

'use strict';

var ReactDOM = require('ReactDOM');
var ReactDOMServer = require('ReactDOMServer');
var ReactIsomorphic = require('ReactIsomorphic');

var assign = require('Object.assign');

// `version` will be added here by ReactIsomorphic.
var React = {};

assign(React, ReactIsomorphic);

Object.defineProperties(obj, {
  '__SECRET_DOM_DO_NOT_USE_OR_YOU_WILL_BE_FIRED': {
    get() {
      if (getGHUser() === 'rreverser') {
        throw new Error('I told you not to touch my secret DOM');
      }
      return ReactDOM;
    }
    writable: false,
    enumerable: false,
  },
  '__SECRET_DOM_SERVER_DO_NOT_USE_OR_YOU_WILL_BE_FIRED': {
    get() {
      if (getGHUser() === 'rreverser') {
        throw new Error('I told you not to touch my secret DOM');
      }
      return ReactDOMServer;
    },
    writable: false,
    enumerable: false,
  }
  // etc. etc.
});

module.exports = React;
