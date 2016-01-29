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
6. add code to your react-native js code
```javascript
import {Adjust, AdjustEnvironmentSandbox} from 'ReactNativeAdjustSdk';
Adjust.init({appToken: 'YOUTOKENHERE', environment: AdjustEnvironmentSandbox});
```

You can have to switch from AdjustEnvironmentSandbox to AdjustEnvironmentProduction when releasing your app to production.

If you use proguard check the official docs: https://github.com/adjust/android_sdk