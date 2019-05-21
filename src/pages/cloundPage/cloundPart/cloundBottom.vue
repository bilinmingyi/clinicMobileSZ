<template>
  <div class="clound-bottom">
    <div class="left">
      <span>总金额</span>
      <span class="red">￥566</span>
    </div>
    <div class="temporary">临时保存</div>
    <div class="end">结束就诊</div>
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
.clound-bottom {
  @include commonBorder(top);
  position: absolute;
  bottom: 0;
  left: 0;
  background: #ffffff;
  padding: 0 30px;
  height: 96px;
  width: 100%;
  z-index: 99;
  color: $grayColor;
  @extend %aglinItem;
  font-size: 32px;
  justify-content: space-between;
  .red {
    color: $redColor;
    padding-left: 16px;
  }
  .temporary {
    @include simpleButton(72px, 184px, 30px);
    border-radius: 8px;
  }
  .end {
    @include deepButton(72px, 184px, 30px);
    border-radius: 8px;
  }
}
</style>


