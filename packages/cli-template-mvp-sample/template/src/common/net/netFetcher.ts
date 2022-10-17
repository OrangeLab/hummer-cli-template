import {INetCallBack} from "./iNetCallBack";
import {Request} from "@hummer/hummer-front";

/**
 * author      : coffer
 * date        : 2022/5/19
 * description : 网络请求辅助类
 * Reviewer    :
 */

export class NetFetcher {
    /**
     * 使用Hummer提供的 GET 请求
     * @param url 接口地址
     * @param listener 回调接口
     * @param performer 调用者
     * @param param 请求参数，可以为空
     * @param header 请求头信息
     */
    useHummerForGet(url: string, listener: INetCallBack, performer: any,
                    param?: Map<string, any>, header?: Map<string, any>) {
        let request = new Request()
        request.url = url
        request.param = param
        request.method = 'GET'
        request.send((response) => {
            if (response.status == 200) {
                // 请求成功
                listener.onSuccess(response.data, performer)
            } else {
                // 请求失败
                listener.onFailure(performer)
            }
        });
    }

    /**
     * 使用Hummer提供的 POST 请求
     * @param url 接口地址
     * @param listener 回调接口
     * @param performer 调用者
     * @param param 请求参数，可以为空
     * @param header 请求头信息，可以为空
     */
    useHummerForPost(url: string, listener: INetCallBack, performer: any,
                     param?: Map<string, any>, header?: Map<string, any>) {
        let request = new Request()
        request.url = url
        request.param = param
        request.method = 'POST'
        request.header = header
        request.send((response) => {
            if (response.status == 200) {
                // 请求成功
                listener.onSuccess(response.data, performer)
            } else {
                // 请求失败
                listener.onFailure(performer)
            }
        });
    }
}
