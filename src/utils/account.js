const setAccountInfo = (param) => {
    localStorage.setItem('account', param.username)
    localStorage.setItem('isLogin', 1)
    localStorage.setItem('_token', param['_token'])
    localStorage.setItem('session_id', param['session_id'])
}
const clearAccountInfo = () => {
    localStorage.removeItem('account')
    localStorage.removeItem('isLogin')
    localStorage.removeItem('_token')
    localStorage.removeItem('session_id')
}
export default {
    setAccountInfo,
    clearAccountInfo
}
