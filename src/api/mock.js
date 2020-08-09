import Mock from 'mockjs';

import ServerData from '../Data/serverData/ServerData.json';
import MainData from '../Data/mainData/index.js'
import { HotKeys as SearchHotKeys } from './searchData/SearchHotKeys';
import { Result as SearchResult } from './searchData/SearchResult';



//服务器端数据

import { ListItemData } from './serverData/maindata'
// let a;
// RANDOMIZE
// 拦截ajax发出的请求 返回本地数据
export default Mock.mock('/home/server', 'get', (options) => {
    // console.log("mock进去", options);
    return {
        success: true,
        data: ServerData
    }

});

const detailData = Mock.mock(/\/detail/, 'get', (options) => {
    // console.log("mock进去", options);

    const detailtitle = decodeURIComponent(options.url.split("?")[1].split("=")[1]);
    // console.log("mock进去", decodeURIComponent(options.url.split("?")[1].split("=")[1]));
    return {
        success: true,
        data: [{
                'title': detailtitle,
                'price': Math.floor(5 + Math.random() * 20),
            }

        ]
    }

});


const mainData = Mock.mock(/\/home\/main/, 'get', (options) => {
    if (!options.url.split("?")[1]) {
        return {
            success: true,
            data: MainData
        }
    }
    const offset = decodeURIComponent(options.url.split("?")[1].split("=")[1]);

    return {
        success: true,
        data: ListItemData[offset / 5]
    }

});

const searchHotKeysData = Mock.mock("/hot", 'get', (options) => {
    // console.log("mock进去", options);
    return {
        success: true,
        data: {
            hot: SearchHotKeys
        }
    }

});

const searchData = Mock.mock(/\/search/, 'get', (options) => {

    if (options.url === "/search") return
    console.log(options);
    const SearchKeywords = decodeURIComponent(options.url.split("?")[1].split("=")[1]);

    let data = SearchResult.filter((item, index) => {
        if (item.includes(SearchKeywords)) return true;
        return false;
    })
    return {
        success: true,
        data: {
            searchData: data
        }
    }

});

export { mainData, detailData, searchHotKeysData, searchData }