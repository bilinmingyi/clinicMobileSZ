<template>
  <div class="doctor">
    <common-header :titleName="'医生查询'"></common-header>
    <div class="mt88"></div>
    <input-search :placeholder="'医生姓名'"></input-search>
    <div class="doc-content">
      <div class="doc">
        <img src="@/assets/images/bm.png" alt>
        <div class="doc-detail">
          <p class="doc-title">
            王凯歌
            <span :class="{'docColor':docJob==0}">医师</span>
          </p>
          <p class="doc-subTitle">中山大学附属医院/耳鼻喉科</p>
        </div>
        <div class="doc-button ml64 ">推荐</div>
      </div>
    </div>
    <div class="doc-content">
      <div class="doc">
        <img src="@/assets/images/bm.png" alt>
        <div class="doc-detail">
          <p class="doc-title">
            王凯歌
            <span :class="{'docColor':docJob==1}">主任</span>
          </p>
          <p class="doc-subTitle">中山大学附属医院/耳鼻喉科</p>
        </div>
        <div class="doc-button ml64 ">推荐</div>
      </div>
    </div>
  </div>
</template>

<script>
import commonHeader from "@/components/common/commonHeader";
import inputSearch from "@/components/common/inputSearch";
export default {
  data() {
    return {
      docJob:1
    };
  },
  components: {
    commonHeader,
    inputSearch
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/common.scss";
.doc-content {
  width: 100%;
  height: 160px;
  background: $bgwhite2;
  border-bottom: 1px solid $borderColor;
  .doc {
    padding: 24px 30px;
    //  display: flex;
    @extend %aglinItem;
    img {
      @extend %mediumIcon;
    }
    &-detail {
      padding-left: 24px;
      p {
        text-align: left;
      }
    }
    &-title {
      @extend %normalTitle;
      font-weight: 600;
      span {
        width: 72px;
        height: 40px;
        background: rgba(237, 171, 21, 1);
        line-height: 40px;
        text-align: center;
        margin-left: 16px;
        color: $bgwhite2;
        font-size: 20px;
        font-weight: 400;
        display: inline-block;
      }
    }
    &-subTitle {
      padding-top: 6px;
      font-size: 28px;
      color: $simpleGray;
    }
    &-button {
      width: 136px;
      @include textLineHeight(64px);
      text-align: center;
      font-size:28px;
      color:rgba(8,186,198,1);
      font-weight: 500;
      border-radius: 8px;
      border: 2px solid rgba(8, 186, 198, 1);
    }
    .docColor{
      background: #4DBC89;
    }
  }
}
</style>


