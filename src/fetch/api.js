import axios from 'axios'

try {
    axios.defaults.baseURL = '/yzshis'
} catch (e) {
    console.log(e)
}

function fetch(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params).then(
            respone => {
                resolve(respone.data)
            }
        ).catch(error => {
            console.log(error);
            reject(error);
        })
    })
}
/* 数据获取 */
/* 聊天室 */
const getClinc = params => fetch('/clinic/info', params);
const chatSessionList = params => fetch('/chat/session/list', params);
const chatMsgList = params => fetch('/chat/msg/list', params);
const unRead = params => fetch('/chat/msg/unread', params);
const msgSend = params => fetch('/chat/msg/send', params);
const msgWithdraw = params => fetch('/chat/msg/withdraw', params);
const msgRecent = params => fetch('/chat/msg/recent', params);
const patientList = params => fetch('/chat/user/list', params);
const doctorList = params => fetch('clinicmng/user/list ', params);
const orderDetail = params => fetch('/treatmng/appoint/detail', params);

/* 消息模块 */
const getPlatformList = params => fetch('/article/list', params);
const getArticleDetail = params => fetch('/article/detail?id=' + params);
const getCommentList = params => fetch('/contentComment/list', params);


/* 个人模块 */
const userInfo = params => fetch('/user/info', params);
const updateUserInfo = params => fetch('/user/update', params);
const getMessageCode = params => fetch('/sms/chkCode/mobileBind', params);
const updateMoblie = params => fetch('/user/mobile/update', params);

/* 常用功能模块 */
//挂号统计
const registerDoctor = params => fetch('/statistic/appoint/appointStatList', params);
const registerStream = params => fetch('/statistic/appoint/appointStreamList', params);
const medicalDoctor = params => fetch('/statistic/treat/treatStatList', params);
const medicalWater = params => fetch('/statistic/treat/treatStreamList', params);
const registerCharge = params => fetch('/statistic/paystream/payStreamStatList', params);
const enterOreder = params => fetch('/statistic/stock/inStatList', params);
const enterType = params => fetch('/statistic/stock/medicineInStatList', params);
const outerOrder = params => fetch('/statistic/stock/outStatList', params);
const outerType = params => fetch('/statistic/stock/medicineOutStatList', params);
const stockHerbalList = params => fetch('/stockmng/medicine/herbalList', params);
const stockWesternList = params => fetch('/stockmng/medicine/westernList', params);
const stockproductList = params => fetch('/stockmng/medicine/productList', params);

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
    orderDetail,
    getPlatformList,
    getArticleDetail,
    getCommentList,
    userInfo,
    updateUserInfo,
    getMessageCode,
    updateMoblie,
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
    unRead
}