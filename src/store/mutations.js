import mutationTypes from '@/store/mutationTypes.js'


const mutations = {
    updateUserInfo(state, object) {
        state.userInfoState = object;
    },
    addReplySet(state, replyItem) {
        // Number(state.defaultKey++);
        // console.log(key)
        localStorage.defaultKey++;
        let obj = {};
        obj.key = Number(state.defaultKey++);
        console.log(obj.key)
        obj.replyName = replyItem;
        state.defaultReply.push(obj);
        try {
            localStorage.defaultReply = JSON.stringify(state.defaultReply);
        } catch (e) {}
    },
    deleteReply(state, replyItem) {
        console.log(replyItem)
        let index = state.defaultReply.findIndex(item => {
            return item.key === replyItem.key;
        })
        state.defaultReply.splice(index, 1)
        console.log(state.defaultReply)
        try {
            localStorage.defaultReply = JSON.stringify(state.defaultReply);
        } catch (e) {}
    }
}

export default mutations