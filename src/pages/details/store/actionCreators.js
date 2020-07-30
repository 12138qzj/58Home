// import { reqserver } from '../../../api/index';
import * as actionType from './constants.js';
import StorageUtils from '../../../Utils/storageUtis/StorageUtils'

export const addorderData = () => {
    return (dispatch) => {
        console.log("成功进去-----------");
        dispatch(changeorderData(init()))

    }
};

export const initorderData = () => {
    return (dispatch) => {
        console.log("成功进去-----------");
        dispatch(changeorderData(init()))
    }
};

const init = () => {
    let boxdata = [];
    StorageUtils.getUserorder();

    const data = StorageUtils.getUserorder() ? StorageUtils.getUserorder().split(';') : [];
    for (let key in data) {
        var obj = eval("(" + data[key] + ")");
        boxdata.push(obj);
    }
    return boxdata;
}
export const changeorderData = (data) => {
    return {
        type: actionType.CHANGE_ORDER_DATA,
        data: data
    }
}


// 详情页面数据

export const changeorderdetailData = (data) => {
    return {
        type: actionType.CHANGE_ORDERDETAIL_DATA,
        data: data
    }
}


export const setorderdetailData = (data) => {
    return (dispatch) => {
        console.log("成功进去-----------");
        dispatch(changeorderdetailData(data))

    }
};