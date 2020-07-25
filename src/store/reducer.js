import { combineReducers } from 'redux';
import { reducer as serverReducer } from "../pages/server/store/index";

export default combineReducers({
    server: serverReducer,
});