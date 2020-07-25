import Ajax from './ajax.js';
export const reqserver = () => {
    return Ajax("/home/server", {}, "GET");
}
export const reqmain = () => {
    return Ajax("/main", {}, 'GET');
}