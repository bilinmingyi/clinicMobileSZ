<!-- 
      药品（商品）的item 一栏介绍
      介绍的话 超过两行会变...
-->
<template>
  <div class="drugs">
    <div class="drugs-img">
      <img :src="drugImg||normalGoods" alt>
    </div>
    <div class="drugs-title">
      <p class="drugs-desc">{{drugName}}</p>
      <div class="drugs-bottom">
        <p class="money">￥{{drugMoney}}</p>
        <p>
          <slot name="rightBottom">数量：{{drugNum}}</slot>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    drugName: {
      type: String,
      default: ''
    },
    drugImg: {
      type: String,
      default: ''
    },
    drugMoney: {
      type: [String, Number],
      default: '0'
    },
    drugNum: {
      type: [String, Number],
      default: '0'
    }
  },
  name: "blmyDrugsItem",
  data() {
    return {
      normalGoods: require('@/assets/images/normalGoods.png')
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.drugs {
  display: flex;
  width: 100%;
  height: 224px;
  padding: 32px;
  background: $bgwhite2;
  @include commonBorder();
  &-img {
    border: 1px solid $borderColor;
    @include sameWH(160px);
    img {
      padding: 7px;
      @include sameWH(160px);
    }
  }
  &-title {
    margin-left: 20px;
  }
  &-desc {
    width: auto;
    // word-wrap:normal;
    font-size: 28px;
    @include textEllipsis(80px, 504px, 2);
    color: $grayColor;
  }
  &-bottom {
    color: $grayColor;
    display: flex;
    justify-content: space-between;
    margin-top: 35px;
    font-size: 32px;
    .money {
      color: $redColor;
    }
  }
}
</style>


