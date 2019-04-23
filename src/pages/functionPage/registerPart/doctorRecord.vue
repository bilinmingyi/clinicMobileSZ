<template>
  <div>
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
      <second-table
        :titleArray="titleArray"
        :contentArray="payStreamData"
        :hasData="hasData&&isLoad"
      >
        <template slot="value" slot-scope="tableValue">
          {{tableValue.value}}
          <!-- {{tableValue.objectKey}} -->
        </template>
        <!-- <template  slot="noData" v-show="hasData" ></template> -->
      </second-table>
      <!-- <div class="no-platform" v-show="hasData&&isLoad">没有更多数据了...</div> -->
      <load-more v-show="isShowLoad&&isLoad" @loadMore="loadMore"></load-more>
    </div>
  </div>
</template>
<script>
import { registerDoctor, registerStream } from "@/fetch/api";
import firstTable from "@/components/common/firstTable";
import secondTable from "@/components/common/secondTable";
import functionMixins from "@/assets/js/functionMixins"
export default {
  mixins: [functionMixins],
  data() {
    return {
      firstTableList: [
        {
          title: "挂号次数",
          value: "0",
          location: "right"
        },
        {
          title: "应收金额",
          value: "0",
          location: "left"
        }
      ],
      titleArray: ["挂号医生", "挂号次数", "应收金额"],
      recordParams: {
        create_start_time: "",
        create_end_time: "",
        statusArr: ["DONE", "TREAT_WAITING"],
        page: 1,
        page_size: 10
      }
    };
  },
  components: {
    firstTable,
    secondTable
  },

  methods: {
    getWater(val) {
      this.recordParams.page = this.page;
      this.recordParams.page_size = this.pageSize;
      this.recordParams.create_start_time = val.startTime;
      this.recordParams.create_end_time = val.endTime;
      registerDoctor(this.recordParams).then(res => {
        if (res.code === 1000) {
          let allRegisterNum = 0;
            res.data.doctorAmtList.forEach(item => {
            let object = {};
            object.doctor = item.doctor_name;
            object.num = item.total_count;
            object.money1 = item.amount_receivable;
            allRegisterNum = allRegisterNum + item.total_count
            this.payStreamData.push(object);
          });
          this.$set(this.firstTableList[0], "value", allRegisterNum);
          this.$set(
            this.firstTableList[1],
            "value",
            res.data.totalAmt.amount_receivable
          );
        
          this.isLoad = true;
          if (res.data.doctorAmtList.length !== 10) {
            this.isShowLoad = false; //不显示加载更多
          }
        } else {
          this.$Message.infor(res.msg);
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.pt200{
  padding-top: 200px;
}
.doctor {
  background: $bgwhite2;
  max-height: 1000px;
  overflow: auto;
}
</style>

