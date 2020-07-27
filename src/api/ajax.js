import axios from 'axios';
import './mock.js';

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
            // console.log("object数据response加载", response);
            resolve(response);
        }).catch((error) => {
            console.error("数据请求异常！", error)
        })
    })

}