<template>
  <div>
    <section class="msg-bottom">
      <p class="msg-title">平台动态</p>
      <div class="news pl30">
        <img src="@/assets/images/banner-yun.png" alt>
        <div class="news-mid">
          <p>最四款曾经畅销的感冒药已经被儿科医生 拉入了黑名单，请别给孩子用了，知道… 拉入了黑名单， 拉入了黑名单， 拉入了黑名单， 拉入了黑名单，</p>
          <div class="news-mid-bottom">
            <span class="news-mid-button">资讯类别</span>
            <span class="news-mid-time">2018-07-13</span>
          </div>
        </div>
      </div>
      <div class="news pl30">
        <img src="@/assets/images/banner-yun.png" alt>
        <div class="news-mid">
          <p>最四款曾经畅销的感冒药已经被儿科医生 拉入了黑名单，请别给孩子用了，知道… 拉入了黑名单， 拉入了黑名单， 拉入了黑名单， 拉入了黑名单，</p>
          <div class="news-mid-bottom">
            <span class="news-mid-button">资讯类别</span>
            <span class="news-mid-time">2018-07-13</span>
          </div>
        </div>
      </div>
      
    </section>
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
.msg-bottom {
  margin-top: 24px;
  background: $bgwhite2;
  .msg-title {
    height: 96px;
    padding-left: 30px;
    line-height: 96px;
    @include commonBorder();
    @extend %normalTitle;
  }
  .news {
    height: 184px;
    @include commonBorder();
    @extend %aglinItem;
    img {
      width: 160px;
      height: 128px;
    }
    &-mid {
      padding-left: 24px;
      p {
        @include textEllipsis(80px, 504px, 2);
      }
      &-bottom {
        display: flex;
      }
      &-button {
        display: inline-block;
        @include newsButton(30px, 100px, 20px);
      }
      &-time {
        font-size: 24px;
        color: $borderColor;
        flex: 1;
        text-align: right;
      }
    }
  }
}
</style>


