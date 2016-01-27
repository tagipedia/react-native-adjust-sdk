/**
 * @providesModule ReactNativeAdjustSdk
 * @flow
 */
'use strict';
type AdjustConfig = {appToken: string; environment: string; logLevel: string;}
type AdjustEvent = {token: string;};

var NativeReactNativeAdjustSdk = require('react-native').NativeModules.ReactNativeAdjustSdk;

export const AdjustEnvironmentSandbox = 'sandbox';
export const AdjustEnvironmentProduction = 'production';

/**
 * High-level docs for the ReactNativeAdjustSdk iOS API can be written here.
 */

export var ReactNativeAdjustSdk = {
    trackEvent(event:AdjustEvent) {
    },

    init(config:AdjustConfig) {
        NativeReactNativeAdjustSdk.initialize(config);
    }
}
