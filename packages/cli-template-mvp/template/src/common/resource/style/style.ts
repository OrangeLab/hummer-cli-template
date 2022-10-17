import {ButtonStyle, TextStyle} from "@hummer/hummer-front";
import {Color} from "../color/color";

/**
 * author      : coffer
 * date        : 2022/6/10
 * description :
 * Reviewer    :
 */

/*************  通用按钮样式 ，命名方式以Button作为开头 ************/
// 全局主要按钮 选中样式
const ButtonGlobalLightStyle: ButtonStyle = {
    backgroundColor: Color.hummer_99,
    width: '100%',
    height: 36,
    borderRadius: 18,
    fontSize: 14,
    textAlign: 'center',
    color: Color.hummer_color_common_white,
    flexShrink: 1,
}

// 全局主要按钮 未选中状态样式
const ButtonGlobalNormalStyle: ButtonStyle = {
    backgroundColor: Color.C_E6ECF1,
    width: '100%',
    height: 36,
    borderRadius: 18,
    fontSize: 14,
    textAlign: 'center',
    color: Color.hummer_color_common_bold_black,
    flexShrink: 1,
}

// 警告式按钮
const ButtonWarningStyle: ButtonStyle = {
    backgroundColor: Color.hummer_color_common_secondary_warning,
    width: '100%',
    height: 36,
    borderRadius: 18,
    fontSize: 14,
    textAlign: 'center',
    color: Color.hummer_color_common_white,
    flexShrink: 1,
}

// 边框是红线的警告式按钮
const ButtonWarningLineStyle: ButtonStyle = {
    backgroundColor: Color.hummer_color_common_white,
    width: '100%',
    height: 36,
    borderRadius: 18,
    fontSize: 14,
    textAlign: 'center',
    color: Color.hummer_color_common_secondary_warning,
    flexShrink: 1,
    borderColor: Color.hummer_color_common_secondary_warning,
    borderWidth: 1
}

// 次要按钮，边框是黑线
const ButtonMinorLineStyle: ButtonStyle = {
    backgroundColor: Color.hummer_color_common_white,
    width: '100%',
    height: 36,
    borderRadius: 18,
    fontSize: 14,
    textAlign: 'center',
    color: Color.hummer_color_common_gray_black,
    flexShrink: 1,
    borderColor: Color.hummer_color_common_gray_black,
    borderWidth: 1
}

/*************  通用文字样式 ，命名方式以Text作为开头 ************/

/**
 * DF-0
 * 导航标题
 * 字体大小：20sp；字体风格：BOLD
 */
const TextDF0Style: TextStyle = {
    fontWeight: 'bold',
    fontSize: 20,
    color: Color.hummer_color_common_bold_black,
    textAlign: 'center',
}

/**
 * DF-1
 * 大标题
 * 字体大小：18sp；字体风格：BOLD
 */
const TextDF1Style: TextStyle = {
    fontWeight: 'bold',
    fontSize: 18,
    color: Color.hummer_color_common_bold_black,
    textAlign: 'center',
}

/**
 * DF-2
 * 小标题
 * 字体大小：16sp；字体风格：BOLD
 */
const TextDF2Style: TextStyle = {
    fontWeight: 'bold',
    fontSize: 16,
    color: Color.hummer_color_common_bold_black,
    textAlign: 'center',
}

/**
 * DF-3
 * 常规内文
 * 字体大小：16sp；字体风格：NORMAL
 */
const TextDF3Style: TextStyle = {
    fontSize: 16,
    color: Color.hummer_color_common_bold_black,
    textAlign: 'center',
}

/**
 * DF-4
 * 二级内文1
 * 字体大小：14sp；字体风格：NORMAL
 */
const TextDF4Style: TextStyle = {
    fontSize: 14,
    color: Color.hummer_color_common_bold_black,
    textAlign: 'center',
}

/**
 * DF-5
 * 说明内文1
 * 字体大小：12sp；字体风格：BOLD
 */
const TextDF5Style: TextStyle = {
    fontSize: 12,
    fontWeight: 'bold',
    color: Color.hummer_color_common_bold_black,
    textAlign: 'center',
}

/**
 * DF-6
 * 说明内文2
 * 字体大小：12sp；字体风格：NORMAL
 */
const TextDF6Style: TextStyle = {
    fontSize: 12,
    color: Color.hummer_color_common_bold_black,
    textAlign: 'center',
}

/**
 * DF-7
 * 特大数字
 * 字体大小：36sp；字体风格：BOLD
 */
const TextDF7Style: TextStyle = {
    fontSize: 36,
    fontWeight:'bold',
    color: Color.hummer_color_common_bold_black,
    textAlign: 'center',
}

/**
 * DF-8
 * 大数字
 * 字体大小：24sp；字体风格：BOLD
 */
const TextDF8Style: TextStyle = {
    fontSize: 24,
    fontWeight:'bold',
    color: Color.hummer_color_common_bold_black,
    textAlign: 'center',
}

export const style = {
    ButtonGlobalLightStyle,
    ButtonGlobalNormalStyle,
    ButtonWarningStyle,
    ButtonWarningLineStyle,
    ButtonMinorLineStyle,
    TextDF0Style,
    TextDF1Style,
    TextDF2Style,
    TextDF3Style,
    TextDF4Style,
    TextDF5Style,
    TextDF6Style,
    TextDF7Style,
    TextDF8Style,
}
