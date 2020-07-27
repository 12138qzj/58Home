import * as actionTypes from './constants';

const defaultstate = {
    maindata: [],
    index: 0
}

const reducer = (state = defaultstate, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_MAINDATA:
            return {...state, maindata: action.data }
        case actionTypes.CHANGE_INDEX:
            return {...state, index: action.data }
        default:
            return state;
    }
}
export default reducer;