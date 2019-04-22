<template>
  <div class="preview">
    <div class="title-block bottom-link">
      <button class="title-btn" @click.stop="cancelSend"></button>
      <div class="title-text">
      </div>
      <div class="send-block">
        <button class="send-btn" @click.stop="sendImg">发送</button>
      </div>
    </div>
    <div class="img-content">
      <img :src="imgUrl">
    </div>
  </div>
</template>

<script>

export default {
  name: 'imgPreview',
  props: ['imgUrl'],
  methods: {
    sendImg () {
      this.$emit('send')
    },
    cancelSend () {
      this.$emit('cancel')
    }
  }
}
</script>

<style lang="scss" scoped>
  .preview {
    // position: fixed;
    top: 0;
    left: 0;
    bottom:0;
    // right: 0;
    z-index: 999;
    width: 100vw;
    height: 100vh;
    background: #000;

    .img-content {
      width: 100%;
      height: calc(100% - 88px);
      @extend %aglinItem;

      img {
        width: 95%;
      }
    }
  }

  .bottom-link {
    border-bottom: 1px solid $lineColor;
  }

  .title-block {
    background: #fafafa;
    text-align: center;
    @include psFixed(top);
    @extend %displayFlex;

    .title-btn {
      display: block;
      height: 88px;
      width: 100px;
      background: url("../../assets/images/fanghui@3x.png") no-repeat center center;
      background-size: 55px 55px;
      border: none;
    }

    .title-text {
      flex: 1;
      line-height: 88px;
      color: $depthTextColor;
      font-size: 32px;
      font-weight: 500;
    }

    .send-block {
      @extend %aglinItem;

      .send-btn {
        background: $greenColor;
        border: none;
        color: #ffffff;
        padding: 12px 20px;
        border-radius: 8px;
        margin: 0 20px;
      }
    }
  }
</style>
