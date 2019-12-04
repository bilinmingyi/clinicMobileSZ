import wx from 'weixin-js-sdk'
import { fetchWxConfig } from '../../fetch/api'

const getQueryString = name => {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  var r = window.location.search.substr(1).match(reg)
  if (r != null) return decodeURIComponent(r[2])
  return null
}

const getWXSign = () => {
  return new Promise((resolve, reject) => {
    fetchWxConfig({
      uri: window.location.pathname.replace(/\/yzshis/, '')
    })
      .then(res => {
        if (res.code === 1000) {
          wx.config({
            debug: false,
            appId: res.data.appId,
            timestamp: res.data.timestamp,
            nonceStr: res.data.nonceStr,
            signature: res.data.signature,
            jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData']
          })
          wx.ready(() => {
            resolve({
              wx: wx,
              appId: res.data.appId
            })
          })
          wx.error(res => {
            console.log(res)
          })
        } else {
          this.$Message.infor('微信初始化失败')
        }
      })
      .catch(error => {
        reject(error)
      })
  })
}

export { getQueryString, getWXSign }
