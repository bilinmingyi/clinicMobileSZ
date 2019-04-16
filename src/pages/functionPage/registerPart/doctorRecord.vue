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
      <second-table :titleArray="titleArray" :contentArray="contentArray">
        <template slot="value" slot-scope="tableValue">
          {{tableValue.value}}
          <!-- {{tableValue.objectKey}} -->
        </template>
      </second-table>
    </div>
  </div>
</template>
<script>
import { registerDoctor, registerStream } from "@/fetch/api";
import dateSelect from "@/components/common/dateSelect";
import firstTable from "@/components/common/firstTable";
import secondTable from "@/components/common/secondTable";
export default {
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
      contentArray: [],
      page: "1", //页数
      pageSize: "10", //一页展示的条数
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
    dateSelect,
    firstTable,
    secondTable
  },
  methods: {
    getRegisterDoctor() {
      let params = {};
    },
    selectToday(val) {
      console.log(val);
      this.recordParams.create_start_time = new Date().getTime();
      this.recordParams.create_end_time = new Date().getTime();
      this.contentArray = [];
      registerDoctor(this.recordParams).then(res => {
        console.log(res.data);
        if (res.code === 1000) {
          console.log(this.firstTableList);
          this.$set(
            this.firstTableList[0],
            "value",
            res.data.totalAmt.totalCount || 0
          );
          this.$set(
            this.firstTableList[1],
            "value",
            res.data.totalAmt.amount_receivable || 0
          );
          res.data.doctorAmtList.forEach(item => {
            let object = {};
            object.doctor = item.doctor_name;
            object.num = item.total_count;
            object.money1 = item.amount_receivable;
            this.contentArray.push(object);
          });
          //  this.$set( this.firstTableList[1], "value",  res.data.totalAmt.amount_receivable||0);
        } else {
          this.$Message.infor(res.msg);
        }
      });
    },
    getData(val) {
      this.recordParams.create_start_time = new Date(val.startTime).getTime();
      this.recordParams.create_end_time = new Date(val.endTime).getTime();
      this.contentArray = [];
      console.log(this.recordParams)
      registerDoctor(this.recordParams).then(res => {
        if (res.code === 1000) {
          this.$set(this.firstTableList[0], "value", res.data.totalCount);
          this.$set(
            this.firstTableList[1],
            "value",
            res.data.totalAmt.amount_receivable
          );
          res.data.doctorAmtList.forEach(item => {
            let object = {};
            object.doctor = item.doctor_name;
            object.num = item.total_count;
            object.money1 = item.amount_receivable;
            this.contentArray.push(object);
          });
        } else {
          this.$Message.infor(res.msg);
        }
        console.log(res);
      });
    },
    selectYesterday(val) {
      console.log(val)
      this.getData(val);
    },
    selectThisMonth(val) {
      this.getData(val);
    },
    selectLastMonth(val) {
      this.getData(val);
    },
    selectQuery(val) {
      this.getData(val);
    }
  },
  created() {
    this.selectToday();
  }
};
</script>
<style lang="scss" scoped>
.doctor {
  background: $bgwhite2;
  max-height: 1000px;
  overflow: auto;
}
</style>

