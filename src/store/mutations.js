import mutationTypes from '@/store/mutationTypes.js'

const mutations = {
    updateUserInfo(state, object) {
        state.userInfoState = object;
    }
}

export default mutations