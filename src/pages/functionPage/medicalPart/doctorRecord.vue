<template>
  <div>
    <date-select
      @selectToday="selectToday"
      @selectYesterday="selectYesterday"
      @selectThisMonth="selectThisMonth"
      @selectLastMonth="selectLastMonth"
      @selectQuery="selectQuery"
    ></date-select>
    <div class="doctor">
      <first-table :firstTableList="firstTableList">
        <template slot="left">￥</template>
        <template slot="right" class="pl5">次</template>
      </first-table>
      <medical-list v-show="!hasData" :medicalList="payStreamData"></medical-list>
      <without-data v-show="hasData&&isLoad"></without-data>
      <load-more v-show="isShowLoad&&isLoad" @loadMore="loadMore"></load-more>
    </div>
  </div>
</template>
<script>
import firstTable from "@/components/common/firstTable";
import secondTable from "@/components/common/secondTable";
import medicalList from "./medicalList";
import functionMixins from "@/assets/js/functionMixins";
import { medicalDoctor } from "@/fetch/api";
export default {
  mixins: [functionMixins],
  data() {
    return {
      firstTableList: [
        {
          title: "接诊次数",
          value: "0",
          location: "right"
        },
        {
          title: "应收金额",
          value: "0",
          location: "left"
        },
        {
          title: "优惠金额",
          value: "0",
          location: "left"
        },
        {
          title: "欠费金额",
          value: "0",
          location: "left"
        },
        {
          title: "中药金额",
          value: "0",
          location: "left"
        },
        {
          title: "成药金额",
          value: "0",
          location: "left"
        },
        {
          title: "产品金额",
          value: "0",
          location: "left"
        },
        {
          title: "治疗金额",
          value: "0",
          location: "left"
        }
      ]
    };
  },
  components: {
    firstTable,
    secondTable,
    medicalList
  },
  methods: {
    getWater(val) {
      let params = {
        dispense_start_time: val.startTime,
        dispense_end_time: val.endTime,
        page: this.page,
        page_size: this.pageSize
      };
      console.log(params);
      medicalDoctor(params).then(res => {
        console.log(res);
        if (res.code === 1000) {
          res.data.doctorAmtList.forEach(item => {
            this.payStreamData.push(item);
          });
          this.firstTableList[0].value = res.data.totalAmt.total_count;
          this.firstTableList[2].value = res.data.totalAmt.discount;
          this.firstTableList[1].value = res.data.totalAmt.amount_receivable;
          this.firstTableList[3].value = res.data.totalAmt.amount_arrears;
          this.firstTableList[4].value = res.data.totalAmt.herbal_price;
          this.firstTableList[5].value = res.data.totalAmt.western_price;
          this.firstTableList[6].value = res.data.totalAmt.product_price;
          this.firstTableList[7].value = res.data.totalAmt.therapy_price;
          console.log(this.payStreamData);
        } else {
          this.$Message.infor(res.msg);
        }
        console.log(res.data.length);
        if (res.data.doctorAmtList.length != 10) {
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
  padding-top: 180px;
  // background: $bgwhite2;
  overflow: auto;
}
</style>

