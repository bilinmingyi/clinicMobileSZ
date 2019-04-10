<template>
  <div class="message">
    <common-header :isShowLeft="false" :titleName="'首页'"></common-header>
    <div class="msg-img">
      <img src="@/assets/images/banner-yun.png" alt>
    </div>
    <div class="msg-mid">
      <div class="msg-left ml30" @click="goMyNew">
        <div :class="[{'msg-left-img':newmsg==1}]">
          <img src="@/assets/images/xiaoxi@2x.png" alt>
        </div>
        <span class="pl24">消息</span>
      </div>
      <div class="msg-right">
        <img src="@/assets/images/xiayibu@2x.png" alt>
      </div>
    </div>
      <msg-bottom></msg-bottom>
    <commonBottom :navtiveIndex="navtiveIndex"></commonBottom>
  </div>
</template>
<script>
import commonHeader from "@/components/common/commonHeader";
import commonBottom from "@/components/common/commonBottom";
import msgBottom from "./messagePart/msgBottom";
export default {
  data() {
    return {
      navtiveIndex: 0,
      newmsg: 1 //1代表有新消息
    };
  },
  components: {
    commonHeader,
    commonBottom,
    msgBottom
  },
  methods: {
    goMyNew() {
      this.$router.push({ name: "myNewPage" });
    }
  }
};
</script>
<style lang="scss" scoped>
.msg-img {
  img {
    width: 100%;
    height: 364px;
  }
}
.msg-mid {
  width: 100%;
  height: 112px;
  background: $bgwhite2;
  @extend %aglinItem;
  .msg-left {
    flex: 1;
    @extend %aglinItem;
    img {
      width: 56px;
      height: 56px;
    }
    &-img {
      position: relative;
      &::after {
        position: absolute;
        top: 0;
        right: 0;
        width: 23px;
        height: 23px;
        content: "";
        -webkit-transform: translate(50%, -50%);
        transform: translate(50%, -50%);
        border: 3px solid #fff;
        border-radius: 100px;
        background: $redColor;
      }
    }
    span {
      font-size: 28px;
      color: $grayColor;
    }
  }
  .msg-right {
    padding-right: 30px;
    img {
      @extend %searchIcon;
    }
  }
}
</style>

