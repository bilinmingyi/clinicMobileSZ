<template>
  <div>
    <common-header :isShowLeft="false" :titleName="'个人中心'"></common-header>
    <div class="person" @click="goPersonInfo">
      <div class="person-content">
        <img :src="imgNormalToggle(userInfoState.avatar,userInfoState.sex)" alt class="person-logo" @error="error(userInfoState.sex,$event)">

        <div class="person-mid ml30">
          <p>
            <span class="person-mid-title">{{userInfoState.name}}</span>
            <span class="person-mid-year">{{userInfoState.age}}岁</span>
          </p>
          <p class="person-mid-subtitle">
            手机号码
            <span class="pl24">{{userInfoState.mobile}}</span>
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
//添加公共的混入 里面有图片的默认图和错误处理
import imgMixins from "@/assets/js/imgMixins";
import { userInfo } from "@/fetch/api";
import { mapState } from "vuex";
import commonHeader from "@/components/common/commonHeader";
import commonBottom from "@/components/common/commonBottom";
export default {
      mixins:[imgMixins],
  data() {
    return {
      navtiveIndex: 3,
      userData: {}
    };
  },
  components: {
    commonHeader,
    commonBottom
  },
  computed: {
    ...mapState(["userInfoState"])
  },
  methods: {
    goPersonInfo() {
      this.$router.push({name: "personInfoPage"});
    }
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
    img {
      border-radius: 100px;
    }
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
