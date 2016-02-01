package de.danielbasedow.reactnativeadjustsdk;

import com.adjust.sdk.Adjust;
import com.adjust.sdk.AdjustConfig;
import com.adjust.sdk.AdjustEvent;
import com.adjust.sdk.LogLevel;
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
        if (config.hasKey("logLevel") && !config.isNull("logLevel")) {
            cfg.setLogLevel(LogLevel.valueOf(config.getString("logLevel").toUpperCase()));
        }
        Adjust.onCreate(cfg);
    }

    @ReactMethod
    public void trackEvent(ReadableMap event) {
        AdjustEvent e = new AdjustEvent(event.getString("token"));
        Adjust.trackEvent(e);
    }
}
