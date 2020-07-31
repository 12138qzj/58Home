const USER_ORDER = 'user_order'
    // const ADMIN_KEY = 'admin_key'
const RecentNum = 'recent_num'

export default {
    saveUserorder(data) {
        localStorage.setItem(USER_ORDER, JSON.stringify(data));
    },
    getUserorder() {
        return JSON.parse(localStorage.getItem(USER_ORDER) || null)
    },
    removeUserorder() {
        localStorage.removeItem(USER_ORDER);
    },
    saveRecentNum(num) {
        localStorage.setItem(RecentNum, num)
    }




}