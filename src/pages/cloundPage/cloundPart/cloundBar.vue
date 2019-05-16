<template>
  <div class="bar">
    <section class="medical-bar">
      <div :class="['flex-mid-center',{'nt-bar':navtiveIndex===0}]" @click="changeIndex(0)">患者病历</div>
      <div :class="['flex-mid-center',{'nt-bar':navtiveIndex===1}]" @click="changeIndex(1)">颗粒饮片</div>
      <div :class="['flex-mid-center',{'nt-bar':navtiveIndex===2}]" @click="changeIndex(2)">中药饮片</div>
      <div :class="['flex-mid-center',{'nt-bar':navtiveIndex===3}]" @click="changeIndex(3)">产品处方</div>
      <!-- <div :class="['flex-mid-center',{'nt-bar':navtiveIndex===3}]" @click="changeIndex(3)">订单查询</div>
      <div :class="['flex-mid-center',{'nt-bar':navtiveIndex===3}]" @click="changeIndex(3)">订单查询</div>
      <div :class="['flex-mid-center',{'nt-bar':navtiveIndex===3}]" @click="changeIndex(3)">订单查询</div> -->
    </section>
    <div class="bar-add">
      <img src="@/assets/images/jia@2x.png" alt="库存统计">
    </div>
    <ul class="bar-list">
      <li><span>+</span>中药饮片</li>
      <li><span>+</span>配方颗粒</li>
      <li><span>+</span>中药饮片</li>
      <li><span>+</span>成药处方</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navtiveIndex: 0
    }
  },
  methods: {
    changeIndex(index) {
      this.navtiveIndex = index;
    }
  }
}
</script>
<style lang="scss" scoped>
.bar {
  width: 100%;
  height: 96px;
  position: relative;
  background: #fafafa;
  @include commonBorder();
  .medical-bar {
    // background: #fafafa;
    width: 640px;
    z-index: 999;
    height: 96px;
    position: fixed;
    @extend %aglinItem;
    color: $simpleGray;
    font-size: 30px;
    font-weight: 500;

    overflow-x: auto;
    //去除bar 滚动条
    &::-webkit-scrollbar {
      display: none;
    }
    div {
      min-width: 160px;
      height: 100%;
      text-align: center;
    }
    .nt-bar {
      color: $greenColor;
      font-weight: 600;
      background: #ffff;
      @include commonBorder(bottom, $greenColor, 4px);
    }
  }
  &-add {
    position: absolute;
    right: 40px;
    bottom: 28px;
    img {
      @extend %searchIcon;
      // border-radius: 8px;
    }
  }
  &-list {
    background: #fff;
    border: 2px solid #cccccc;
    border-radius: 10px;
    font-size: 28px;
    color: #3f3f3f;
    letter-spacing: 0;
    color: #3f3f3f;
    line-height: 52px;
    padding: 8px 20px;
    width: 200px;
    position: absolute;
    right: 10px;
    top: 80px;
    // bottom: 200px;
    // right: 5px;
    span {
      color: $greenColor;
      font-size: 32px;
      display: inline-block;
    }
  }
}
</style>


