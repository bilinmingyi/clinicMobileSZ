<template>
  <div>
    <common-header :titleName="queryData.username"></common-header>
    <div class="clinic-chat">
      <div class="wrapper" ref="wrapper" >
        <div class="chat-content content" @click="hideFuc" @touchstart="hideFuc">
          <p v-show="isShowLoad" class="loadData">正在加载数据...</p>
          <div class="content-detail">
            <component
              v-for="(item,index) in allMsgList"
              :key="index"
              :is="RenderComponent(item.from)"
              :chatDetail="item"
              :patientImg="queryData.avatar"
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
import { chatMsgList, msgSend } from "@/fetch/api";
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
      isShowLoad: false
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
        window.scrollTo(0, this.$refs.chatContainer.scrollHeight + 100); //滑动到底部
      });
    },
    showReply() {
      this.isReply = true;
    },
    closeReply() {
      this.isReply = false;
    },
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
    getChatMsg() {
      let params = {
        direction: "down",
        session_type: this.queryData.session_type,
        count: 20,
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
          console.log(this.allMsgList);
        } else {
          console.log(res);
        }
      });
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper);
    console.log(   this.scroll )
    setTimeout(()=>{
  console.log(   this.scroll )
    },2000)
    this.scroll.on('touchEnd', (pos) => {
            //上拉加载 总高度>下拉的高度+10 触发加载更多
            if(this.scroll.maxScrollY>pos.y+10){
                console.log("加载更多")
                this.isShowLoad = true
                //使用refresh 方法 来更新scroll  解决无法滚动的问题
                this.scroll.refresh()
            }else{
               this.isShowLoad = false
            }
            console.log(this.scroll.maxScrollY+"总距离----下拉的距离"+pos.y)
        })
    // this.dataInter = setInterval(() => {
    //   console.log("i love yy");
    // }, 2000);
  },
  created() {
    this.queryData = this.$route.query;
    this.getChatMsg();
  },
  watch: {}
};
</script>
<style lang="scss" scoped>
.clinic-chat {
  // position: relative;
  height: 100%;
  overflow: hidden;
  .chat-content {
    width: 100%;
    // height: 100%;
    overflow: auto;
    .content-detail {
      padding: 32px 24px;
    }
  }
}
.wrapper{
  max-height: calc(100vh - 200px);
//  position: a;
// bottom: 200px;
// top: 200px;
// overflow: hidden;
}
.loadData {
  margin-top: 20px;
  text-align: center;
  font-size: 24px;
  color: $gray2;
}
</style>
