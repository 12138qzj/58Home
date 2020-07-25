import { reqmain } from '../../../api/index';
import * as actionType from './constants.js';

export const changeMainData = (data) => {
    return {
        type: actionType.CHANGE_MAINDATA,
        data: data
    }
}

export const getMainData = () => {
    return (dispatch) => {

        console.log("成功进去-----------");

        reqmain().then((res) => {
            console.log("成功进去-+++++++++++++++");
            if (res.data.success) {
                console.log("成功.......", res);
                dispatch(changeMainData(res.data.data))
            } else {
                console.log("失败", res);
            }
        }).catch((e) => {
            console.log("服务页面数据请求错误！");
        })
    }

};

