package de.danielbasedow.reactnativeadjustsdk;

import com.adjust.sdk.Adjust;
import com.adjust.sdk.AdjustConfig;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;

public class AdjustManager extends ReactContextBaseJavaModule {
    public AdjustManager(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "ReactNativeAdjustSdk";
    }

    @ReactMethod
    public void initialize(ReadableMap config) {
        String token = config.getString("appToken");
        String environment = config.getString("environment");
        AdjustConfig cfg = new AdjustConfig(this.getReactApplicationContext(), token, environment);
        Adjust.onCreate(cfg);
    }
}
