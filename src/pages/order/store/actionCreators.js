// // import { reqmain } from '../../../api/index';
// import * as actionType from './constants.js';


// const init = () => {
//     let boxdata = [];
//     StorageUtils.getUserorder();

//     const data = StorageUtils.getUserorder() ? StorageUtils.getUserorder().split(';') : [];
//     for (let key in data) {
//         var obj = eval("(" + data[key] + ")");
//         boxdata.push(obj);
//     }
//     return boxdata;
// }

// export const initOrderData = (data) => {
//     return {
//         type: actionType.CHANGE_ORDERDATA,
//         data: data
//     }
// }

// export const getOrderData = () => {
//     return (dispatch) => {
//         console.log("成功进去-----------");
//         dispatch(initOrderData(init()))
//     }
// };

