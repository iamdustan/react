/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactStackReconciler
 * @flow
 */

'use strict';

var warning = require('warning');

var ReactReconciler = require('ReactReconciler');
var ReactInstanceMap = require('ReactInstanceMap');
var ReactInstrumentation = require('ReactInstrumentation');
var ReactUpdates = require('ReactUpdates');
var ReactUpdateQueue = require('ReactUpdateQueue');

var instantiateReactComponent = require('instantiateReactComponent');
var shouldUpdateReactComponent = require('shouldUpdateReactComponent');

warning(
  true,
  'ReactStackReconciler is an unsupported, private API and may break or be ' +
  'removed at any time.'
);

var ReactStackReconciler = {
  instantiateReactComponent: instantiateReactComponent,
  shouldUpdateReactComponent: shouldUpdateReactComponent,

  ReactReconciler: ReactReconciler,
  ReactInstanceMap: ReactInstanceMap,
  ReactInstrumentation: ReactInstrumentation,
  ReactUpdates: ReactUpdates,
  ReactUpdateQueue: ReactUpdateQueue,
};

module.exports = ReactStackReconciler;

