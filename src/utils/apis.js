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
  ONE: '/apis/target/getPlanById'
}
const LOGIN = {
  LOGIN: '/node/login',
  REGISTER: '/node/register'
}
const PRIVILEGE = {
  LIST: '/node/privilege',
  UPDATE: '/node/privilege/update',
  DELETE: '/node/privilege/delete',
  INSERT: '/node/privilege/insert'
}
export {
  DICTIONARY_TYPE,
  DICTIONARY_DATA,
  GOODS,
  LOGIN,
  PRIVILEGE,
  PLAN
}
