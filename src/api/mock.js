// import ApiPath from "@/api/ApiPath"
import Mock from 'mockjs';

import ServerData from '../Data/serverData/ServerData.json';
import MainData from '../Data/mainData/index.js'
// let a;
// RANDOMIZE
// 拦截ajax发出的请求 返回本地数据
export default Mock.mock('/home/server', 'get', (options) => {
    console.log("mock进去", options);
    return {
        success: true,
        data: ServerData
    }

});
// /\/goods\/\d+/

// /\/home \/server\/\d+/

// export default Mock.mock(/\/home\/server/, 'get', (options) => {
//     console.log("mock进去", options);

//     console.log("mock进去", options.url.split("?")[1].split("=")[0]);
//     return {
//         success: true,
//         data: ServerData
//     }

// });

const mainData = Mock.mock('/home/main', 'get', {
    success: true,
    data: MainData
})

export { mainData }
// const mainData = Mock.mock('/home/main/cbl', 'get', {
//     success: true,
//     data: MainData
// })
// export { mainData }