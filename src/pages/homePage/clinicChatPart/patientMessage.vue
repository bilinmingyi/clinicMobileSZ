<template>
  <div>
    <div class="left-chat mb50">
      <p class="chat-time mb24" v-show="chatDetail.showTime">{{chatDetail.msgts|dateFormat('MM月dd日 hh:mm')}}</p>
      <div class="chat-content">
        <img :src="imgNormalToggle(patientImg,chatDetail)" alt @error="error(chatDetail,$event)">
        <div
          class="reply-content ml16"
          v-show="chatDetail.msgdata.msg_type=='text'"
        ><span>{{chatDetail.msgdata.text}}</span></div>
        <div class="reply-content ml16" v-show="chatDetail.msgdata.msg_type=='link'">
          <div class="recommond">
            <img :src="imgNormalToggle(imgDetail.avatar,imgDetail)" alt @error="error(imgDetail,$event)">
            <div class="recommond-content">
              <p class="recommond-title">
                 {{imgDetail.name}}
                <span :class="color_list[imgDetail.title-1]">{{imgDetail.title|doctorTypes}}</span>
              </p>
              <p class="recommond-subTitle">请点击进行预约</p>
            </div>
          </div>
        </div>
        <div class="reply-content ml16" v-show="chatDetail.msgdata.msg_type=='image'">
          <div class="imgMessage">
            <img :src="chatDetail.msgdata.img_url" alt>
          </div>
        </div>
        <!-- <div
              class="reply-content ml16"
        >医生，我想要咨询鼻炎之类的问题呢，最近不舒服医<a href="www.baidu.com">打开</a></div>-->
        <div class="cancel ml16" v-show="chatDetail.msgdata.msg_type=='withdraw_msg'">
          <p>对方撤回了一条消息</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import imgMixins from "@/assets/js/imgMixins";
export default {
  mixins:[imgMixins],
  props: ["chatDetail",'patientImg'],
  data() {
    return {
         color_list: [
        "color-4DBC89",
        "color-EDAB15",
        "color-08BAC6",
        "color-29BBFF"
      ],
      imgDetail:''
    };
  },
  created(){
    if(this.chatDetail.msgdata.msg_type=='link'){
          this.imgDetail=this.chatDetail.msgdata.link_desc ?JSON.parse(this.chatDetail.msgdata.link_desc):{};
    }
    
  }
};
</script>
<style lang="scss" scoped>
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
  a {
    color: $deepBlue;
    text-decoration: underline;
    padding-left: 20px;
    font-weight: 600;
  }
  display: flex;
  img {
    @extend %minICon;
    border-radius: 100px;
  }
  .imgMessage {
    img {
      width: 100%;
      height: 100%;
    }
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
        height: 40px;
        padding:0 8px;
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
.right-chat {
  .chat-content {
    justify-content: flex-end;
    display: flex;
  }
}
.cancel {
  color: $gray3;
  font-size: 28px;
  @extend %aglinItem;
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


