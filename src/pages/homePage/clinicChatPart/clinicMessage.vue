<template>
  <div>
    <div class="right-chat mb24">
      <p
        class="chat-time mb24"
        v-show="chatDetail.showTime"
      >{{chatDetail.msgts|dateFormat('MM月dd日 hh:mm')}}</p>
      <div
        class="chat-content"
        @touchstart="gtouchstart()"
        @touchmove="gtouchmove()"
        @touchend="gtouchend()"
      >
        <!-- messagetype  text-->
        <div class="reply-content" v-show="chatDetail.msgdata.msg_type=='text'">
          <span>{{chatDetail.msgdata.text}}</span>
        </div>
        <div class="reply-content" v-show="chatDetail.msgdata&&chatDetail.msgdata.msg_type=='link'" >
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
        <div
          class="reply-content"
          v-show="chatDetail.msgdata&&chatDetail.msgdata.msg_type=='image'"
        >
          <div class="imgMessage">
            <img :src="chatDetail.msgdata.img_url" alt>
          </div>
        </div>
        <div
          class="cancel"
          v-show="chatDetail.msgdata&&chatDetail.msgdata.msg_type=='withdraw_msg'"
        >
          <p>你撤回了一条消息</p>
        </div>
        <!-- <div
              class="reply-content"
        >医生，我想要咨询鼻炎之类的问题呢，最近不舒服医<a href="www.baidu.com">打开</a></div>-->
        <img
          :src="imgNormalToggle(userInfoState.avatar,userInfoState)"
          alt
          class="ml20"
          @error="error(userInfoState,$event)"
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
    //开始按
    gtouchstart() {
      if (this.chatDetail.msgdata.msg_type == "withdraw_msg") {
        return;
        //撤销消息不能撤回
      }
      this.timeOutEvent = setTimeout(() => {
        console.log(11)
        this.$Message.confirm("确认撤销消息么？", () => {
          this.$emit("cancelMessage", this.chatDetail);
        });
      }, 1000); //这里设置定时器，定义长按1000毫秒触发长按事件，时间可以自己改
      return false;
    },
    //手释放，如果在500毫秒内就释放，则取消长按事件，此时可以执行onclick应该执行的事件
    gtouchend() {
      clearTimeout(this.timeOutEvent);
      //清除定时器
      return false;
    },
    //如果手指有移动，则取消所有事件，此时说明用户只是要移动而不是长按
    gtouchmove() {
      clearTimeout(this.timeOutEvent); //清除定时器
      this.timeOutEvent = 0;
    },
    goRouter(){
      alert(111)
    }
  },
  created() {
      if(this.chatDetail.msgdata.msg_type=='link'){
        this.imgDetail=JSON.parse(this.chatDetail.msgdata.link_desc);
    }
    // this.$Message.infor('网络出错！');
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
    border-radius: 100px;
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
    height: 100%;
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

