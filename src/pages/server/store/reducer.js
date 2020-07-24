import * as actionTypes from './constants';

const defaultstate = {
    serverLeftRightdata: []
}

const reducer = (state = defaultstate, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_SERVER_DATA:
            return {...state, serverLeftRightdata: action.data }
        default:
            return state;
    }
}
export default reducer;