<template>
  <div>
    <div class="right-chat mb24">
      <p
        class="chat-time mb24"
        v-if="chatDetail.showTime"
      >{{chatDetail.msgts|dateFormat('MM月dd日 hh:mm')}}</p>
      <div
        class="chat-content"
      >
      <div class="cancelButton" v-if="chatDetail.msgdata.msg_type !== 'withdraw_msg'&&userInfoState.id===chatDetail.from_userid" @click="cancelThis"> <span>撤回</span></div>
        <!-- messagetype  text-->
        <div class="reply-content" v-if="chatDetail.msgdata.msg_type=='text'">
          <p class="reply-text">{{chatDetail.msgdata.text}}</p>
        </div>
        <div class="reply-content" v-if="chatDetail.msgdata&&chatDetail.msgdata.msg_type=='link'" >
          <div class="recommond">
            <img :src="imgNormalToggle(imgDetail.avatar,imgDetail.sex)" alt @error="error(imgDetail.sex,$event)" class="iconImg">
            <div class="recommond-content">
              <p class="recommond-title">
                {{imgDetail.name}}
                <span :class="color_list[imgDetail.title-1]">{{imgDetail.title|doctorTypes}}</span>
              </p>
              <p class="recommond-subTitle">请点击进行预约</p>
            </div>
          </div>
        </div>
        <div
          class="reply-content"
          v-if="chatDetail.msgdata&&chatDetail.msgdata.msg_type=='image'"
        >
          <div class="imgMessage" @click="showImg">
            <img :src="chatDetail.msgdata.img_url" alt>
          </div>
        </div>
        <div
          class="cancel"
          v-if="chatDetail.msgdata&&chatDetail.msgdata.msg_type=='withdraw_msg'"
        >
          <p v-show="userInfoState.id!==chatDetail.from_userid">"{{chatDetail.from_username}}" 撤销了一条消息</p>
          <p v-show="userInfoState.id===chatDetail.from_userid">你撤回了一条消息</p>
        </div>
        <!-- <div
              class="reply-content"
        >医生，我想要咨询鼻炎之类的问题呢，最近不舒服医<a href="www.baidu.com">打开</a></div>-->
        <img
          :src="imgNormalToggle(chatDetail.from_userimg,userInfoState.sex)"
          alt
          class="ml20 iconImg"
          @error="error(userInfoState.sex,$event)"
        >
      </div>
    </div>
  </div>
</template>
<script>
//添加公共的混入 里面有图片的默认图和错误处理
import imgMixins from "@/assets/js/imgMixins";
import { mapState } from "vuex";
export default {
  mixins: [imgMixins],
  props: ["chatDetail"],
  data() {
    return {
         color_list: [
        "color-4DBC89",
        "color-EDAB15",
        "color-08BAC6",
        "color-29BBFF"
      ],
      timeOutEvent: "",
      imgDetail:''
    };
  },
  computed: {
    ...mapState(["userInfoState"])
  },
  methods: {
    cancelThis(){
        this.$Message.confirm("确认撤销消息么？", () => {
          this.$emit("cancelMessage", this.chatDetail);
        });
    },
    // 调用微信接口展示图片
    showImg () {
      WeixinJSBridge.invoke('imagePreview', {
        'current': this.chatDetail.msgdata.img_url,
        'urls': [this.chatDetail.msgdata.img_url]
      })
    }
  },
  created() {
      if(this.chatDetail.msgdata.msg_type=='link'){
        this.imgDetail=this.chatDetail.msgdata.link_desc ?JSON.parse(this.chatDetail.msgdata.link_desc):{};
    }
    // this.$Message.infor('网络出错！');
  }
};
</script>
<style lang="scss" scoped>
.ml20{
  margin-left:20px;
}
.mb24{
  margin-bottom: 24px;
}
.cancelButton{
  // background: yellow;
  width: 88px;
  line-height: 50px;
  text-align: center;
  height: 50px;
  font-size: 26px;
  color: $gray3;
  span{
    border-bottom: 1px solid $gray3;
  }
}
.reply-text{
   @extend %normalTitle;
}
p {
  text-align: center;
  font-size: 26px;
  font-weight: 400;
  color: $simpleGray;
}
.chat-content {
  @extend %aglinItem;
  padding-bottom: 24px;
  .reply-content {
    background: $bgwhite2;
    border: 1px solid $simpleGray;
    max-width: 480px;
    height: auto;
    border-radius: 16px;
    padding: 22px 30px;
    @extend %normalTitle;
  }
  a {
    color: $deepBlue;
    text-decoration: underline;
    padding-left: 20px;
    font-weight: 600;
  }
  display: flex;
    .iconImg {
    @extend %minICon;
    border-radius: 100px;
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
        min-width: 72px;
        padding:0 8px;
        height: 40px;
        border-radius: 8px;
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
.imgMessage {
  img {
    
    width: 100%;
    height: 400px;
  }
}
.right-chat {
  padding-left: 20px;
  .chat-content {
    margin-right:20px;
    justify-content: flex-end;
    display: flex;
  }
}
.cancel {
  color: $gray3;
  font-size: 28px;
  @extend %aglinItem;
  p{
    height: 28px;
    line-height: 28px;
  }
}
.color-29BBFF {
  background: #29bbff;
}

.color-4DBC89 {
  background: #4dbc89;
}

.color-08BAC6 {
  background: #08bac6;
}

.color-EDAB15 {
  background: #edab15;
}
</style>

