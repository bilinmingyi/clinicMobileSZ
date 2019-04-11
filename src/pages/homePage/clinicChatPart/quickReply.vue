<template>
  <div class="reply">
    <div class="reply-title">
      <img src="@/assets/images/gb@2x.png" alt @click="closeReply">
      <p>设置</p>
    </div>
    <div class="reply-content">您好，有什么需要帮忙的</div>
    <div class="reply-content">请问有什么可以帮助你</div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods:{
    closeReply(){
      this.$emit('closeReply')
    }
  }
};
</script>
<style lang="scss" scoped>
.reply {
  @include psFixed(bottom, 640px);
  background: $bgwhite2;
  overflow: auto;
  z-index: 999;

  &-title {
    height: 96px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 32px;
    @extend %aglinItem;
    @include commonBorder();
    img {
      width: 76px;
      height: 76px;
      padding: 10px;
    }
    p {
      @extend %normalTitle;
    }
  }
  &-content {
    margin-left: 32px;
    @include commonBorder();
    @extend %aglinItem;
    height: 96px;
    width: 100%;
    @extend %normalTitle;
  }
}
</style>

