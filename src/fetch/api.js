import axios from 'axios'

try {
  axios.defaults.baseURL = '/yzshis'
} catch (e) {
  console.log(e)
}

function fetch(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then(respone => {
        resolve(respone.data)
      })
      .catch(error => {
        console.log(error)
        reject(error)
      })
  })
}
/* 数据获取 */
/* 聊天室 */
const getClinc = params => fetch('/clinic/info', params)
const chatSessionList = params => fetch('/chat/session/list', params)
const chatMsgList = params => fetch('/chat/msg/list', params)
const unRead = params => fetch('/chat/msg/unread', params)
const msgSend = params => fetch('/chat/msg/send', params)
const msgWithdraw = params => fetch('/chat/msg/withdraw', params)
const msgRecent = params => fetch('/chat/msg/recent', params)
const patientList = params => fetch('/chat/user/list', params)
const doctorList = params => fetch('/doctreat/doctor/list', params)
const orderDetail = params => fetch('/treatmng/appoint/detail', params)
// 图片生成链接
const imgUpLoad = params => fetch('/chat/img/upload', params)
//是否有和病人的聊天权限
const isShowPatient = params => fetch('/chat/enabled', params)

/* 消息模块 */
const getPlatformList = params => fetch('/article/list', params)
const getArticleDetail = params => fetch('/article/detail?id=' + params)
const getCommentList = params => fetch('/contentComment/list', params)
const getArticleType = params => fetch('/platform/article/type', params)

/* 个人模块 */
const userInfo = params => fetch('/user/info', params)
const updateUserInfo = params => fetch('/user/update', params)
const getMessageCode = params => fetch('/sms/chkCode/mobileBind', params)
const updateMoblie = params => fetch('/user/mobile/update', params)
const personPermission = params => fetch('/permissions', params)
const trainCourseList = params => fetch('/trainCourseOrder/list', params)
const trainCourseOrder = params => fetch('/trainCourseOrder/create', params)
const trainCoursePay = params => fetch('/pay/szjk/qrcode', params)
const trainCourseCancel = params => fetch('/trainCourseOrder/cancel', params)

/* 常用功能模块 */
//挂号统计
const registerDoctor = params =>
  fetch('/statistic/appoint/appointStatList', params)
const registerStream = params =>
  fetch('/statistic/appoint/appointStreamList', params)
const medicalDoctor = params => fetch('/statistic/treat/treatStatList', params)
const medicalWater = params => fetch('/statistic/treat/treatStreamList', params)
const registerCharge = params =>
  fetch('/statistic/paystream/payStreamStatList', params)
const enterOreder = params => fetch('/statistic/stock/inStatList', params)
const enterType = params => fetch('/statistic/stock/medicineInStatList', params)
const outerOrder = params => fetch('/statistic/stock/outStatList', params)
const outerType = params =>
  fetch('/statistic/stock/medicineOutStatList', params)
const stockHerbalList = params => fetch('/stockmng/medicine/herbalList', params)
const stockWesternList = params =>
  fetch('/stockmng/medicine/westernList', params)
const stockproductList = params =>
  fetch('/stockmng/medicine/productList', params)

/* 商城功能模块 */
const goodsOrderLists = params => fetch('/treatmng/goodsorder/list', params)
const goodsOrderDetail = params => fetch('/treatmng/goodsorder/detail', params)
const goodsCheck = params => fetch('/treatmng/goodsorder/check', params)
const goodsDeliver = params => fetch('/treatmng/goodsorder/deliver', params)
const getGoodsList = params => fetch('/clinicmng/goods/list', params)
const goodsOrderCancel = params => fetch('/treatmng/goodsorder/cancel', params)

/* 连锁诊所功能 */
const changeClinic = params => fetch('/wechat/clinic/change', params)
const getClinicList = params => fetch('/clinics/list', params)
const getClinicRegister = params => fetch('/clinics/appointStatList', params)
const getClinicMedical = params => fetch('/clinics/treatStatList', params)
const getClinicEnter = params => fetch('/clinics/inStatList', params)
const getClinicCharge = params => fetch('/clinics/payStreamStatList', params)
// const goodsCheck = params => fetch('/treatmng/goodsorder/check', params)
// const goodsDeliver = params => fetch('/treatmng/goodsorder/deliver', params)
// const getGoodsList = params => fetch('/clinicmng/goods/list', params)

// 获取分享配置
const fetchWxConfig = params => fetch('/wechat/clinic/config', params)

export {
  fetch,
  getClinc,
  chatSessionList,
  chatMsgList,
  msgSend,
  msgWithdraw,
  msgRecent,
  patientList,
  doctorList,
  imgUpLoad,
  isShowPatient,
  orderDetail,
  getPlatformList,
  getArticleDetail,
  getCommentList,
  userInfo,
  updateUserInfo,
  getMessageCode,
  updateMoblie,
  personPermission,
  registerDoctor,
  registerStream,
  medicalDoctor,
  medicalWater,
  registerCharge,
  enterType,
  enterOreder,
  outerOrder,
  outerType,
  stockHerbalList,
  stockWesternList,
  stockproductList,
  unRead,
  goodsOrderLists,
  goodsOrderDetail,
  goodsCheck,
  goodsDeliver,
  getGoodsList,
  goodsOrderCancel,
  changeClinic,
  getClinicList,
  getClinicRegister,
  getClinicMedical,
  getClinicEnter,
  getClinicCharge,
  getArticleType,
  trainCourseOrder,
  trainCourseList,
  trainCoursePay,
  trainCourseCancel,
  fetchWxConfig
}
