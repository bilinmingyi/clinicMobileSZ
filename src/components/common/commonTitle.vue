<!-- 公共标题 -->
<template>
  <div class="title" @click="clickTitle">
    <div class="title-content">
      <div class="leftContent">
        <slot name="leftImg"></slot>
        <p :class="{'leftIcon':haveLeft}">{{titleName}}</p>
        <slot name="otherContent"></slot>
      </div>

      <slot name="rightContent"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'blmyTitle',
  props: {
    haveLeft: {
      type: Boolean,
      default: true
    },
    titleName: {
      type: String,
      default: '基本信息'
    }
  },
  data() {
    return {}
  },
  methods: {
    clickTitle() {
      this.$emit('clickTitle')
    }
  }
}
</script>
<style lang="scss" scoped>
.title {
  background: $bgwhite2;
  width: 100%;
  height: 96px;

  &-content {
    height: 100%;
    padding: 0 32px 0 48px;
    @extend %aglinItem;
    justify-content: space-between;
    @include commonBorder();
    p {
      @extend %normalTitle;
    }
    .leftIcon {
      position: relative;
    }
    .leftContent {
      @extend %aglinItem;
    }
    .leftIcon::after {
      position: absolute;
      content: "";
      left: -20px;
      top: 2px;
      height: 40px;
      width: 8px;
      background: $greenColor;
    }
  }
}
</style>


