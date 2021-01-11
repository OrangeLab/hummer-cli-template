package com.didi.hummer.template;

import com.didi.hummer.HummerActivity;
import com.didi.hummer.adapter.navigator.NavPage;

public class MainActivity extends HummerActivity {

    @Override
    protected NavPage getPageInfo() {
        return new NavPage("HelloWorld.js");
//        return new NavPage("/sdcard/HelloWorld.js");
//        return new NavPage("http://xxx.xxx.xxx.xxx:8000/HelloWorld.js");
    }
}
