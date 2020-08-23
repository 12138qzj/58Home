import Mock from 'mockjs';

// import ServerData from '../Data/serverData/ServerData.json';
import MainData from '../Data/mainData/index.js'
import { HotKeys as SearchHotKeys } from './searchData/SearchHotKeys';
import { Result as SearchResult } from './searchData/SearchResult';



//服务器端数据

import { ListItemData } from './serverData/maindata'
// let a;
// RANDOMIZE
// 拦截ajax发出的请求 返回本地数据

// export default Mock.mock(/localhost:9090\/home\/server/, 'get', (options) => {
//     console.log("mock进去", options);
//     return {
//         success: true,
//         data: ServerData
//     }
// });

// const detailData = Mock.mock(/\/detail/, 'get', (options) => {
//     // console.log("mock进去", options);

//     const detailtitle = decodeURIComponent(options.url.split("?")[1].split("=")[1]);
//     // console.log("mock进去", decodeURIComponent(options.url.split("?")[1].split("=")[1]));
//     return {
//         success: true,
//         data: [{
//                 'title': detailtitle,
//                 'price': Math.floor(5 + Math.random() * 20),
//             }

//         ]
//     }
// });
// const mainData = Mock.mock(/localhost:9090\/home\/main/, 'get', (options) => {
//     console.log(MainData)
//     if (!options.url.split("?")[1]) {
//         return {
//             success: true,
//             data: MainData
//         }
//     }
//     const offset = decodeURIComponent(options.url.split("?")[1].split("=")[1]);

//     return {
//         success: true,
//         data: ListItemData[offset / 5]
//     }
// });

// const searchHotKeysData = Mock.mock(/localhost:9090\/hot/, 'get', (options) => {
//     // console.log("mock进去", options);
//     return {
//         success: true,
//         data: {
//             hot: SearchHotKeys
//         }
//     }
// });

// const searchData = Mock.mock(/localhost:9090\/search/, 'get', (options) => {

//     if (options.url === "/search") return
//     console.log(options);
//     const SearchKeywords = decodeURIComponent(options.url.split("?")[1].split("=")[1]);

//     let data = SearchResult.filter((item, index) => {
//         if (item.includes(SearchKeywords)) return true;
//         return false;
//     })
//     return {
//         success: true,
//         data: {
//             searchData: data
//         }
//     }

// });
// searchHotKeysData,mainData,,  searchData
// export {  detailData }