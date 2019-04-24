<template>
  <!-- 订单查询组件 -->
  <div class="mall-type">
    <div class="order-top">
      <input-search :isShowButton="false"></input-search>
      <date-select></date-select>
    </div>
    <div class="pt200"></div>
    <mall-item
      v-for="(item,index) in mallList"
      :itemName="item.name"
      :itemTime="item.time"
      :itemMoney="item.money"
      :itemNumber="item.number"
      :key="index"
    >
      <template slot="type">
        <span class="type">诊所药房</span>
      </template>
    </mall-item>
    <without-data v-show="hasData&&isLoad"></without-data>
    <load-more v-show="isShowLoad&&isLoad" @loadMore="loadMore"></load-more>
  </div>
</template>
<script>
import { inputSearch, dateSelect } from "@/components/common";
import mallMixins from "./mallMixins";
export default {
  mixins: [mallMixins],
  data() {
    return {};
  },
  components: {
    inputSearch,
    dateSelect
  }
};
</script>
<style lang="scss" scoped>
.pt200 {
  margin-top: 100px;
}
.mall-type {
  padding-top: 96px;
  .order-top {
    position: fixed;
    width: 100%;
    background: $bgwhite2;
    z-index: 999;
  }
  .type {
    color: $simpleGray;
    font-size: 30px;
  }
}
</style>