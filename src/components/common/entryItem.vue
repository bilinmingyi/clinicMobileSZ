<template>
  <div :class="['entry',{'hasBorder':hasBorder}]" @click="goDetail">
    <div class="entry-item">
      <div class="entry-logo">
        <img :src="entryData.img_url" alt="" @error="error($event)">
      </div>
      <div class="logo-content ">
        <p class="entry-title">{{entryData.title}}</p>
        <p class="entry-time">时间：{{entryData.pubdate|dateFormat('yyyy-MM-dd hh:mm')}}</p>
        <p class="entry-detail">
          <span>讲师：{{entryData.author}}</span>
          <span>报名费：<span class="price">￥{{entryData.price}}</span></span>
        </p>
      </div>
    </div>
  </div>

</template>

<script>
import { errorImg } from "@/assets/js/toggleMinis.js"
export default {
  mixins: [errorImg],
  props: {
    entryData: {
      type: Object,
      default: () => ({
        title: '',
        pubdate: '',
        author: '',
        price: '',
        img_url: ''
      })
    },
    hasBorder: {
      type: Boolean,
      default: false
    }
  },
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
.hasBorder {
  @include commonBorder();
}
</style>