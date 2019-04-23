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
      <order-list v-show="!hasData" :orderList="payStreamData"></order-list>
    <without-data v-show="hasData&&isLoad"></without-data>
      <load-more v-show="isShowLoad&&isLoad" @loadMore="loadMore"></load-more>
    </div>
  </div>
</template>
<script>
import {firstTable} from "@/components/common";
import orderList from "./orderList";
import functionMixins from "@/assets/js/functionMixins";
import { enterOreder } from "@/fetch/api";
export default {
  mixins: [functionMixins],
  data() {
    return {
      firstTableList: [
        {
          title: "采购次数",
          value: "0",
          location: "right"
        },
        {
          title: "进货价总额",
          value: "0",
          location: "left"
        },
        {
          title: "零售价总额",
          value: "0",
          location: "left"
        }
      ]
    };
  },
  components: {
    firstTable,
    orderList
  },
  methods: {
    getWater(val) {
      let params = {
        start_time: val.startTime,
        end_time: val.endTime,
        page: this.page,
        page_size: this.pageSize
      };
      enterOreder(params).then(res => {
        if (res.code === 1000) {
          res.data.detail.forEach(item => {
            this.payStreamData.push(item);
          });
          this.firstTableList[0].value = res.data.total_num;
          this.firstTableList[2].value = Number(res.data.totalCostPrice);
          this.firstTableList[1].value = Number(res.data.totalSalePrice);
        } else {
          this.$Message.infor(res.msg);
        }
        if ( res.data.detail.length != 10) {
          this.isShowLoad = false; //表示没有更多数据了
        }
        this.isLoad = true;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.pt200 {
  padding-top: 200px;
}
.doctor {
  // padding-top: 184px;
  // background: $bgwhite2;
  // max-height: 1000px;
  overflow: auto;
}
</style>

