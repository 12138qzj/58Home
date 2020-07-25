import * as actionTypes from './constants';

const defaultstate = {
    orderdata: []
}

const reducer = (state = defaultstate, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_ORDER_DATA:
            return {...state, orderdata: action.data }
        default:
            return state;
    }
}
export default reducer;