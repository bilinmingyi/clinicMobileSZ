<template>
  <div>
    <date-select></date-select>
    <div class="doctor">
      <first-table :firstTableList="firstTableList">
        <template slot="left">￥</template>
        <template slot="right" class="pl5">次</template>
      </first-table>
          <order-list></order-list>
    <without-data></without-data>
    </div>

  </div>
</template>
<script>
import dateSelect from "@/components/common/dateSelect";
import withoutData from "@/components/common//withoutData";
import firstTable from "@/components/common/firstTable";
import orderList from "./orderList";
export default {
  props:{
    firstTableList:{
      type:Array,
      default:()=>[]
    }
  },
  data() {
    return {
    };
  },
  components: {
    dateSelect,
    firstTable,
    withoutData,
    orderList
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

