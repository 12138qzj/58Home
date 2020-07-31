import { reqmain } from '../../../api/index';
import * as actionType from './constants.js';

export const changeMainData = (data) => {
    console.log("进去成功...............");
    return {
        type: actionType.CHANGE_MAINDATA,
        data: data
    }
}

export const changeIndex = (data) => {
    return {
        type: actionType.CHANGE_INDEX,
        data: data
    }
}

export const getMainData = () => {
    return (dispatch) => {


        reqmain().then((res) => {
            if (res.data.success) {
                dispatch(changeMainData(res.data.data))
            } else {
                console.log("失败", res);
            }
        }).catch((e) => {
            console.log("服务页面数据请求错误！");
        })
    }

};

//改变 访问的页面
export const changeIndexData = (newIndex) => {
    return (dispatch) => {
        console.log("成功进去changeIndexData-----------");
        dispatch(changeIndex(newIndex))
    }
};


//进场loading
// export const changeEnterLoading = (data) => ({
//     type: CHANGE_ENTER_LOADING,
//     data
// });

//滑动最底部loading
export const changePullUpLoading = (data) => ({
    type: actionType.CHANGE_UPLOADING,
    data
});

//顶部下拉刷新loading
export const changePullDownLoading = (data) => ({
    type: actionType.CHANGE_DOWNLOADING,
    data
});