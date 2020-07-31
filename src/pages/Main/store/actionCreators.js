import { reqmain, reqgetmainListoffset } from '../../../api/index';
import * as actionType from './constants.js';

//主页数据
export const changeMainData = (data) => {
    console.log("进去成功...............");
    return {
        type: actionType.CHANGE_MAINDATA,
        data: data
    }
}

//下标切换
export const changeIndex = (data) => {
    return {
        type: actionType.CHANGE_INDEX,
        data: data
    }
}

//请求主页数据
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

//下标改变 访问的页面
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

//修改下拉成功的list数据
export const changeListItemData = (data) => ({
    type: actionType.CHANGE_LISTITEMDATA,
    data
});

export const changeListOffset = (data) => ({
    type: actionType.CHANGE_LIST_OFFSET,
    data
});

//滑到底部数据请求 
export const refreshMoreMainList = () => {
    return (dispatch, getState) => {
        const offset = getState().main.listOffset;
        const ListItemData = getState().main.ListItemData;
        reqgetmainListoffset(offset).then(res => {
            console.log("进入了.........res", res, "ListItemData", ListItemData)
            const data = [...ListItemData, ...res.data.data];
            console.log("进入了.........data", data)
            dispatch(changeListItemData(data));
            dispatch(changePullUpLoading(false));
            dispatch(changeListOffset(data.length));
        }).catch(() => {
            console.log('热门歌手数据获取失败');
            dispatch(changePullUpLoading(false));

        });
    }
};