<template>
  <div>
    <date-select></date-select>
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
import { registerDoctor } from "@/fetch/api";
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
          title: "预约缴费",
          value: "0",
          location: "left"
        },
        {
          title: "挂号缴费",
          value: "500",
          location: "left"
        }
      ],
      titleArray: ["挂号医生", "挂号次数", "预约缴费", "挂号缴费"],
      contentArray: [
        {
          doctor: "lbl",
          num: "1",
          money1: "100",
          money2: "100"
        },
        {
          doctor: "lbl2",
          num: "2",
          money1: "200",
          money2: "200"
        },
        {
          doctor: "lbl3",
          num: "3",
          money1: "300",
          money2: "300"
        },
        {
          doctor: "lbl4",
          num: "4",
          money1: "400",
          money2: "400"
        }
      ]
    };
  },
  components: {
    dateSelect,
    firstTable,
    secondTable
  },
  methods: {
    getRegisterDoctor(){
      let params={
        
      }
    }
  },
  created(){

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

