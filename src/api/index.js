import Ajax from './ajax.js';
export const reqserver = () => {
    return Ajax("/home/server", { qzj: 123 }, "GET");
}
export const reqmain = () => {
        return Ajax("/home/main", {}, 'GET');
    }
    // home/main/cbl
    // export const reqmain = (url) => {
    //     return Ajax(url, {}, 'GET');
    // }