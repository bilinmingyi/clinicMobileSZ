<!-- 药的选择  -->
<template>
  <div class="selected">
    <section class="selected-title">
      <div class="selected-left">
        药品 <span>10味</span>
      </div>
      <div class="temp-btn">
        导入模板
      </div>
      <div class="temp-btn">
        保存模板
      </div>
      <div class="temp-btn">
        辅助开方
      </div>
    </section>
    <section class="selected-content">
      <div class="left-list">
        <div class="selected-item">
          <img src="@/assets/images/sc@2x.png" alt="">
          <span>盐女贞子/15克</span>
        </div>
        <div class="selected-item">
          <img src="@/assets/images/sc@2x.png" alt="">
          <span>盐女贞子/15克</span>
        </div>
        <div class="selected-item">
          <img src="@/assets/images/sc@2x.png" alt="">
          <span>盐女贞子盐女贞子盐女贞子盐女贞子盐女贞子/15克</span>
        </div>
        <div class="selected-item">
          <img src="@/assets/images/sc@2x.png" alt="">
          <span>盐女贞子/15克</span>
        </div>
      </div>
      <div class="right-list">
        <div class="selected-item">
          <img src="@/assets/images/sc@2x.png" alt="">
          <span>盐女贞子/15克</span>
        </div>
        <div class="selected-item">
          <img src="@/assets/images/sc@2x.png" alt="">
          <span>盐女贞子/15克</span>
        </div>
        <div class="selected-item">
          <img src="@/assets/images/sc@2x.png" alt="">
          <span>盐女贞子/15克</span>
        </div>
        <div class="selected-item">
          <img src="@/assets/images/sc@2x.png" alt="">
          <span>盐女贞子/15克</span>
        </div>
      </div>
    </section>
    <section class="selected-add">
      添加药品
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
.selected {
  color: $grayColor;
  // height: auto;
  overflow: auto;
  background: #ffffff;
  width: 100%;
  &-title {
    height: 96px;
    padding: 0 30px;
    @extend %aglinItem;
    justify-content: space-between;
    font-size: 32px;
    @include commonBorder();
  }
  &-left {
    color: $simpleGray;
    span {
      color: #333;
      font-weight: 600;
      padding-left: 16px;
    }
  }
  .temp-btn {
    @include simpleButton(64px, 158px, 30px);

    border-radius: 32px;
  }
  &-content {
    padding: 40px 30px 0px 40px;
    display: flex;
  }
  .left-list {
    width: 50%;
  }
  .right-list {
    width: 50%;
  }
  &-item {
    margin-bottom: 48px;
    @extend %aglinItem;
    font-size: 30px;
    img {
      @extend %searchIcon;
      margin-right: 13px;
    }
  }
  &-add {
    margin: 30px auto 48px auto;
    @include simpleButton(80px, 690px, 30px);
    border-radius: 40px;
    @extend %flexMidCenter;
  }
}
</style>


