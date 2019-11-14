<template>
  <div class="article">
    <div class="article-content">
      <div class="article-top">
        <div><img :src="getNormalHead(1)" class="article-logo"></div>
        <div class="ml-24px">
          <p class="normal-title">王大明医生</p>
          <p class="mt-10px"><span class="left-gray-key">费用：</span> <span class="price f15">￥100</span></p>
        </div>
      </div>
      <div class="article-infor mt-20px">
        <p v-for="(item,index) in inforArr" :key="index" class="mt-10px"><span class="left-gray-key">{{item.key}}</span><span
            class="right">{{item.value}}</span></p>
      </div>
      <slot name="entryCourse"></slot>
    </div>

  </div>
</template>

<script>
import { sexImg } from "@/assets/js/toggleMinis.js"
export default {
  mixins: [sexImg],
  props: {
    inforArr: {
      type: Array,
      default: () => [
        { key: '时间：', value: '深圳2019-05-12 下午2点-4点' },
        { key: '地点：', value: '深圳市福田区福民路东方欣悦居楼2B' },
        { key: '报名时间：', value: '2019-05-11' },
        { key: '报名人员：', value: '刘静/165656465454' }
      ]
    }
  },
  data() {
    return {
    };
  },
}
</script>

<style scoped lang="scss">
.article {
  &-content {
    background: $bgwhite2;
    padding: 24px 30px 32px 30px;
  }
  &-logo {
    @extend %mediumIcon;
  }
  &-top {
    display: flex;
    align-items: center;
  }
  &-infor {
    background: $bgWhite;
    padding: 10px 20px 20px 20px;
  }
  .right {
    font-size: 28px;
  }
}
</style>