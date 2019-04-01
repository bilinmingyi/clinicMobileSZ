<template>
  <div class="common-input">
    <div class="input-box">
      <img @click.stop="searchName()" src="@/assets/images/sousuo@2x.png">
      <input class="serach-input " type="text" :placeholder="placeholder">
    </div>
    <div class="search-button ml26">搜索</div>
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
@import "@/assets/css/common.scss";
.common-input {
  width: 100%;
  height: 96px;
 @extend %aglinItem;
  padding: 0 30px;
  .input-box {
    
   flex:1;
    height: 64px;
    position: relative;
    img {
    @extend %searchIcon;
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
    @include deepButton(64px,104px)
  }
  /* placeHolder样式 */
  ::-webkit-input-placeholder, {
    /* Chrome/Opera/Safari */
    font-size: 32px;
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    font-size: 32px;
  }
  :-ms-input-placeholder {
    /* IE 10+ */
    font-size: 32px;
  }
  :-moz-placeholder {
    /* Firefox 18- */
    font-size: 32px;
  }

 
}
</style>


