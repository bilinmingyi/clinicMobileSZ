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
    <div class="mid-left">
      <img src="@/assets/images/lx.png" alt="">
      <span>联系代表</span>
    </div>
    <div class="mid-right">
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
  }
};
</script>
<style lang="scss" scoped>
.home-top {
  padding: 40px 36px 48px 36px;
  width: 100%;
  height: 184px;
  background: rgba(255, 255, 255, 1);
  display: flex;
  align-items: center;
  .top-left {
    width: 112px;
    img {
      width: 112px;
      height: 112px;
    }
  }
  .top-mid{
    padding-left: 20px;
    flex: 1;
  }
  .top-right {
    width: 128px;
    height: 64px;
    background: rgba(235, 248, 249, 1);
    border-radius: 8px;
    border: 2px solid rgba(8, 186, 198, 1);
    font-size: 24px;
    line-height: 64px;
    text-align: center;
  }
}
 .home-mid{
    width: 100%;
    height: 148px;
    background: #ffffff;;
    display: flex;
    .mid-left{
      width: 50%;
      border-right: 1px solid #7c7c7c;
    }
  }
</style>


