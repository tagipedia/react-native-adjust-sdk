# Installation Android
1. `npm install https://github.com/dbasedow/react-native-adjust-sdk.git --save`
2. `rnpm link`
3. open your project's MainActivity.java and add ReactNativeAdjustSdk to the list in the getPackages method:
```java
    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
                new MainReactPackage(), new ReactNativeAdjustSdk());
    }
```
4. add permission to your apps manifest
```xml
<uses-permission android:name="android.permission.INTERNET" />
```
5. add INSTALL_REFERRER receiver (very important, without it install attributions will not work)
```xml
<receiver android:name="com.adjust.sdk.AdjustReferrerReceiver" android:exported="true">
        <intent-filter>
            <action android:name="com.android.vending.INSTALL_REFERRER" />
        </intent-filter>
</receiver>
```


If you use proguard check the official docs: https://github.com/adjust/android_sdk

# Installation iOS
1. `npm install https://github.com/dbasedow/react-native-adjust-sdk.git --save`
2. `rnpm link`
3. go to https://github.com/adjust/ios_sdk/releases and download the most up to date AdjustSdkStatic.framework.zip (the static part is important, otherwise you have to change your Deployment Target from 7 to 8)
4. open your project in XCode 
5. unzip the framework and open in Finder
6. drag AdjustSdk.framework into your XCode project

# Tracking Installs
Add this to your JavaScript code:
```javascript
import {Adjust, AdjustEnvironmentSandbox} from 'ReactNativeAdjustSdk';
Adjust.init({appToken: 'YOURAPPTOKEN', environment: AdjustEnvironmentSandbox});
```

# Tracking Events
```javascript
Adjust.trackEvent({token: 'EVENTTOKEN'});
```

The earlier you put it in the code the better. Before the initialization no events/installs are sent to Adjust.

**Important:** You have to switch from AdjustEnvironmentSandbox to AdjustEnvironmentProduction when releasing your app to production (the log output will remind you).
