/**
 * @providesModule ReactNativeAdjustSdk
 * @flow
 */
'use strict';
type AdjustConfig = {appToken: string; environment: string; logLevel: string;}
type AdjustEvent = {token: string;};

var NativeReactNativeAdjustSdk = require('NativeModules').ReactNativeAdjustSdk;

/**
 * High-level docs for the ReactNativeAdjustSdk iOS API can be written here.
 */

var ReactNativeAdjustSdk = {
    trackEvent: function (event:AdjustEvent) {
    },
    init: function (config:AdjustConfig) {
        NativeReactNativeAdjustSdk.initialize(config);
    }
};

module.exports = ReactNativeAdjustSdk;
