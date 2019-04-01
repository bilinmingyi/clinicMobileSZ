<template>
<div>
  <div class="home-top">
    <div class="top-left">
      <img src="@/assets/images/menzhen@2x.png" alt>
    </div>
    <div class="top-mid">
      <p class="black-title pb16">深圳淳道门诊部</p>
      <p class="gray-font">服务剩余时间：30天</p>
    </div>
    <div class="top-right">服务详情</div>
  </div>
  <hr class="full-screen-hr"></hr>
  <div class="home-mid">
    <div class="mid-left flex-mid-center flex-one">
      <img src="@/assets/images/lx.png" alt="">
      <span>联系代表</span>
    </div>
    <div class=" flex-mid-center flex-one" @click="goPatientInfo">
      <img src="@/assets/images/ly.png" alt="">
      <span>患者信息</span>
    </div>

  </div>
</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods:{
    goPatientInfo(){
      this.$router.push({path:'homePage/patientInfo'})
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/common.scss";
.home-top {
  margin-top: 88px;
  padding: 40px 36px 48px 36px;
  width: 100%;
  height: 184px;
  background: $bgwhite2;
  @extend %flexMidCenter;
  .top-left {
    width: 112px;
    img {
      @extend %mediumIcon;
    }
  }
  .top-mid{
    padding-left: 20px;
    flex: 1;
  }
  .top-right {
  @include simpleButton(68px,124px)
  }
}
 .home-mid{
    width: 100%;
    height: 148px;
    background: $bgwhite2;
    display: flex;
    .mid-left{
      flex: 1;
      width: 50%;
      border-right: 1px solid $borderColor;
    }
    img{
      width: 64px;
      height: 64px;
    }
    span{
      @extend %normalTitle;
      padding-left: 20px;
    }
  }
</style>


