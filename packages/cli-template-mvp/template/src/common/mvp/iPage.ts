import {IView} from "./iView";
import {View} from "@hummer/hummer-front";

/**
 * author      : coffer
 * date        : 2022/6/7
 * description :
 * Reviewer    :
 */
export interface IPage<T extends View> extends IView {
    getPage():T
}