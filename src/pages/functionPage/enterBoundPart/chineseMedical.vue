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
      <second-table
        :titleArray="titleArray"
        :contentArray="payStreamData"
        :hasData="hasData&&isLoad"
      >
        <template slot="value" slot-scope="tableValue">
          <span>{{filterValue(tableValue.objectKey,tableValue.value)}}</span>
        </template>
      </second-table>
    </div>
    <load-more v-show="isShowLoad&&isLoad" @loadMore="loadMore"></load-more>
  </div>
</template>
<script>
import { secondTable } from "@/components/common";
import functionMixins from "@/assets/js/functionMixins";
import { enterType } from "@/fetch/api";
export default {
  mixins: [functionMixins],
  data() {
    return {
      titleArray: ["药名", "规格", "数量", "金额"]
    };
  },
  components: {
    secondTable
  },
  methods: {
    filterValue(key, value) {
      switch (key) {
        case "money":
          return `￥${value}`;
          break;
        default:
          return value;
          break;
      }
    },
    getWater(val) {
      let params = {
        start_time: val.startTime,
        end_time: val.endTime,
        page: this.page,
        page_size: this.pageSize,
        recipe_type: 1
      };
      enterType(params).then(res => {
        if (res.code === 1000) {
          res.data.detail.forEach(item => {
            let params = {
              drug: item.name,
              type: item.spec,
              number: item.num,
              money: item.cost_price
            };
            this.payStreamData.push(params);
          });
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
.doctor {
  background: $bgwhite2;
  overflow: auto;
}
</style>

