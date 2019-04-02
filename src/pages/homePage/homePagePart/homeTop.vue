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
      <span class="subtitle">联系代表</span>
    </div>
    <div class=" flex-mid-center flex-one" @click="goPatientInfo">
      <div class="fix-img">
      <img :src="patientLogo" alt="" >
      <span class="fix-icon" v-show="haveInfo==2">5</span>
      </div>
      <span class="subtitle">患者信息</span>
    </div>

  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      haveInfo:2,
      imglogo1:require('@/assets/images/ly.png'),
      imglogo2:require('@/assets/images/ly2.png')
    };
  },
  computed:{
    patientLogo(){
      return this.haveInfo==1?this.imglogo1:this.imglogo2;
    }
  },
  methods:{
    goPatientInfo(){
      this.$router.push({path:'homePage/patientInfo'})
    }
  }
};
</script>
<style lang="scss" scoped>
.home-top {
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
  @include simpleButton(68px,124px);
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
      @include commonBorder(right)
    }
    img{
      width: 64px;
      height: 64px;
    }
    .subtitle{
      @extend %normalTitle;
      padding-left: 20px;
    }
    .fix-img{
      position: relative;
        .fix-icon{
        position: absolute;
        top: 5px;
        right: 5px;
        @extend %searchIcon;
        text-align:center;
        content: "";
        -webkit-transform: translate(50%, -50%);
        transform: translate(50%, -50%);
        border: 3px solid #fff;
        border-radius: 100px;
        color:$bgwhite2;
        background: $redColor;
        }
    }
  }
</style>


