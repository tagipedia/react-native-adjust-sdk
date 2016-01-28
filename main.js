/**
 * @flow
 */
'use strict';
type AdjustConfig = {appToken: string; environment: string; logLevel: string;}
type AdjustEvent = {token: string;};

var NativeReactNativeAdjustSdk = require('react-native').NativeModules.ReactNativeAdjustSdk;

export const AdjustEnvironmentSandbox = 'sandbox';
export const AdjustEnvironmentProduction = 'production';

export const AdjustEnvironmentLogLevelVerbose = 'verbose';
export const AdjustEnvironmentLogLevelDebug = 'debug';
export const AdjustEnvironmentLogLevelInfo = 'info';
export const AdjustEnvironmentLogLevelWarn = 'warn';
export const AdjustEnvironmentLogLevelError = 'error';
export const AdjustEnvironmentLogLevelAssert = 'assert';

export var Adjust = {
    trackEvent(event:AdjustEvent) {
        NativeReactNativeAdjustSdk.trackEvent(event);
    },

    init(config:AdjustConfig) {
        NativeReactNativeAdjustSdk.initialize(config);
    }
};
