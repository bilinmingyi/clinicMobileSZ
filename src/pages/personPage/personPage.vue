<template>
  <div>
    <common-header :isShowLeft="false" :titleName="'个人中心'"></common-header>
    <div class="person">
      <div class="person-content">
        <img src="@/assets/images/nan@2x.png" alt class="person-logo">
        <div class="person-mid ml30">
          <p>
            <span class="person-mid-title">demo</span>
            <span class="person-mid-year">18岁</span>
          </p>
          <p class="person-mid-subtitle">
            账号ID:
            <span class="pl24">2</span>
          </p>
        </div>

        <div class="person-right">
          <img src="@/assets/images/xiayibu@2x.png" alt>
        </div>
      </div>
    </div>
    <common-bottom :navtiveIndex="navtiveIndex"></common-bottom>
  </div>
</template>
<script>
import commonHeader from "@/components/common/commonHeader";
import commonBottom from "@/components/common/commonBottom";
export default {
  data() {
    return {
      navtiveIndex: 3
    };
  },
  components: {
    commonHeader,
    commonBottom
  }
};
</script>
<style lang="scss" scoped>
.person {
  width: 100%;
  height: 200px;
  background: $bgwhite2;
  @extend %aglinItem;
  &-content {
    width: 100%;
    @extend %aglinItem;
    padding-left: 30px;
    padding-right: 56px;
  }
  &-logo {
    @extend %mediumIcon;
  }
  &-mid {
    &-title {
      @extend %normalTitle;
      font-weight: 600;
    }
    &-year {
      width: 72px;
      height: 36px;
      display: inline-block;
      text-align: center;
      background: rgba(44, 187, 244, 1);
      border-radius: 18px;
      line-height: 36px;
      color: $bgwhite2;
      margin-left: 24px;
    }
    &-subtitle {
      font-size: 32px;
      color: $simpleGray;
      padding-top: 16px;
    }
  }
  &-right {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    img {
      @extend %searchIcon;
    }
  }
}
</style>
