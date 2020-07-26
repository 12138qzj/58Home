import * as actionTypes from './constants';

const defaultstate = {
    orderdata: []
}

const reducer = (state = defaultstate, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_ORDERDATA:
            return {...state, orderdata: action.data }
        default:
            return state;
    }
}
export default reducer;