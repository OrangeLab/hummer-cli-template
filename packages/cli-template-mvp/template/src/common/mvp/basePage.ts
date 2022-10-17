import {Hummer, View} from "@hummer/hummer-front";
import {BasePagePresenter} from "./basePagePresenter";
import {IPage} from "./iPage";

/**
 * author      : coffer
 * date        : 2022/5/26
 * description : 抽象页面，Typescript 的泛型在引用时，必须要指明具体的基本类型，后面的T 是约束自定义解析从别的页面返回的数据，避免数据转换异常
 * Reviewer    :
 */

export abstract class BasePage<P extends BasePagePresenter<any>, T extends any> extends View implements IPage<View> {
    mPresenter: P

    constructor() {
        super();
        this.mPresenter = this.createPresenter()
        this.mPresenter.setPage(this)
        this.initStyle()
        this.initView()
        this.initData()
    }

    abstract createPresenter(): P

    /**
     * 这里可以将从Native端或者别的页面传来的数据进行转换成泛型数据
     * 建议大家将页面传输的数据放在params 中，因为params 是一个map对象，方便后续大家解析使用
     */
    getPageInfoData(): T {
        return Hummer.pageInfo.params
    }

    initStyle() {

    }

    initView() {

    }

    initData() {

    }

    /***** 下面都是Hummer 页面生命周期的监听 *****/
    onCreate() {
        // 页面创建
        this.mPresenter.onCreate()
    }

    onAppear() {
        // 页面显示
        this.mPresenter.onAppear()
    }

    onDisappear() {
        // 页面隐藏
        this.mPresenter.onDisappear()
    }

    onDestroy() {
        // 页面销毁
        this.mPresenter.onDestroy()
    }

    onBack(): boolean {
        // 页面返回事件
        // 返回true表示要拦截返回事件，不做页面关闭；
        // 返回false表示不做拦截，可以正常关闭页面。
        return this.mPresenter.onBack()
    }

    refreshUi() {
    }

    getPage(): View {
        // Page本质是一个View，这里让子Page返回自身
        return this
    }


}

