import mutationTypes from './mutationTypes'
import mutations from './mutations'
import { userInfo } from "@/fetch/api";
const actions = {
    //获取用户的信息
    getUserInfo(store) {
        let params = {};
        userInfo(params).then(res => {
            if (res.code == 1000) {
                // console.log(res)
                store.commit('updateUserInfo', res.data);
            } else {
                this.$Message.infor('网络出错！')
                console.log(res);
            }
        });
    }
}
export default actions