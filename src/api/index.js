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
export const reqgetmainListoffset = (count) => {
    return Ajax('/home/main', { count }, 'GET');
};

export const reqsearchkeywords = (keywords) => {
    return Ajax("/search", { keywords }, 'GET');
};
export const reqsearchhot = () => {
    return Ajax("/hot", {}, 'GET');
};