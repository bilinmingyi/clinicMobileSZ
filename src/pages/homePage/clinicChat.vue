<template>
  <div ref="allWrapper">
    <common-header :titleName="queryData.username"></common-header>
    <div class="clinic-chat">
      <div class="wrapper" ref="wrapper">
        <div class="chat-content content" @click="hideFuc" @touchstart="hideFuc">
          <p v-show="isShowLoad" class="loadData">正在加载数据...</p>
          <div class="content-detail">
            <component
              v-for="(item,index) in allMsgList"
              :key="item.msgid"
              :is="RenderComponent(item.from)"
              :chatDetail="item"
              :patientImg="queryData.avatar"
              @cancelMessage = "cancelMessage"
            ></component>
          </div>
        </div>
      </div>
      <div class="mb88"></div>
      <quick-reply v-show="isReply" @closeReply="closeReply" @quickReplyMsg="sendMessage"></quick-reply>
      <chat-bottom
        :showFuc="isShowFuc"
        @addFunc="addFunc"
        @hideFunc="hideFuc"
        @sendMessage="sendMessage"
        @showReply="showReply"
      ></chat-bottom>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
import { chatMsgList, msgSend,msgWithdraw } from "@/fetch/api";
import { mapState } from "vuex";
import commonHeader from "@/components/common/commonHeader";
import chatBottom from "./clinicChatPart/chatBottom";
import clinicMessage from "./clinicChatPart/clinicMessage";
import patientMessage from "./clinicChatPart/patientMessage";
import quickReply from "./clinicChatPart/quickReply";
export default {
  data() {
    return {
      isShowFuc: false,
      queryData: {},
      last_msgid: "",
      allMsgList: [],
      isReply: false,
      dataInterval: "",
      isShowLoad: false,
      isContinue: true
    };
  },
  components: {
    commonHeader,
    chatBottom,
    clinicMessage,
    patientMessage,
    quickReply
  },
  computed: {
    ...mapState(["userInfoState"])
  },
  beforeRouteLeave(to, from, next) {
    clearInterval(this.dataInterval);
    next();
  },
  methods: {
    hideFuc() {
      this.isShowFuc = false;
      this.isReply = false;
    },
    addFunc() {
      this.isShowFuc = !this.isShowFuc;
    },
    RenderComponent(from) {
      // render MessageComponent
      /* 1 诊所 2 患者 */
      return from == 1 ? clinicMessage : patientMessage;
    },
    //发送信息的时候请求数据
    sendMessage(val) {
      let index = this.allMsgList.length - 1;
      let params = {
        last_msgid: this.allMsgList[index].msgid,
        to_userid: this.queryData.userId,
        from_username: this.userInfoState.name,
        from_userimg: this.userInfoState.avatar,
        session_type: this.queryData.session_type,
        msgdata: { msg_type: "text", text: val }
      };
      msgSend(params).then(res => {
        if (res.code === 1000) {
          res.data.msg_list.forEach((item, index) => {
            if (index == 0) {
              return;
            } else {
              this.allMsgList.push(item);
            }
          });
          this.allMsgList.forEach((item, index) => {
            if (index == 0) {
              this.$set(item, "showTime", true);
            } else if (
              index != 0 &&
              this.computedTime(this.allMsgList[index - 1].msgts, item.msgts)
            ) {
              this.$set(item, "showTime", true);
            } else {
              this.$set(item, "showTime", false);
            }
          });
          this.isReply = false;
        } else {
          console.log(res);
        }
        setTimeout(() => {
          this.scroll.scrollTo(0, this.scroll.maxScrollY, 1000);
        }, 0);
      });
    },
    //撤销消息
    cancelMessage(val){
        console.log(val)
        let params = {
          session_type:val.session_type,
          session_id:val.session_id,
          msg_id:val.msgid
        }
        msgWithdraw(params).then(res=>{
          if(res.code===1000){
          this.allMsgList.filter((item)=>{
            item.msgid !==val.msgid
          })
          }else{
            this.$Message.infor('网络太差，撤销失败');
            console.log(res)
          }
          setTimeout(() => {
          this.scroll.scrollTo(0, this.scroll.maxScrollY, 1000);
        }, 0);
        })
    },
    showReply() {
      this.isReply = true;
    },
    closeReply() {
      this.isReply = false;
    },
    //是否显示时间
    computedTime(start_time, end_time) {
      let temp1 = new Date(start_time);
      let temp2 = new Date(end_time);
      if (temp1.getFullYear() != temp2.getFullYear()) {
        return true;
      } else if (temp1.getMonth() != temp2.getMonth()) {
        return true;
      } else if (temp1.getHours() != temp2.getHours()) {
        return true;
      } else if (temp1.getHours() == temp2.getHours()) {
        if (Number(temp2.getMinutes() - temp1.getMinutes()) >= 5) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    },
    //一定时间请求数据
    setIntervalData() {
      let index = this.allMsgList.length - 1;
      let params = {
        direction: "down",
        session_type: this.queryData.session_type,
        count: 10,
        last_msgid: this.allMsgList[index].msgid,
        to_userid: this.queryData.userId
      };
      console.log(params);
      chatMsgList(params).then(res => {
        // console.log(res);
        if (res.code === 1000) {
          res.data.msg_list.forEach((item, index) => {
            if (index == 0) {
              return;
            } else {
              this.allMsgList.push(item);
            }
          });
          this.allMsgList.forEach((item, index) => {
            if (index == 0) {
              this.$set(item, "showTime", true);
            } else if (
              index != 0 &&
              this.computedTime(this.allMsgList[index - 1].msgts, item.msgts)
            ) {
              this.$set(item, "showTime", true);
            } else {
              this.$set(item, "showTime", false);
            }
          });
          this.isReply = false;
        } else {
          console.log(res);
        }
      });
    },
    //初始化数据
    getChatMsg() {
      let params = {
        direction: "down",
        session_type: this.queryData.session_type,
        count: 10,
        last_msgid: this.last_msgid,
        to_userid: this.queryData.userId
      };
      chatMsgList(params).then(res => {
        if (res.code == 1000) {
          this.allMsgList = res.data.msg_list;
          this.allMsgList.forEach((item, index) => {
            if (index == 0) {
              this.$set(item, "showTime", true);
            } else if (
              index != 0 &&
              this.computedTime(this.allMsgList[index - 1].msgts, item.msgts)
            ) {
              this.$set(item, "showTime", true);
            } else {
              this.$set(item, "showTime", false);
            }
          });
          this.last_msgid = this.allMsgList[0].msgid;
        } else {
          console.log(res);
        }
        setTimeout(() => {
          this.scroll.scrollTo(0, this.scroll.maxScrollY, 1000);
        }, 0);
      });
    },
    //向上加载的时候的操作数据
    getUpLoadData() {
      this.isContinue = false;
      this.isShowLoad = true;
      let params = {
        direction: "up",
        session_type: this.queryData.session_type,
        count: 10,
        last_msgid: this.last_msgid,
        to_userid: this.queryData.userId
      };
      chatMsgList(params).then(res => {
        this.isShowLoad = false;
        if (res.code == 1000) {
          console.log(res.data.msg_list.length)
          console.log(res)
          let newObject = [];
          res.data.msg_list.forEach((item, index) => {
            //第一个数据不要
            if (index == res.data.msg_list.length - 1) {
              return;
            } else {
              newObject.push(item);
            }
          });
          this.allMsgList.unshift(...newObject);
          this.allMsgList.forEach((item, index) => {
            if (index == 0) {
              this.$set(item, "showTime", true);
            } else if (
              index != 0 &&
              this.computedTime(this.allMsgList[index - 1].msgts, item.msgts)
            ) {
              this.$set(item, "showTime", true);
            } else {
              this.$set(item, "showTime", false);
            }
          });
          this.last_msgid = this.allMsgList[0].msgid;
          this.isContinue = res.data.msg_list.length == 10 ? true : false;
        } else {
          console.log(res);
        }
      });
    }
  },
  mounted() {
    let options = {
      pullDownRefresh: {
        threshold: 50, // 当下拉到超过顶部 50px 时，触发 pullingDown 事件
        stop: 20, // 刷新数据的过程中，回弹停留在距离顶部还有 20px 的位置
        bounce: true
      }
    };
    //上拉加载数据
    this.scroll = new BScroll(this.$refs.wrapper, options);
    this.scroll.on("pullingDown", () => {
      this.getUpLoadData();
      this.scroll.finishPullDown();
      // 刷新数据的过程中，回弹停留在距离顶部还有20px的位置
    });
    this.getChatMsg();
    this.dataInterval = setInterval(() => {
      this.setIntervalData();
    }, 3000);
  },
  created() {
    this.queryData = this.$route.query;
  
  }
};
</script>
<style lang="scss" scoped>
.clinic-chat {
  // position: relative;
  height: 100%;
  overflow: hidden;
  .chat-content {
    width: 100%;
    height: 100%;
    overflow: auto;
    .content-detail {
      padding: 32px 24px;
    }
  }
}
.wrapper {
  max-height: calc(100vh - 200px);
}
.loadData {
  margin-top: 20px;
  text-align: center;
  font-size: 24px;
  color: $gray2;
}
</style>
