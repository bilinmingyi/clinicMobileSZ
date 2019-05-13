<!-- 
      药品（商品）的item 一栏介绍
      介绍的话 超过两行会变...
-->
<template>
  <div class="drugs">
    <div class="drugs-img">
      <img :src="drugImg||defaultGoods" alt @error="toggleEeeor($event)">
    </div>
    <div class="drugs-title">
      <p class="drugs-desc">{{drugName}}<span class="pl5">{{drugSpec}}</span></p>
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
import { mapState } from 'vuex';
export default {
  props: {
    drugName: {
      type: String,
      default: ''
    },
    drugSpec: {
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
  computed: {
    ...mapState(['defaultGoods'])
  },
  data() {
    return {
    }
  },
  methods: {
    toggleEeeor(e) {
      e.target.src = this.defaultGoods
    }
  }
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


