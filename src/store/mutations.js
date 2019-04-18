import mutationTypes from '@/store/mutationTypes.js'


const mutations = {
    updateUserInfo(state, object) {
        state.userInfoState = object;
    },
    addReplySet(state, replyItem) {
        localStorage.defaultKey++;
        let obj = {};
        obj.key = Number(state.defaultKey++);
        obj.replyName = replyItem;
        state.defaultReply.push(obj);
        try {
            localStorage.defaultReply = JSON.stringify(state.defaultReply);
        } catch (e) {}
    },
    deleteReply(state, replyItem) {
        let index = state.defaultReply.findIndex(item => {
            return item.key === replyItem.key;
        })
        state.defaultReply.splice(index, 1)
        try {
            localStorage.defaultReply = JSON.stringify(state.defaultReply);
        } catch (e) {}
    },
    set_clinic_info(state, obj) {
        Object.keys(obj).forEach(item => {
            state.clinic[item] = obj[item]
        })
    },
}

export default mutations