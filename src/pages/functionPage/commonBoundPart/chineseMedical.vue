<template>
  <div>
    <date-select></date-select>
    <div class="doctor">
      <second-table :titleArray="titleArray" :contentArray="contentArray">
        <template slot="value" slot-scope="tableValue">
          <span>{{filterValue(tableValue.objectKey,tableValue.value)}}</span>
        </template>
      </second-table>
    </div>
  </div>
</template>
<script>
import dateSelect from "@/components/common/dateSelect";
import secondTable from "@/components/common/secondTable";
export default {
  data() {
    return {
      titleArray: ["药名", "规格", "数量", "金额"],
      contentArray: [
        {
          drug: "lbl",
          type: "1",
          number: "100",
          money: "100"
        },
        {
          drug: "lbl2",
          type: "2",
          number: "200",
          money: "200"
        },
        {
          drug: "lbl3",
          type: "3",
          number: "300",
          money: "300"
        },
        {
          drug: "lbl4",
          type: "4",
          number: "400",
          money: "400"
        }
      ]
    };
  },
  components: {
    dateSelect,
    secondTable
  },
  methods: {
    filterValue(key, value) {
      switch (key) {
        case 'type':
          return `${value}克/包`
          break;
        case 'money':
          return `￥${value}`
          break;
        default:
        return  value;
        break;
      }
    }
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

