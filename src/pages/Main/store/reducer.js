import * as actionTypes from './constants';

const defaultstate = {
    maindata: [],
    index: 0,
    ListItemData: [],
    listOffset: 0,
    Uploading: false,
    Downloading: false
}

const reducer = (state = defaultstate, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_MAINDATA:
            return {...state, maindata: action.data }
        case actionTypes.CHANGE_INDEX:
            return {...state, index: action.data }
        case actionTypes.CHANGE_LISTITEMDATA:
            return {...state, ListItemData: action.data }
        case actionTypes.CHANGE_UPLOADING:
            return {...state, Uploading: action.data }
        case actionTypes.CHANGE_DOWNLOADING:
            return {...state, Downloading: action.data }
        case actionTypes.CHANGE_LIST_OFFSET:
            return {...state, listOffset: action.data }

        default:
            return state;
    }
}
export default reducer;