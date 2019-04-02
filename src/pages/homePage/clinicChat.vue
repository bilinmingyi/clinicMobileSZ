<template>
  <div class="clinic-chat" >
    <common-header :titleName="patientName" @leftToggle="leftToggle"></common-header>
    
    <div class="chat-content" @click="hideFuc">
      <div class="content-detail">
        <div class="left-chat mb24">
          <p class="chat-time mb24">02月11日 09:34</p>
          <div class="chat-content">
            <img src="@/assets/images/nan@2x.png" alt>
            <div
              class="reply-content ml16"
            >医生，我想要咨询鼻炎之类的问题呢，最近不舒服医生，我想要咨询鼻炎之类的问题呢，最近不舒服医生，我想要咨询鼻炎之类的问题呢，最近不舒服</div>
          </div>
        </div>

        <div class="right-chat mb24">
          <p class="chat-time mb24">02月11日 09:34</p>
          <div class="chat-content">
            <div
              class="reply-content"
            >医生，我想要咨询鼻炎之类的问题呢，最近不舒服医生，我想要咨询鼻炎之类的问题呢，最近不舒服医生，我想要咨询鼻炎之类的问题呢，最近不舒服</div>
            <img src="@/assets/images/nv@2x.png" alt class="ml20">
          </div>
        </div>
        <div class="right-chat mb24">
          <p class="chat-time mb24">02月11日 09:34</p>
          <div class="chat-content">
            <div class="reply-content">
              <div class="recommond">
                <img src="@/assets/images/nv@2x.png" alt>
                <div class="recommond-content">
                  <p class="recommond-title">
                    王凯歌
                    <span>医师</span>
                  </p>
                  <p class="recommond-subTitle">请点击进行预约</p>
                </div>
              </div>
            </div>
            <img src="@/assets/images/nv@2x.png" alt class="ml20">
          </div>
        </div>
          <div class="left-chat mb24">
          <p class="chat-time mb24">02月11日 09:34</p>
          <div class="chat-content">
            <img src="@/assets/images/nan@2x.png" alt>
            <div
              class="reply-content ml16"
            >医生，我想要咨询鼻炎之类的问题呢，最近不舒服医生，我想要咨询鼻炎之类的问题呢，最近不舒服医生，我想要咨询鼻炎之类的问题呢，最近不舒服</div>
          </div>
        </div>
      </div>
    </div>
    <div class="mb88"></div>
    <chat-bottom :showFuc="isShowFuc" @addFunc="addFunc" @hideFunc="hideFuc"></chat-bottom>
  </div>
</template>

<script>
import commonHeader from "@/components/common/commonHeader";
import chatBottom from "./clinicChatPart/chatBottom";
export default {
  props: ["patientName"],
  data() {
    return {
      isShowFuc:false
    };
  },
  components: {
    commonHeader,
    chatBottom
  },
  methods: {
    leftToggle() {
      this.$router.go(-1);
    },
    hideFuc(){
      this.isShowFuc = false;
    },
    addFunc(){
      this.isShowFuc = !this.isShowFuc;
    }
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
      p {
        text-align: center;
        font-size: 26px;
        font-weight: 400;
        color: $simpleGray;
      }
      .chat-content {
        .reply-content {
          background: $bgwhite2;
          border: 1px solid $simpleGray;
          max-width: 480px;
          height: auto;
          border-radius: 16px;
          padding: 22px 30px;
          @extend %normalTitle;
        }
        display: flex;
        img {
          @extend %minICon;
        }
        .recommond {
          @extend %aglinItem;
          img {
            @extend %mediumIcon;
          }
          &-content {
            padding-left: 16px;
            p {
              text-align: left;
            }
          }
          &-title {
            @extend %normalTitle;
            font-weight: 600;
            span {
              width: 72px;
              height: 40px;
              background: rgba(237, 171, 21, 1);
              line-height: 40px;
              text-align: center;
              margin-left: 16px;
              color: $bgwhite2;
              font-size: 20px;
              font-weight: 400;
              display: inline-block;
            }
          }
          &-subTitle {
            padding-top: 6px;
            font-size: 28px;
            color: $simpleGray;
          }
        }
      }
    }
    .right-chat {
      .chat-content {
        justify-content: flex-end;
        display: flex;
      }
    }
  }
}
</style>


