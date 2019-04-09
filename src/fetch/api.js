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

/* 消息模块 */
const getPlatformList = params => fetch('/article/list', params);

/* 个人模块 */
const userInfo = params => fetch('/user/info', params);
const getMessageCode = params => fetch('/sms/chkCode/mobileBind', params);

/* 常用功能模块 */
//挂号统计
const registerDoctor = params => fetch('/statistic/appoint/appointStatList', params);
const registerStream = params => fetch('/statistic/appoint/appointStreamList', params);
export {
    fetch,
    getPlatformList,
    userInfo,
    getMessageCode,
    registerDoctor,
    registerStream
}