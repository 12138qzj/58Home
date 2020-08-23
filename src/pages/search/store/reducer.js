import * as actionTypes from './constants';

const defaultState = {
    hotList: [],
    searchList: [],
    enterLoading: false
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.SET_HOT_KEYWRODS:
            return {...state, hotList: action.data };
        case actionTypes.SET_RESULT_LIST:
            return {...state, searchList: action.data };
        case actionTypes.SET_ENTER_LOADING:
            return {...state, enterLoading: action.data };
        default:
            return state;
    }
}