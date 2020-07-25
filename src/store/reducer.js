import { combineReducers } from 'redux';
import { reducer as serverReducer } from "../pages/server/store/index";
import { reducer as orderReducer } from "../pages/details/store/index";


export default combineReducers({
    server: serverReducer,
    order: orderReducer
});