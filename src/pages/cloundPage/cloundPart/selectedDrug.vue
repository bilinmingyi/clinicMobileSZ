<!-- 
药的选择
：key 一定要写 因为keep-alive会通过key值去分析不同的组件
  -->
<template>
  <div class="selected" :key="cloundTab.id">
    <section class="selected-title" v-if="isShowALLDetail">
      <div class="selected-left">
        药品 <span>10味</span>
      </div>
      <div class="selected-right">
        <div class="temp-btn">
          导入模板
        </div>
        <div class="temp-btn">
          保存模板
        </div>
        <div class="temp-btn" v-if="cloundTab.key==='GRAIN'">
          辅助开方
        </div>
      </div>
    </section>
    <section class="selected-content" v-if="isShowALLDetail">
      <div class="left-list">
        <div class="selected-item">
          <img src="@/assets/images/sc@2x.png" alt="">
          <span>盐女贞子/15克</span>
        </div>
        <div class="selected-item">
          <img src="@/assets/images/sc@2x.png" alt="">
          <span>盐女贞子/15克</span>
        </div>
        <div class="selected-item">
          <img src="@/assets/images/sc@2x.png" alt="">
          <span>盐女贞子盐女贞子盐女贞子盐女贞子盐女贞子/15克</span>
        </div>
        <div class="selected-item">
          <img src="@/assets/images/sc@2x.png" alt="">
          <span>盐女贞子/15克</span>
        </div>
        <div class="selected-item">
          <img src="@/assets/images/sc@2x.png" alt="">
          <span>盐女贞子/15克</span>
        </div>
        <div class="selected-item">
          <img src="@/assets/images/sc@2x.png" alt="">
          <span>盐女贞子/15克</span>
        </div>
        <div class="selected-item">
          <img src="@/assets/images/sc@2x.png" alt="">
          <span>盐女贞子/15克</span>
        </div>
        <div class="selected-item">
          <img src="@/assets/images/sc@2x.png" alt="">
          <span>盐女贞子/15克</span>
        </div>
      </div>
      <section class="selected-add">
        添加药品
      </section>
    </section>
    <section class="selected-content2" v-if="isShowOtherDetail">
      <section class="selected-top">
        <div class="selected-add2">
          添加药品
        </div>
        <div class="delte-btn" v-if="isShowDelete" @click="deleteTab">
          删除处方
        </div>
      </section>
      <div class="left-list2">
        <div class="selected-item2">
          <img src="@/assets/images/sc@2x.png" alt="">
          <span>盐女贞子/15克</span>
        </div>
        <div class="selected-item2">
          <img src="@/assets/images/sc@2x.png" alt="">
          <div>
            <span>葡萄糖酸钙口服溶液（12支/盒）*3盒</span>
            <p>用法：口服、每天两次、总共七天</p>
          </div>

        </div>
      </div>
    </section>

  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
export default {
  data() {
    return {
      showALLDetail: ["GRAIN", "CHINA_MEDICINE"],
      showDelete: ["PROJECT", "METERIAL"]
    }
  },
  computed: {
    ...mapState(["cloundTab"]),
    isShowALLDetail() {
      return this.showALLDetail.includes(this.cloundTab.key)
    },
    isShowOtherDetail() {
      return !this.showALLDetail.includes(this.cloundTab.key)
    },
    isShowDelete() {
      return this.showDelete.includes(this.cloundTab.key)
    }
  },
  methods: {
    ...mapMutations(["deleteCloundTab"]),
    deleteTab() {
      this.$Message.confirm('确认删除处方么？', () => {
        this.deleteCloundTab(this.cloundTab)
      })
    }
  }

}
</script>
<style lang="scss" scoped>
.selected {
  color: $grayColor;
  overflow: auto;
  background: #ffffff;
  width: 100%;
  &-title {
    height: 96px;
    padding: 0 30px;
    @extend %aglinItem;
    flex-wrap: flex-end;
    // justify-content: right;
    justify-content: space-between;
    font-size: 32px;
    @include commonBorder();
  }
  &-left {
    color: $simpleGray;
    span {
      color: #333;
      font-weight: 600;
      padding-left: 16px;
    }
  }
  &-right {
    display: flex;
  }
  .temp-btn {
    @include simpleButton(64px, 158px, 30px);
    margin: 0 5px;
    border-radius: 32px;
  }
  &-content {
    padding: 40px 30px 0px 40px;
  }
  .left-list {
    display: flex;
    flex-wrap: wrap;
  }
  &-item {
    width: 50%;
    margin-bottom: 48px;
    @extend %aglinItem;
    font-size: 30px;
    img {
      @extend %searchIcon;
      margin-right: 13px;
    }
  }
  &-add {
    margin: 30px auto 48px auto;
    @include simpleButton(80px, 690px, 30px);
    border-radius: 40px;
    @extend %flexMidCenter;
  }
  &-top {
    @include commonBorder();
    height: 96px;
    padding: 16px 30px;
    display: flex;
    justify-content: space-between;
  }
  &-add2 {
    @include simpleButton(64px, 184px, 30px);
    border-radius: 40px;
    @extend %flexMidCenter;
  }
  .left-list2 {
    width: 100%;
    padding: 0px 30px;
    margin-bottom: 60px;
  }
  &-item2 {
    width: 100%;
    // margin-bottom: 48px;
    padding: 32px 0px;
    @extend %aglinItem;
    font-size: 30px;
    img {
      @extend %searchIcon;
      margin-right: 32px;
    }
    @include commonBorder();
  }

  .delte-btn {
    background: $redColor;
    color: $bgwhite2;
    width: 168px;
    height: 64px;
    text-align: center;
    line-height: 64px;
    font-size: 28px;
    border-radius: 8px;
  }
}
</style>


