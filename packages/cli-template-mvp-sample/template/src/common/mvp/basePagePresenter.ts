import {IPage} from "./iPage";
import {View} from "@hummer/hummer-front";

/**
 * author      : coffer
 * date        : 2022/5/26
 * description : BasePageV2<any,any> 是Typescript 的泛型在引用时特有的语法。
 * Reviewer    :
 */

export abstract class BasePagePresenter<V extends IPage<View>> {

    mPage: V

    setPage(page: V) {
        this.mPage = page
    }

    onCreate() {
        // 页面创建

    }

    onAppear() {
        // 页面显示
    }

    onDisappear() {
        // 页面隐藏
    }

    onDestroy() {
        // 页面销毁
    }

    onBack(): boolean {
        // 页面返回事件
        // 返回true表示要拦截返回事件，不做页面关闭；
        // 返回false表示不做拦截，可以正常关闭页面。
        return false
    }

}