// 字典类型
const DICTIONARY_TYPE = {
  LIST: '/apis/dictionary/listType',
  UPDATE: '/apis/dictionary/updateType',
  DELETE: '/apis/dictionary/deleteType',
  INSERT: '/apis/dictionary/addType'
}
// 字典详情
const DICTIONARY_DATA = {
  LIST: '/apis/dictionary/listData',
  UPDATE: '/apis/dictionary/updateData',
  DELETE: '/apis/dictionary/deleteData',
  INSERT: '/apis/dictionary/addData'
}
const GOODS = {
  LIST: '/apis/good/getGoods',
  UPDATE: '/apis/good/saveGood',
  DELETE: '/apis/good/deleteGood',
  INSERT: '/apis/good/addGood'
}
const PLAN = {
  LIST: '/apis/target/getPlans',
  UPDATE: '/apis/target/savePlan',
  DELETE: '/apis/target/deletePlan',
  INSERT: '/apis/target/addPlan',
  GET_ONE: '/apis/target/getPlanById'
}
const LOGIN = {
  LOGIN: `/apis/login/checkLogin`,
  LOGOUT: `/apis/login/logout`,
  REGISTER: `${process.env.VUE_APP_API}/register`
}
const PRIVILEGE = {
  LIST: `${process.env.VUE_APP_API}/privilege`,
  UPDATE: `${process.env.VUE_APP_API}/privilege/update`,
  DELETE: `${process.env.VUE_APP_API}/privilege/delete`,
  INSERT: `${process.env.VUE_APP_API}/privilege/insert`
}
const USER = {
  LIST: `/apis/user/listUsers`,
  UPDATE: `/apis/user/updateUser`,
  DELETE: `/apis/user/deleteUser`,
  GET_ONE: `/apis/user/getUserById`,
  INSERT: `/apis/user/addUser`,
  RESET_PASS: `/apis/user/reSetPwd`
}
export {
  DICTIONARY_TYPE,
  DICTIONARY_DATA,
  GOODS,
  LOGIN,
  PRIVILEGE,
  PLAN,
  USER
}
