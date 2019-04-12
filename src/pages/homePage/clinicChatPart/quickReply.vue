<template>
  <div class="reply">
    <div class="reply-title">
      <img src="@/assets/images/gb@2x.png" alt @click="closeReply">
      <p @click="jumpReplySetter">设置</p>
    </div>
    <div class="mt96"></div>
    <p
      class="reply-content"
      v-for="(item,index) in defaultReply"
      :key="index"
      @click="quickReplyMsg(item.replyName)"
    >
      <span>{{item.replyName}}</span>
    </p>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["defaultReply"])
  },
  methods: {
    closeReply() {
      this.$emit("closeReply");
    },
    quickReplyMsg(val) {
      this.$emit("quickReplyMsg",val);
    },
    jumpReplySetter() {
      this.$router.push({ name: "replaySettlePage" });
    }
  }
};
</script>
<style lang="scss" scoped>
.reply {
  @include psFixed(bottom, 640px);
  background: $bgwhite2;
  max-height: 640px;
  overflow: auto;
  z-index: 998;
  &-title {
    height: 96px;
    width: 100%;
    position: fixed;
    z-index: 999;
    background: $bgwhite2;
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
    // margin-top:96px;
    // overflow: auto;
    // margin-right: 50px;
    span {
      width: 100%;
      display: block;
    }
    display: flex;
    word-wrap: break-word;
    margin-left: 32px;
    margin-right: 32px;
    @include commonBorder();
    @extend %aglinItem;
    // display: block;
    min-height: 96px;
    // line-height: 96px;
    // width: 100%;
    @extend %normalTitle;
  }
  .mt96 {
    margin-top: 96px;
  }
}
</style>

