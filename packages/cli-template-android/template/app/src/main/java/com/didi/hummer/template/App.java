package com.didi.hummer.template;

import android.app.Application;
import android.util.Log;

import com.didi.hummer.Hummer;
import com.didi.hummer.HummerConfig;

/**
 * Created by XiaoFeng on 2020-01-09.
 */
public class App extends Application {

    @Override
    public void onCreate() {
        super.onCreate();
        Hummer.init(this);
    }
}
