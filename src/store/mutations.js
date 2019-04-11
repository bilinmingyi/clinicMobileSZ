import mutationTypes from '@/store/mutationTypes.js'


const mutations = {
    updateUserInfo(state, object) {
        state.userInfoState = object;
    },
    addReplySet(state,replyItem){
     let key= Number(state.defaultKey)+1;
     console.log(key)
     localStorage.defaultKey++;
     let obj={};
      obj.key = key;
      obj.replyName = replyItem;
      console.log(obj)
      console.log(state.defaultReply)
      console.log(localStorage.defaultReply)
     state.defaultReply.push(obj);
      try{
        if(localStorage.defaultReply){
          localStorage.defaultReply=state.defaultReply
          console.log(localStorage.defaultReply)
        }
      }catch(e){}
    },
    deleteReply(state,replyItem){
      state.defaultReply.filter(item=>{
        item.key!=replyItem.key
      })
      try{
        if(localStorage.defaultReply){
          localStorage.defaultReply=state.defaultReply
        }
      }catch(e){}
    }
}

export default mutations
