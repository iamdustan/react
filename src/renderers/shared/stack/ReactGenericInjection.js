/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactGenericInjection
 * @flow
 */
'use strict';

var EventPluginHub = require('EventPluginHub');
var EventPluginUtils = require('EventPluginUtils');
var ReactComponentEnvironment = require('ReactComponentEnvironment');
var ReactEmptyComponent = require('ReactEmptyComponent');
var ReactHostComponent = require('ReactHostComponent');
var ReactUpdates = require('ReactUpdates');
var ReactNativeReconcileTransaction = require('ReactNativeReconcileTransaction');

module.exports = {
  Component: ReactComponentEnvironment.injection,
  EmptyComponent: ReactEmptyComponent.injection,
  EventPluginHub: EventPluginHub.injection,
  EventPluginUtils: EventPluginUtils.injection,
  HostComponent: ReactHostComponent.injection,
  Updates: ReactUpdates.injection,

  // this is just to pass through a generic reconcile transaction method
  ReconcileTransaction: ReactNativeReconcileTransaction,
};

