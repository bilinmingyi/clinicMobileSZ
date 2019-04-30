<template>
  <div class="div-bottom">
    <div class="mb110"></div>
    <div class="common-bottom footerNav footer">
      <div :class="['footer-item',{'cur':navtiveIndex==0}] " @click="goRouter(0)">
        <span class="iconfont">{{navtiveIndex==0? '&#xe611;':'&#xe612;'}}</span>
        <span class="footer-text">消息</span>
      </div>
      <div :class="['footer-item',{'cur':navtiveIndex==1}] " @click="goRouter(1)">
        <span class="iconfont">{{navtiveIndex==1? '&#xe60a;':'&#xe60c; '}}</span>
        <span class="footer-text">工作</span>
      </div>
      <!-- <div :class="['footer-item',{'cur':navtiveIndex==2}] ">
            <span class="yunicon">{{navtiveIndex==0? '&#xe60f;':'&#xe610; '}}</span>
            <span class="footer-text">云药房</span>
      </div>-->
      <div :class="['footer-item',{'cur':navtiveIndex==3}] " @click="goRouter(3)">
        <span class="iconfont">{{navtiveIndex==3? '&#xe60d;':'&#xe609;'}}</span>
        <span class="footer-text">个人</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "blmyBottom",
  props: ["navtiveIndex"],
  data() {
    return {}
  },
  methods: {
    goRouter(index) {
      if (this.navtiveIndex == index) {
        return
      }
      switch (index) {
        case 0:
          this.$router.push({ name: "messagePage" })
          break
        case 1:
          this.$router.push({ name: "homePage" })
          break
        case 2:
          this.$router.push({ path: "cloundDrugPage" })
          break
        case 3:
          this.$router.push({ name: "personPage" })
          break
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.common-bottom {
  @include psFixed(bottom, 110px);
  .footer-item {
    .yunicon {
      font-size: 48px;
    }
    .footer-text {
      font-size: 22px;
    }
    flex: 1;
  }
}
</style>


