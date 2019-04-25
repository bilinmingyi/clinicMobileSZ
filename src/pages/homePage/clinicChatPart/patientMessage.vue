<template>
  <div>
    <div class="left-chat mb50">
      <p class="chat-time mb24" v-if="chatDetail.showTime">{{chatDetail.msgts|dateFormat('MM月dd日 hh:mm')}}</p>
      <div class="chat-content">
        <img :src="imgNormalToggle(patientImg,patientSex)" alt @error="error(patientSex,$event,'patient')" class="iconImg">
        <div
          class="reply-content ml16"
          v-if="chatDetail.msgdata.msg_type=='text'"
        ><span>{{chatDetail.msgdata.text}}</span></div>
          <div class="reply-content ml16" v-if="chatDetail.msgdata && chatDetail.msgdata.msg_type=='link'">
          <div class="recommond" v-if="chatDetail.msgdata.link_type == 'treatment_order_Submission'">
            <div class="recommond-content" @click="goRoute(chatDetail.msgdata.link_url)">
              <p class="recommond-subTitle">已提交预约订单，点击查看</p>
            </div>
          </div>
        </div>
        <div
        <div class="reply-content ml16" v-if="chatDetail.msgdata.msg_type=='image'">
          <div class="imgMessage" @click="showImg">
            <img :src="chatDetail.msgdata.img_url" alt >
          </div>
        </div>
        <!-- <div
              class="reply-content ml16"
        >医生，我想要咨询鼻炎之类的问题呢，最近不舒服医<a href="www.baidu.com">打开</a></div>-->
        <div class="cancel ml16" v-if="chatDetail.msgdata.msg_type=='withdraw_msg'">
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
  props: ["chatDetail",'patientImg','patientSex'],
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
  methods:{
        // 路由跳转
    goRoute (url) {
      this.$router.push({name:'patientOrderPage',params:{orderSeqno:this.imgDetail.orderSeqno}})
    },
          // 调用微信接口展示图片
    showImg () {
      WeixinJSBridge.invoke('imagePreview', {
        'current': this.chatDetail.msgdata.img_url,
        'urls': [this.chatDetail.msgdata.img_url]
      })
    }
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
  margin-left: 20px;
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
  .imgMessage {
    img {
      width: 100%;
      height: 400px;
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


