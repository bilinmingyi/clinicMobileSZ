<template>
  <div>
    <date-select></date-select>
    <div class="doctor">
      <first-table :firstTableList="firstTableList">
        <template slot="left">￥</template>
        <template slot="right" class="pl5">次</template>
      </first-table>
          <medical-list></medical-list>
    <without-data></without-data>
    </div>

  </div>
</template>
<script>
import dateSelect from "@/components/common/dateSelect";
import withoutData from "@/components/common//withoutData";
import firstTable from "@/components/common/firstTable";
import secondTable from "@/components/common/secondTable";
import medicalList from "./medicalList";
export default {
  data() {
    return {
      firstTableList: [
        {
          title: "接诊次数",
          value: "4",
          location: "right"
        },
        {
          title: "应收金额",
          value: "230",
          location: "left"
        },
        {
          title: "饮片金额",
          value: "500.21",
          location: "left"
        },
                {
          title: "颗粒金额",
          value: "200",
          location: "left"
        },
                {
          title: "中成西药金额",
          value: "300",
          location: "left"
        },
                {
          title: "产品金额",
          value: "200",
          location: "left"
        },
                {
          title: "材料金额",
          value: "200",
          location: "left"
        },
                {
          title: "诊疗金额",
          value: "100",
          location: "left"
        }
      ]
    };
  },
  components: {
    dateSelect,
    firstTable,
    secondTable,
    withoutData,
    medicalList
  },
  methods: {
  }
};
</script>
<style lang="scss" scoped>
.doctor {
  // background: $bgwhite2;
  max-height: 1000px;
  overflow: auto;
}
</style>

