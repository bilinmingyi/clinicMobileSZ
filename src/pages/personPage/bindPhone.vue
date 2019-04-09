
<template>
  <div v-cloak class="a-fadein">
    <!--头部部分-->
    <!--主要内容-->
    <div class="content_body_top">
      <div class="phoneItem">
        <div class="phoneBlock">
          <div class="NumberBlock">
            <input type="text" placeholder="请输入手机号码" v-model="tel">
            <button @click="sendCode()" v-bind:disabled="checkSubmitFlg">
              <span v-if="sendMsgDisabled">{{time+'秒后获取'}}</span>
              <span v-if="!sendMsgDisabled">获取验证码</span>
            </button>
          </div>
          <div class="verificationCodeBlock">
            <input type="text" placeholder="请输入短信验证码" v-model="code">
          </div>
          <footer>
            <div>确定</div>
          </footer>
        </div>
      </div>
    </div>
    <!--主要内容-->
  </div>
</template>
<script>
import { getMessageCode } from "@/fetch/api";
export default {
  data() {
    return {
      tel: "",
      code: "",
      time: 60,
      sendMsgDisabled: false,
      checkSubmitFlg: false,
      canSure: false
    };
  },
  watch: {
    tel(curVal, oldVal) {
      if (curVal != "") {
        this.canSure = true;
      } else {
        this.canSure = false;
      }
    }
  },
  methods: {
    //获取验证码
    sendCode() {
      let self = this;
      if (self.tel == "") {
        modal("手机号不能为空！", 1500);
        return false;
      }
      var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
      if (!reg.test(self.tel)) {
        modal("请输入正确的手机号", 1500);
        return false;
      }
      self.checkSubmitFlg = true;
      getMessageCode({'mobile':self.tel}).then(res=>{
        console.log(res)
      })
      //TODO
      // self.$http
      //   .post("${'/sms/chkCode/mobileBind'.url()}", {
      //     mobile: self.tel
      //   })
      //   .then(
      //     function(res) {
      //       var _data = res.data;
      //       if (_data.code == 1000) {
      //         if ((self.sendMsgDisabled = true)) {
      //           let interval = window.setInterval(function() {
      //             if (self.time-- <= 0) {
      //               self.time = 60;
      //               self.sendMsgDisabled = false;
      //               self.checkSubmitFlg = false;
      //               window.clearInterval(interval);
      //             }
      //           }, 1000);
      //         }
      //       }
      //     },
      //     function(err) {
      //       modal("数据异常" + _data.code, 1500);
      //     }
      //   );
    },
    save() {
      let self = this;
      //校正
      if (self.tel == "") {
        modal("手机号不能为空", 1500);
        return false;
      }
      var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
      if (!reg.test(self.tel)) {
        modal("请输入正确的手机号", 1500);
        return false;
      }
      if (self.code == "") {
        modal("验证码不能为为空", 1500);
        return false;
      }
      //TODO
      self.$http
        .post("${'/user/mobile/update'.url()}", {
          mobile: self.tel,
          code: self.code
        })
        .then(
          function(res) {
            var _data = res.data;
            if (_data.code == 1000) {
              modal("保存成功", 1500);
              this.$router.push({name:'personPage'})
              // window.location.href =
              //   "${'/weixin/mobilePage?SCOPE_backUri=/weixin/centerPage'.url()}";
            } else if (_data.code == 300002) {
              modal("手机号已占用", 1500);
            } else {
              modal("系统错误：" + _data.code, 1500);
            }
          },
          function(err) {
            modal("数据异常" + _data.code, 1500);
          }
        );
    }
  }
};
</script>
<style lang="scss" scoped>
input {
  font-size: 32px;
}
input::-webkit-input-placeholder {
  font-size: 32px;
}
input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  font-size: 32px;
}
input:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  font-size: 32px;
}
input:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  font-size: 32px;
}
.verificationCodeBlock,
.NumberBlock {
  @extend %aglinItem;
  height: 96px;
  background: $bgwhite2;
  padding: 0 30px;
  justify-content: space-between;
  @include commonBorder();
  button {
    width: 160px;
    height: 64;
    border: 0px;
    border-radius: 10px;
    line-height: 64px;
    text-align: center;
    background: $yellowColor;
    color: $bgwhite2;
    font-size: 28px;
  }
  input {
    flex: 1;
    font-size: 32px;
  }
}
footer {
  @extend %columnMC;
  @include psFixed(bottom, 111px);
  background: $bgwhite2;
  div {
    @include deepButton(80px, 690px, 30px);
  }
}
</style>

