import Ajax from './ajax.js';
export const reqserver = () => {
    return Ajax("/home/server", {}, "GET");
}
export const reqmain = () => {
    return Ajax("/home/main", {}, 'GET');
}
export const reqdetail = (data) => {
        return Ajax("/detail", { data }, 'GET');
    }
    // home/main/cbl
    // export const reqmain = (url) => {
    //     return Ajax(url, {}, 'GET');
    // }