import Mock, { Random } from 'mockjs';

import ServerData from '../Data/serverData/ServerData.json';
// let a;
// RANDOMIZE
export default Mock.mock('/server', 'get', {
    success: true,
    data: ServerData
});