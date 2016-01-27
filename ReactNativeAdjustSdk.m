#import "ReactNativeAdjustSdk.h"
#import <AdjustSdk/Adjust.h>

@implementation ReactNativeAdjustSdk

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(initialize: (NSDictionary *) config)
{
    ADJConfig *adjustConfig = [ADJConfig configWithAppToken:[config valueForKey:@"appToken"]
                                                environment:[config valueForKey:@"environment"]];
    NSString *logLevel = [config valueForKey:@"logLevel"];
    if (logLevel != nil) {
        if ([logLevel isEqualToString:@"verbose"]) {
            [adjustConfig setLogLevel:ADJLogLevelVerbose];
        } else if ([logLevel isEqualToString:@"debug"]) {
            [adjustConfig setLogLevel:ADJLogLevelDebug];
        } else if ([logLevel isEqualToString:@"info"]) {
            [adjustConfig setLogLevel:ADJLogLevelInfo];
        } else if ([logLevel isEqualToString:@"warn"]) {
            [adjustConfig setLogLevel:ADJLogLevelWarn];
        } else if ([logLevel isEqualToString:@"error"]) {
            [adjustConfig setLogLevel:ADJLogLevelError];
        } else if ([logLevel isEqualToString:@"assert"]) {
            [adjustConfig setLogLevel:ADJLogLevelAssert];
        }
    }

    [Adjust appDidLaunch:adjustConfig];
}

@end
