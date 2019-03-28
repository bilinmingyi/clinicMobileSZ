<template>
  <div class="common-header">
    <img src="@/assets/images/fanghui@3x.png" alt="" class="header-left">
    <span class="header-title">工作台</span>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.common-header {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 88px;
  line-height: 88px;
  text-align: center;
  background: rgba(250, 250, 250, 1);
  z-index: 999;
  .header-left {
    position:absolute;
    left: 38px;
     height: 48px;
    width: 48px;

  }
  .header-title{
    font-size: 32px;
    font-weight: 400;
    color:#3F3F3F;
  }
}
</style>


