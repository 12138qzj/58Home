import * as actionTypes from './constants';

const defaultstate = {
    orderdata: [],
    detaildata: {}
}

const reducer = (state = defaultstate, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_ORDER_DATA:
            return {...state, orderdata: action.data }
        case actionTypes.CHANGE_ORDERDETAIL_DATA:
            return {...state, detaildata: action.data }
        default:
            return state;
    }
}
export default reducer;