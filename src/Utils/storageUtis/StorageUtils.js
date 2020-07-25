const USER_ORDER = 'user_order'
    // const ADMIN_KEY = 'admin_key'

export default {
    saveUserorder(data) {
        localStorage.setItem(USER_ORDER, JSON.stringify(data));
    },
    getUserorder() {
        return JSON.parse(localStorage.getItem(USER_ORDER) || null)
    },
    removeUserorder() {
        localStorage.removeItem(USER_ORDER);
    }



}