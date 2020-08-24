import axios from 'axios';
axios.defaults.baseURL = 'http://101.37.116.167:9090';
export default function Ajax(url, data = {}, type) {


    return new Promise((resolve, rejet) => {
        let Promise;
        if (type === 'GET') {
            Promise = axios.get(url, {
                params: data
            })
        } else {
            Promise = axios.post(url, {
                params: data
            })
        }
        Promise.then((response) => {
            resolve(response);
        }).catch((error) => {
            console.error("数据请求异常！", error)
        })
    })

}