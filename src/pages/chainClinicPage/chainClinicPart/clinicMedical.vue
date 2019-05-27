<!-- 就诊统计-->
<template>
  <div class="clinic-enter">
    <date-select></date-select>
    <div class="mt-200px"></div>
    <div class="enter-content" v-if="isLoad">
      <list-item :listData="clinicData"></list-item>
    </div>
    <without-data v-show="isLoad&&hasData"></without-data>
    <loading v-show="isShowLoading"></loading>
  </div>
</template>

<script>
import { dateSelect, listItem, Loading, withoutData } from "@/components/common"
export default {
  data() {
    return {
      titleArray: ['诊所名称', '挂号次数', '挂号金额'],
      isLoad: false,
      isShowLoading: true,
      clinicData: {}
    };
  },
  computed: {
    hasData() {
      return this.clinicData.length === 0
    }
  },
  components: {
    dateSelect,
    listItem,
    Loading,
    withoutData
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
      this.clinicData = {
        leftTitle: '淳道中医门诊',
        rightTitle: '5000/12',
        detailData: [
          { left: '中西成药', right: '523215' },
          { left: '中药饮片', right: '4523' },
          { left: '配方颗粒', right: '6421' },
          { left: '产品金额', right: '4533' },
          { left: '诊疗项目', right: '4523' },
          { left: '附加收费', right: '4533' }
        ]
      }
      this.isLoad = true
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
