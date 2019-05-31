<!-- 入库统计-->
<template>
  <div class="clinic-enter">
    <date-select @selectToday="selectToday" @selectYesterday="selectYesterday" @selectThisMonth="selectThisMonth" @selectLastMonth="selectLastMonth"
      @selectQuery="selectQuery"></date-select>
    <div class="mt-200px"></div>
    <div class="enter-content" v-if="isLoad">
      <list-item v-for="(item,index) in clinicData" :key="index" :listData="item"></list-item>
    </div>
    <without-data v-show="isLoad&&hasData"></without-data>
    <loading v-show="isShowLoading"></loading>
  </div>
</template>

<script>
import { listItem } from "@/components/common"
import chainMixins from "./chainMixins"
import { getClinicEnter } from "@/fetch/api"
export default {
  mixins: [chainMixins],
  data() {
    return {
    };
  },
  components: {
    listItem
  },
  methods: {
    getChainData(val) {
      let params = {
        page: this.page,
        page_size: this.pageSize,
        end_time: val.endTime,
        start_time: val.startTime
      }
      getClinicEnter(params).then(res => {
        if (res.code === 1000) {
          res.data.forEach((item) => {
            let params = {
              leftTitle: '',
              rightTitle: '',
              detailData: []
            }
            params.leftTitle = item.clinic_name
            params.rightTitle = item.total_price + '/' + item.count
            params.detailData = [
              { left: '中西成药', right: Number(item.cy_price) + Number(item.xy_price) },
              { left: '中药饮片', right: item.herbal_price },
              { left: '配方颗粒', right: item.kl_price },
              { left: '产品金额', right: item.product_price },
              { left: '材料金额', right: item.material_price }
            ]
            this.clinicData.push(params)
          })
        } else {
          this.$Message.infor("获取数据失败！！！" + res.msg);
        }
        this.isLoad = true
        this.isShowLoading = false
      })
    }
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
