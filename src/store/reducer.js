import { combineReducers } from 'redux';
// import { combineReducers } from "redux-immutable";

import { reducer as serverReducer } from "../pages/server/store/index";
import { reducer as orderReducer } from "../pages/details/store/index";

import { reducer as mainReducer } from '../pages/Main/store/index'
import { reducer as searchReducer } from '../pages/search/store/index'


export default combineReducers({
    server: serverReducer,
    main: mainReducer,
    order: orderReducer,
    search: searchReducer

});