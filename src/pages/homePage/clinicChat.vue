<template>
  <div class="clinic-chat">
    <common-header :titleName="queryData.username"></common-header>

    <div class="chat-content" @click="hideFuc" @touchstart="hideFuc">
      <div class="content-detail">
        <component
          v-for="(item,index) in allMsgList"
          :key="index"
          :is="RenderComponent(item.from)"
          :chatDetail="item"
        ></component>
      </div>
    </div>
    <div class="mb88"></div>
    <quick-reply v-show="isReply" @closeReply="closeReply"></quick-reply>
    <chat-bottom
      :showFuc="isShowFuc"
      @addFunc="addFunc"
      @hideFunc="hideFuc"
      @sendMessage="sendMessage"
      @showReply="showReply"
    ></chat-bottom>
  </div>
</template>

<script>
import { chatMsgList, msgSend } from "@/fetch/api";
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
      isReply: false
    };
  },
  components: {
    commonHeader,
    chatBottom,
    clinicMessage,
    patientMessage,
    quickReply
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
      // return patientMessage;
      /* 1 患者 2 诊所 */
      return from == 1 ? patientMessage : clinicMessage;
    },
    sendMessage(val) {
      let params = {
        to_userid: this.queryData.userId,
        from_username: "诊所",
        from_userimg: "",
        session_type: this.queryData.session_type,
        msgdata: { msg_type: "text", text: val }
      };
      msgSend(params).then(res => {
        console.log(res);
      });
    },
    showReply() {
      this.isReply = true;
    },
    closeReply() {
      this.isReply = false;
    },
    getChatMsg() {
      let params = {
        direction: "down",
        session_type: this.queryData.session_type,
        count: 50,
        last_msgid: this.last_msgid,
        to_userid: this.queryData.userId
      };
      chatMsgList(params).then(res => {
        if (res.code == 1000) {
          this.allMsgList = res.data.msg_list;
          console.log(this.allMsgList);
        } else {
          console.log(res);
        }
      });
    }
  },
  created() {
    this.queryData = this.$route.query;
    this.getChatMsg();
  }
};
</script>
<style lang="scss" scoped>
.clinic-chat {
  .chat-content {
    width: 100%;
    height: 100%;
    overflow: auto;
    .content-detail {
      padding: 32px 24px;
    }
  }
}
</style>
