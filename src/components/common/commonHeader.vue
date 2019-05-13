<template>
  <div class="common">
    <div class="common-header">
      <div class="header-content">
        <img src="@/assets/images/fanghui@3x.png" class="header-left" v-show="isShowLeft" @click="leftToggle()">
        <span class="header-title">{{titleName}}</span>
      </div>
    </div>
    <div class="mt88"></div>
  </div>
</template>

<script>
export default {
  name: "blmyHeader",
  props: {
    isShowLeft: {
      type: Boolean,
      default: true
    },
    titleName: {
      type: String,
      default: "工作台"
    },
    hasLeft: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  methods: {
    leftToggle() {
      if (this.hasLeft) {
        this.$emit("leftToggle")
      } else {
        this.$emit("leftToggle")
        this.$router.go(-1)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.common-header {
  @include psFixed(top);
  line-height: 88px;
  background: #f5f5f5;
  .header-content {
    position: relative;
    width: 100%;
    text-align: center;
    @extend %flexMidCenter;
    background: $bgWhite;
    .header-left {
      position: absolute;
      left: 38px;
      height: 48px;
      width: 48px;
    }
    .header-title {
      @extend %normalTitle;
    }
  }
}
</style>


