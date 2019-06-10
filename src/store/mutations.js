import mutationTypes from '@/store/mutationTypes.js'

const mutations = {
  updateUserInfo(state, object) {
    state.userInfoState = object
  },
  addReplySet(state, replyItem) {
    localStorage.defaultKey++
    let obj = {}
    obj.key = Number(state.defaultKey++)
    obj.replyName = replyItem
    state.defaultReply.push(obj)
    try {
      localStorage.defaultReply = JSON.stringify(state.defaultReply)
    } catch (e) {}
  },
  deleteReply(state, replyItem) {
    let index = state.defaultReply.findIndex(item => {
      return item.key === replyItem.key
    })
    state.defaultReply.splice(index, 1)
    try {
      localStorage.defaultReply = JSON.stringify(state.defaultReply)
    } catch (e) {}
  },
  set_clinic_info(state, obj) {
    Object.keys(obj).forEach(item => {
      state.clinic[item] = obj[item]
    })
  },
  changeCloundTab(state, obj) {
    state.cloundTab = obj
  },
  addCloundTabList(state, obj) {
    state.cloundTabList.push(obj)
  },
  deleteCloundTab(state, obj) {
    // 记录删除的index
    let deleteIndex = state.cloundTabList.findIndex(item => {
      return item.id === obj.id
    })
    //过滤数组
    state.cloundTabList = state.cloundTabList.filter(item => {
      return item.id != obj.id
    })
    // 当删除的时候 默认回到记录删除的index
    let nowLength = state.cloundTabList.length
    if (nowLength > 0) {
      state.cloundTab = state.cloundTabList[deleteIndex - 1]
    }
  },
  initCloundData(state, obj) {
    state.cloundTabList = JSON.parse(JSON.stringify(obj.tabList))
    state.cloundTab = JSON.parse(JSON.stringify(obj.tab))
  }
}

export default mutations
