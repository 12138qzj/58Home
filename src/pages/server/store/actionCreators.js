import { reqserver } from '../../../api/index';
import * as actionType from './constants.js';

export const getServerLeftRightData = () => {
    return (dispatch) => {

        console.log("成功进去-----------");

        reqserver().then((res) => {
            console.log("成功进去-+++++++++++++++");
            if (res.data.success) {
                console.log("成功.......", res);
                dispatch(changeServerLeftRightData(res.data.data))
            } else {
                console.log("失败", res);
            }
            // console.log("object",res);
        }).catch((e) => {
            console.log("服务页面数据请求错误！");
        })
    }

};

export const changeServerLeftRightData = (data) => {
    return {
        type: actionType.CHANGE_SERVER_DATA,
        data: data
    }
}