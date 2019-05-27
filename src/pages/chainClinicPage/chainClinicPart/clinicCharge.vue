<!-- 入库统计-->
<template>
  <div class="clinic-enter">
    <date-select></date-select>
    <div class="mt-200px"></div>
    <div class="enter-content" v-show="isLoad">
      <second-table :titleArray="titleArray" :contentArray="clinicData" :hasData="hasData&&isLoad" :isTitleLight="true">
        <template slot="value" slot-scope="tableValue">
          <span>{{filterValue(tableValue.objectKey,tableValue.value)}}</span>
        </template>
      </second-table>
    </div>
    <loading v-show="isShowLoading"></loading>
  </div>
</template>

<script>
import { dateSelect, secondTable, Loading } from "@/components/common"
export default {
  data() {
    return {
      titleArray: ['诊所名称', '收费次数', '收费金额'],
      isLoad: false,
      isShowLoading: true,
      clinicData: [{ clinicName: '广州天河门诊', num: 2543222321312, money: 12421 }, { clinicName: '淳道中医门诊', num: 8974, money: 32142 }, { clinicName: '佛山中医门诊', num: 1232, money: 6754 }]
    };
  },
  computed: {
    hasData() {
      return this.clinicData.length === 0
    }
  },
  components: {
    dateSelect,
    secondTable,
    Loading
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
    }
  },
  created() {

    setTimeout((
    ) => {
      this.isLoad = true //放在请求完接口后变
      this.isShowLoading = false
    }, 1000)
  }
}
</script>

<style lang="scss" scoped>
.clinic-enter {
  background: $bgwhite2;
  height: calc(100vh - 90px);
  width: 100%;
}
</style>
