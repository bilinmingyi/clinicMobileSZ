<template>
  <div>
    <date-select></date-select>
    <div class="doctor">
      <first-table :firstTableList="firstTableList">
        <template slot="left">￥</template>
        <template slot="right" class="pl5">次</template>
      </first-table>
      <charge-list></charge-list>
      <without-data></without-data>
    </div>
  </div>
</template>
<script>
import dateSelect from "@/components/common/dateSelect";
import withoutData from "@/components/common//withoutData";
import firstTable from "@/components/common/firstTable";
import chargeList from "./chargeList";
export default {
  data() {
    return {
      firstTableList: [
        {
          title: "收费总额",
          value: "4",
          location: "left"
        },
        {
          title: "现金",
          value: "230",
          location: "left"
        },
        {
          title: "微信总额",
          value: "500.21",
          location: "left"
        },
        {
          title: "支付宝总额",
          value: "200",
          location: "left"
        },
        {
          title: "银行卡总额",
          value: "300",
          location: "left"
        },
        {
          title: "医保卡总额",
          value: "200",
          location: "left"
        }
      ]
    };
  },
  components: {
    dateSelect,
    firstTable,
    withoutData,
    chargeList
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.doctor {
  // background: $bgwhite2;
  max-height: 1000px;
  overflow: auto;
}
</style>

