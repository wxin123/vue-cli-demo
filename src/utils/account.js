const setAccountInfo = (username) => {
    localStorage.setItem('account', username)
}
const clearAccountInfo = () => {
    localStorage.removeItem('account')
    localStorage.removeItem('isLogin')
}
export default {
    setAccountInfo,
    clearAccountInfo
}
