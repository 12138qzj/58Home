import Mock from 'mockjs';

import ServerData from '../Data/serverData/ServerData.json';
import MainData from '../Data/mainData/index.js'
// let a;
// RANDOMIZE
// 拦截ajax发出的请求 返回本地数据
export default Mock.mock('/home/server', 'get', {
    success: true,
    data: ServerData
});

const mainData = Mock.mock('/home/main', 'get', {
    success: true,
    data: MainData
})
export { mainData }