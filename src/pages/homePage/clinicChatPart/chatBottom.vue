<template>
  <div class="chat-bottom">
    <div class="reply">
      <input class="serach-input" type="text" @focus="hideFunc">
      <div class="ml24">
        <img src="@/assets/images/tianjia@2x.png" alt @click="addFunc">
      </div>
    </div>
    <div class="function" v-show="showFuc">
      <div class="function-content mr64">
        <img src="@/assets/images/zhaopian@2x.png" alt>
        <p>照片</p>
      </div>
      <div class="function-content mr64">
        <img src="@/assets/images/huifu@2x.png" alt>
        <p>快捷回复</p>
      </div>
      <div class="function-content mr64" >
        <img src="@/assets/images/liangjie@2x.png" alt @click="goDocRecommond">
        <p>预约链接</p>
      </div>
      <!-- <div class="function-content">
        <img src="@/assets/images/tuijiang@2x.png" alt>
        <p>商品推荐</p>
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  props: ["showFuc"],
  data() {
    return {
    };
  },
  methods: {
    addFunc() {
      this.$emit('addFunc')
    },
    hideFunc() {
      this.$emit('hideFunc')
    },
    goDocRecommond(){
          this.$router.push({name:'docRecommondPage'})
    }
  }
};
</script>
<style lang="scss" scoped>
.chat-bottom {
  @include psFixed(112px);
  background: $bgwhite2;
  .reply {
    padding: 16px 32px;
    @extend %aglinItem;
    input {
      width: 590px;
      height: 80px;
      @extend %normalTitle;
      background: rgba(249, 249, 249, 1);
      border-radius: 16px;
      border: 1px solid rgba(151, 151, 151, 1);
    }
    img {
      width: 64px;
      height: 64px;
    }
  }
  .function {
    width: 100%;
    @include commonBorder(top);
    height: 224px;
    background: $bgwhite2;
    @extend %aglinItem;
    padding: 28px 56px;
    &-content {
      p {
        padding-top: 16px;
        text-align: center;
        font-size: 28px;
        color: $simpleGray;
      }
      img {
        @extend %mediumIcon;
      }
    }
  }
}
</style>

