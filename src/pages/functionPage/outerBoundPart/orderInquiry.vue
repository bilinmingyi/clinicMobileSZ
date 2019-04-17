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
import firstTable from "@/components/common/firstTable";
import orderList from "./orderList";
import functionMixins from "@/assets/js/functionMixins";
import { outerOrder } from "@/fetch/api";
export default {
  mixins: [functionMixins],
  data() {
    return {
      firstTableList: [
        {
          title: "出库次数",
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
      let startStr = this.$options.filters.dateFormat(
        new Date(val.startTime),
        "yyyyMMdd"
      );
      let endStr = this.$options.filters.dateFormat(
        new Date(val.endTime),
        "yyyyMMdd"
      );
      let params = {
        date_type: "",
        start_date_str: startStr,
        end_date_str: endStr,
        page: this.page,
        page_size: this.pageSize
      };
      outerOrder(params).then(res => {
        if (res.code === 1000) {
          res.data.detail.forEach(item => {
            this.payStreamData.push(item);
          });
          this.firstTableList[0].value = Number(res.total_num);
          this.firstTableList[2].value = Number(res.data.totalCostPrice);
          this.firstTableList[1].value = Number(res.data.totalSalePrice);
        } else {
          this.$Message.infor(res.msg);
        }
        if (res.data.detail.length != 10) {
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

