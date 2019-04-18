import mutationTypes from './mutationTypes'
import { userInfo } from "@/fetch/api";
const actions = {
    set_clinic_info(store, obj) {
        store.commit('set_clinic_info', obj)
    },
    //获取用户的信息
    getUserInfo(store) {
        let params = {};
        userInfo(params).then(res => {
            if (res.code == 1000) {
                store.commit('updateUserInfo', res.data);
            } else {
                this.$Message.infor('网络出错！')
            }
        });
    }
}
export default actions