<template>
  <div>
    <section class="water">
      <div class="water-content">
        <div>
          <span>2019-03-13 15:16:48</span>
          <span class="success">收费</span>
        </div>
        <div>
          <span>A5: 13728089836</span>
        </div>
        <div>
          <span>医生：lbl</span>
          <span>现金：￥0.2</span>
        </div>
      </div>
    <div class="water-content">
        <div>
          <span>2019-03-13 15:16:48</span>
          <span class="success">收费</span>
        </div>
        <div>
          <span>A5: 13728089836</span>
        </div>
        <div>
          <span>医生：ljl</span>
          <span>现金：￥0.2</span>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  components: {
  }
};
</script>
<style lang="scss" scoped>
.water {
  margin-top: 20px;
  overflow: auto;
  max-height: 1000px;
  width: 100%;
  &-content {
    background: $bgwhite2;
    padding: 30px 20px 30px 30px;
    @include commonBorder();
    div {
      display: flex;
      justify-content: space-between;
      @extend %normalTitle;
      font-size: 30px;
      padding-bottom: 16px;
      .success {
        color: $simpleGray;
          font-weight: 600;
      }
    }
    p {
      // display: flex;
      font-size: 28px;
      color: $grayColor;
    
      // word-wrap: break-word;
      span {
        padding-right: 30px;
        word-wrap: break-word;
        &:nth-last-child(1) {
          padding-right: 0;
        }
      }
    }
  }
}
</style>


