<template>
  <div class="clinic-chat">
    <common-header :titleName="patientName" @leftToggle="leftToggle"></common-header>
    <div class="mt88"></div>
    <div class="chat-content">
      <div class="content-detail">
        <div class="left-chat mb24">
          <p class="chat-time">02月11日 09:34</p>
          <div class="chat-content ">
            <img src="@/assets/images/nan@2x.png" alt>
            <div class="reply-content ml16">医生，我想要咨询鼻炎之类的问题呢，最近不舒服医生，我想要咨询鼻炎之类的问题呢，最近不舒服医生，我想要咨询鼻炎之类的问题呢，最近不舒服</div>
          </div>
        </div>
       
          <div class="right-chat">
          <p class="chat-time">02月11日 09:34</p>
          <div class="chat-content ">
            <div class="reply-content ">医生，我想要咨询鼻炎之类的问题呢，最近不舒服医生，我想要咨询鼻炎之类的问题呢，最近不舒服医生，我想要咨询鼻炎之类的问题呢，最近不舒服</div>
             <img src="@/assets/images/nv@2x.png" alt class="ml20">
          </div>
        </div>
      
      </div>
    </div>聊天室
    <div></div>
    <chat-bottom></chat-bottom>
  </div>
</template>

<script>
import commonHeader from "@/components/common/commonHeader";
import chatBottom from './clinicChatPart/chatBottom'
export default {
  props: ["patientName"],
  data() {
    return {};
  },
  components: {
    commonHeader,
    chatBottom
  },
  methods: {
    leftToggle() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
.clinic-chat{
.chat-content {
 
  width: 100%;
  height: 100%;
  overflow: auto;
  .content-detail {
    padding: 32px 24px;
    p {
      text-align: center;
      font-size: 26px;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
      margin-bottom: 24px;
    }
    .chat-content {
      .reply-content {
        background: #ffffff;
        border: 1px solid rgba(151, 151, 151, 1);
        max-width: 480px;
        height: auto;
        border-radius:16px;
        padding: 22px 30px;
        font-size:32px;
        color: #3f3f3f;
      }
      display: flex;
      img {
        height: 88px;
        width: 88px;
      }
    }
  }
  .right-chat{
  .chat-content{
    justify-content: flex-end;
    display: flex;
  
  }
  }

  

}
}

</style>


