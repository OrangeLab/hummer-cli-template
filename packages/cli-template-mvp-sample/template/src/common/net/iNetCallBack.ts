/**
 * author      : coffer
 * date        : 2022/5/19
 * description :
 * Reviewer    :
 */

export interface INetCallBack {
    /**
     * 网络请求成功
     * @param data 数据
     * @param performer 调用域
     */
    onSuccess(data: any,performer:any)

    /**
     * 网络请求失败
     * @param performer 调用域
     */
    onFailure(performer:any)
}