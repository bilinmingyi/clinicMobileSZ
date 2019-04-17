<template>
  <div>
    <div class="pt96"></div>
      <date-select
      @selectToday="selectToday"
      @selectYesterday="selectYesterday"
      @selectThisMonth="selectThisMonth"
      @selectLastMonth="selectLastMonth"
      @selectQuery="selectQuery"
    ></date-select>
    <div class="pt200"></div>
    <div class="doctor">
      <first-table :firstTableList="firstTableList">
        <template slot="left">￥</template>
        <template slot="right" class="pl5">次</template>
      </first-table>
          <order-list></order-list>
          <without-data v-show="hasData&&isLoad"></without-data>
      <load-more v-show="isShowLoad&&isLoad" @loadMore="loadMore"></load-more>
    </div>

  </div>
</template>
<script>
import firstTable from "@/components/common/firstTable";
import orderList from "./orderList";
import functionMixins from "@/assets/js/functionMixins"
export default {
  mixins: [functionMixins],
  props:{
    firstTableList:{
      type:Array,
      default:()=>[]
    }
  },
  data() {
    return {
    };
  },
  components: {
    firstTable,
    orderList
  },
  methods: {

  }
};
</script>
<style lang="scss" scoped>
.pt200{
  padding-top: 200px;
}
.doctor {
  // padding-top: 184px;
  // background: $bgwhite2;
  // max-height: 1000px;
  overflow: auto;
}
</style>

