import { SET_HOT_KEYWRODS, SET_RESULT_LIST, SET_ENTER_LOADING } from './constants';
import { reqsearchhot, reqsearchkeywords } from '../../../api/index';
const changeHotKeyWords = (data) => ({
    type: SET_HOT_KEYWRODS,
    data: data
});
const changeSearchResult = (data) => ({
    type: SET_RESULT_LIST,
    data: data
});

export const changeEnterLoading = (data) => ({
    type: SET_ENTER_LOADING,
    data
});
export const getHotKeyWords = () => {
    return dispatch => {
        reqsearchhot().then(data => {
            console.log('0000000',data)
            let list = data.data.data.hot;
            dispatch(changeHotKeyWords(list));
        })
    }
};
export const getSearchList = (query) => {
    return dispatch => {
        reqsearchkeywords(query).then(data => {
            if (!data) return;
            let res = data.data.data.searchData || [];
            dispatch(changeSearchResult(res));
            dispatch(changeEnterLoading(false));
        })
    }
};