import {Image, Input, Navigator, Text, View} from "@hummer/hummer-front";
import {Color} from "../resource/color/color";
import {ImagePathUtil} from "../resource/drawable/imagePathUtil";
import {CallBack} from "../interface/callBack";
/**
 * author      : coffer
 * date        : 2022/5/23
 * description :
 * Reviewer    :
 */

export class TitleBarView extends View{
    menuView:Image
    titleView:Text
    inputView:Input
    mCallBack:CallBack
    mCaller:any
    constructor() {
        super();
        this.style = {
            flexDirection: 'row',
            width: '100%',
            height: 60,
            alignItems: 'center',
            backgroundColor:Color.hummer_99
        }

        let backView = new Image();
        backView.style = {
            width: 24,
            height: 24,
            marginLeft: 16,
            resize: 'contain',
        }
        backView.src = ImagePathUtil.back;
        backView.addEventListener('tap', event => {
            Navigator.popPage()
        })

        this.titleView = new Text();
        this.titleView.style = {
            fontSize: 18,
            textAlign: 'center',
            flexGrow: 1,
            color: Color.hummer_color_common_white
        }

        this.menuView = new Image();
        this.menuView.style = {
            width: 24,
            height: 24,
            marginRight: 20,
            resize: 'contain',
        }
        this.menuView.addEventListener('tap', event => {
            if (this.mCallBack != null && this.mCaller != null){
                this.mCallBack.callBack(this.mCaller)
            }
        })

        this.appendChild(backView);
        this.appendChild(this.titleView);
        this.appendChild(this.menuView);
    }

    setMenuImage(src:string){
        this.menuView.src = src
    }

    setCustomRightView(view:View){
        this.replaceChild(view,this.menuView)
    }

    setTitleText(str:string){
        this.titleView.text = str
    }

    /**
     *
     * @param caller:调用域
     * @param callBack 回调
     */
    setMenuCallBack(caller:any,callBack:CallBack){
        this.mCaller = caller
        this.mCallBack = callBack
    }

    setUseInput(tip:string){
        this.inputView = new Input();
        this.inputView.placeholder = tip
        this.inputView.style = {
            fontSize: 18,
            textAlign: 'center',
            flexGrow: 1,
            marginLeft:40,
            marginRight:5,
            textAlign:'left',
        }
        this.inputView.focused = true
        this.replaceChild(this.inputView,this.titleView)
    }
}