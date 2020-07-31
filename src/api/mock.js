// import ApiPath from "@/api/ApiPath"
import Mock from 'mockjs';

import ServerData from '../Data/serverData/ServerData.json';
import MainData from '../Data/mainData/index.js'


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

// const mainData = Mock.mock('/home/main', 'get', {
//     success: true,
//     data: MainData
// })

const mainData = Mock.mock(/\/home\/main/, 'get', (options) => {
    console.log("mock进去..", options);

    if (!options.url.split("?")[1]) {
        return {
            success: true,
            data: MainData
        }
    }
    const offset = decodeURIComponent(options.url.split("?")[1].split("=")[1]);
    console.log("offset-----------", offset);
    console.log("ListItemData", ListItemData)
    return {
        success: true,
        data: ListItemData[offset / 5]
    }
    // if (offset) {
    // return {
    //     success: true,
    //     data: ListItemData[offset]
    // }
    // }
    // console.log("mock进去", decodeURIComponent(options.url.split("?")[1].split("=")[1]));

    // return {
    //     success: true,
    //     data: [{
    //             'title': detailtitle,
    //             'price': Math.floor(5 + Math.random() * 20),
    //         }

    //     ]
    // }

});

export { mainData, detailData }
// const mainData = Mock.mock('/home/main/cbl', 'get', {
//     success: true,
//     data: MainData
// })
// export { mainData }