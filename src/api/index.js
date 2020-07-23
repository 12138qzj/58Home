import Ajax from './ajax.js';
export const reqserver = () => {
    return Ajax("/server", {}, "GET");
}