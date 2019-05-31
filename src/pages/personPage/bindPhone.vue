
<template>
  <div v-cloak class="a-fadein">
    <!--头部部分-->
    <!--主要内容-->
    <div class="content_body_top">
      <div class="phoneItem">
        <div class="phoneBlock">
          <div class="NumberBlock">
            <input type="text" placeholder="请输入手机号码" v-model="tel">
            <button v-bind:disabled="checkSubmitFlg" :class="[{'disableButton':sendMsgDisabled}]">
              <span v-if="sendMsgDisabled">{{time+'秒后获取'}}</span>
              <span v-if="!sendMsgDisabled" @click="sendCode()">获取验证码</span>
            </button>
          </div>
          <div class="verificationCodeBlock">
            <input type="text" placeholder="请输入短信验证码" v-model="code">
          </div>
          <footer>
            <div @click="save">确定</div>
          </footer>
        </div>
      </div>
    </div>
    <!--主要内容-->
  </div>
</template>
<script>
import { getMessageCode, updateMoblie } from "@/fetch/api";
import { mapActions } from "vuex"
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
    ...mapActions(['getUserInfo']),
    //获取验证码
    sendCode() {
      let self = this;
      if (self.tel == "") {
        this.$Message.infor("手机号不能为空！");
        return false;
      }
      if (!/^\d{11}$/.test(self.tel)) {
        this.$Message.infor('请填写正确的手机号码!')
        // this.$refs.phoneNum.focus()
        return false
      }
      self.checkSubmitFlg = true;
      if ((self.sendMsgDisabled = true)) {
        let interval = window.setInterval(function () {
          if (self.time-- <= 0) {
            self.time = 60;
            self.sendMsgDisabled = false;
            self.checkSubmitFlg = false;
            window.clearInterval(interval);
          }
        }, 1000);
      }
      getMessageCode({ mobile: self.tel }).then(res => {
        if (res.code === 1000) {
        } else {
          this.$Message.infor(res.msg);
        }
        // console.log(res);
      });
    },
    save() {
      let self = this;
      //校正
      if (self.tel == "") {
        this.$Message.infor("手机号不能为空");
        return false;
      }
      if (!/^\d{11}$/.test(self.tel)) {
        this.$Message.infor('请填写正确的手机号码!')
        // this.$refs.phoneNum.focus()
        return false
      }
      if (self.code == "") {
        this.$Message.infor("验证码不能为为空");
        return false;
      }
      let params = {
        mobile: self.tel,
        code: self.code
      };

      updateMoblie(params).then(res => {
        if (res.code == 1000) {
          this.$Message.infor('保存成功！', () => {
            this.getUserInfo();
            this.$router.go(-1)
          })
          //更新vuex数据
        } else if (res.code == 300002) {
          this.$Message.infor('手机号已占用');
        } else {
          this.$Message.infor('系统错误');
        }
      });
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
  .disableButton {
    background: $gray3;
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

