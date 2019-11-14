<template>
  <div class="entry" @click="goDetail">
    <div class="entry-item">
      <div class="entry-logo">
        <img :src="normalGoods" alt="" @error="error($event)">
      </div>
      <div class="logo-content ">
        <p class="entry-title">宝宝辅食全攻略宝宝</p>
        <p class="entry-time">时间：2019-05-12 下午2点-4点</p>
        <p class="entry-detail">
          <span>讲师：王大明</span>
          <span>报名费：<span class="price">￥100</span></span>
        </p>
      </div>
    </div>
  </div>

</template>

<script>
import { errorImg } from "@/assets/js/toggleMinis.js"
export default {
  mixins: [errorImg],
  data() {
    return {
    };
  },
  methods: {
    goDetail() {
      this.$emit('goDetail')
    }
  }
}
</script>

<style scoped lang="scss">
.entry {
  width: 100%;
  background: $bgwhite2;
  min-height: 220px;
  &-item {
    display: flex;
  }

  &-logo {
    @extend %flexMidCenter;
    width: 290px;
    height: 218px;
    img {
      max-width: 240px;
      max-height: 164px;
    }
  }
  &-title {
    @include textEllipsis("", 420px, 2);
    font-size: 30px;
    font-weight: bold;
    color: #333333;
  }
  &-time {
    font-size: 28px;
    color: $simpleGray;
    padding: 10px 0;
  }
  &-detail {
    @extend %lRFlex;
    color: $simpleGray;
  }
  .logo-content {
    margin-top: 30px;
  }
}
</style>