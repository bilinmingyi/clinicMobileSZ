<template>
  <div>
    <div class="psF">
      <stock-filter @allStock="allStock" @warnStock="warnStock" @hasStock="hasStock"></stock-filter>
      <input-search :buttonName="'查询'" :placeholder="'药品名称/拼音简码'" @query="inquery"></input-search>
    </div>
    <div class="pt200"></div>
    <stock-list class="stock" :stockList="payStreamData"></stock-list>
    <without-data v-show="hasData&&isLoad"></without-data>
    <load-more v-show="isShowLoad&&isLoad" @loadMore="loadMore"></load-more>
  </div>
</template>
<script>
import stockMixins from "./stockMixins";
import { stockWesternList } from "@/fetch/api";
export default {
  mixins: [stockMixins],
  methods: {
    getData(val, query = "") {
      let params = {
        medicine_name: query,
        page: this.page,
        page_size: this.pageSize,
        warn_stock: val
      };
      stockWesternList(params).then(res => {
        if (res.code === 1000) {
          res.data.forEach(item => {
            this.payStreamData.push(item);
          });
        } else {
          this.$Message.infor(res.msg);
        }
        if (res.data.length != 10) {
          this.isShowLoad = false; //表示没有更多数据了
        }
        this.isLoad = true;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.psF {
  padding-top: 96px;
  z-index: 99;
  position: fixed;
  width: 100%;
  background: #f5f5f5;
}
.stock {
  padding-top: 120px;
  overflow: auto;
}
</style>


