import mutationTypes from './mutationTypes'
import { userInfo, getClinicList } from '@/fetch/api'
import { resolve } from 'path'
const actions = {
  set_clinic_info(store, obj) {
    store.commit('set_clinic_info', obj)
  },
  //获取用户的信息
  getUserInfo(store) {
    let params = {}
    userInfo(params).then(res => {
      if (res.code == 1000) {
        store.commit('updateUserInfo', res.data)
      } else {
        this.$Message.infor('网络出错！')
      }
    })
  },
  //获取诊所列表得数据
  getActClinic(store) {
    return new Promise((resolve, reject) => {
      let params = {}
      getClinicList(params).then(res => {
        if (res.code == 1000) {
          store.commit('getMutClinics', res.data)
          resolve(res.data)
        } else {
          this.$Message.infor('获取机构列表出错！')
          reject()
        }
      })
    })
  }
}
export default actions
