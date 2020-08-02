import { reqserver } from '../../../api/index';
import * as actionType from './constants.js';

export const getServerLeftRightData = () => {
    return (dispatch) => {
        reqserver().then((res) => {
            if (res.data.success) {
                dispatch(changeServerLeftRightData(res.data.data))
            } else {
                console.log("失败", res);
            }
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