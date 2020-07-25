import { combineReducers } from 'redux';
import { reducer as serverReducer } from "../pages/server/store/index";
import { reducer as mainReducer } from '../pages/Main/store/index'

export default combineReducers({
    server: serverReducer,
    main: mainReducer
});