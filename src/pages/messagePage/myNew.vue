<template>
  <div>
    <common-header :titleName="'我的消息'"></common-header>
    <div class="newlist">
      <div class="news">
        <img src="@/assets/images/bm.png" alt>
        <div class="news-detail">
          <p class="news-title">
            <span class="news-title-left">培训课程</span>
            <span class="news-title-right">2018-03-22 00:00</span>
          </p>
          <p class="news-content">您有一个新的课程，请留意</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import commonHeader from "@/components/common/commonHeader";
export default {
  data() {
    return {};
  },
  components: {
    commonHeader
  }
};
</script>
<style lang="scss" scoped>
.newlist {
  padding: 10px 30px;
  .news {
    @extend %aglinItem;
    width: 100%;
    padding: 40px 30px;
    height: auto;
    margin-top: 48px;
    background: #ffffff;
    box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    img {
      @extend %mediumIcon;
    }
    &-detail {
      padding-left: 30px;
    }
    &-title {
      display: flex;
      width: 500px;
      font-size: 30px;
      justify-content: space-between;
      &-left {
        flex: 1;
        font-weight: 600;
        color: $blueColor;
      }
      &-right {
        color: #6c6c6c;
      }
    }
    &-content{
      padding-top: 20px;
      @extend %normalTitle;
    }
  }
}
</style>


