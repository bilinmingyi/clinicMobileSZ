<template>
  <div class="common-input">
    <div class="input-box">
      <img @click.stop="searchName()" src="@/assets/images/sousuo@2x.png">
      <input class="serach-input" type="text" :placeholder="placeholder">
    </div>
    <div class="search-button">搜索</div>
  </div>
</template>
<script>
export default {
  props:{
    placeholder:{
      type:String,
      default:'患者姓名/患者手机号码'
    }
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.common-input {
  width: 100%;
  height: 96px;
  display: flex;
  align-items: center;
  padding: 0 30px;
  .input-box {
    width: 560px;
    height: 64px;
    position: relative;
    img {
      width: 40px;
      height: 40px;
      position: absolute;
      top: 12px;
      left: 24px;
    }
    .serach-input {
      width: 100%;
      height: 100%;
      border-radius: 8px;
      background: rgba(237, 237, 237, 1);
      padding-left: 60px;
      font-size: 28px;
    }
  }
  .search-button {
    width: 104px;
    height: 64px;
    line-height: 64px;
    background: rgba(8, 186, 198, 1);
    border-radius: 8px;
    color:rgba(255,255,255,1);
    text-align: center;
    font-size: 28px;
    margin-left: 26px;
  }
  /* placeHolder样式 */
  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    font-size: 28px;
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    font-size: 28px;
  }
  :-ms-input-placeholder {
    /* IE 10+ */
    font-size: 28px;
  }
  :-moz-placeholder {
    /* Firefox 18- */
    font-size: 28px;
  }
  input,
  textarea,
  select,
  a:focus {
    outline: none;
  }
}
</style>


