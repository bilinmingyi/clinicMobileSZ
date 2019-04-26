<template>
  <!-- 药品推荐页面 -->
  <div class="recommond">
    <div class="recommond-input">
      <input-search :placeholder="'商品名称'"></input-search>
    </div>
    <div class="recommond-select">
      <input-select :isShowInput="false" :title="'商品类别'" :modelValue="'热门'"></input-select>
    </div>
    <div class="recommond-list">
      <drugsItem v-for="(item,index) in recommondList" :key="index">
        <template slot="rightBottom">
          <div class="button">推荐</div>
        </template>
      </drugsItem>
      <without-data v-show="hasData&&isLoad"></without-data>
      <load-more v-show="isShowLoad&&isLoad" @loadMore="loadMore"></load-more>
    </div>
  </div>
</template>
<script>
import {
  drugsItem,
  withoutData,
  loadMore,
  inputSearch,
  inputSelect
} from "@/components/common";
export default {
  data() {
    return {
      recommondList: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      isLoad: false,
      isShowLoad: true
    };
  },
  computed: {
    hasData() {
      return this.recommondList.length === 0;
    }
  },
  components: {
    drugsItem,
    withoutData,
    loadMore,
    inputSearch,
    inputSelect
  },
  methods: {
    loadMore() {
      console.log(22);
    }
  }
};
</script>
<style lang="scss" scoped>
.recommond {
  position: relative;
  &-input {
    //默认在头部地下的Input布局
    position: absolute;
    width: 100%;
    top: 0px;
    left: 0px;
    z-index: 99;
    background: #fafafa;
    padding-bottom: 20px;
  }
  &-select {
    width: 100%;
    position: absolute;
    top: 110px;
    left: 0px;
    z-index: 99;
  }
  &-list {
    padding-top: 210px;
    box-sizing: border-box;
    overflow: hidden;
    padding-bottom: 40px;
    height: calc(100vh - 100px);
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    .button {
      width: 136px;
      height: 64px;
      line-height: 64px;
      text-align: center;
      border-radius: 8px;
      font-size: 28px;
      color: $bgwhite2;
      background: $redColor;
    }
  }
}
</style>