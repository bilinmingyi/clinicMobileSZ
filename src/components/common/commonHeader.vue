<template>
  <div class="common">
    <div class="common-header">
      <div class="header-content">
        <!-- <img src="@/assets/images/fanghui@3x.png" class="header-left" v-show="isShowLeft" @click="leftToggle()"> -->
        <div class="header-left" v-if="isShowLeft" @click="leftToggle()"></div>
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
      // 兜底 防止刷新的时候 点击两次左边点击按钮 19-5-27
      this.$router.options.routes[1].meta.isGetClinic = false
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
      display: block;
      height: 88px;
      width: 100px;
      left: 30px;
      background: url("../../assets/images/fanghui@3x.png") no-repeat center
        center;
      background-size: 55px 55px;
      border: none;
    }
    .header-title {
      @extend %normalTitle;
    }
  }
}
</style>


