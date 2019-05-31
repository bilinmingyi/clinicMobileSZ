<!-- 挂号统计-->
<template>
  <div class="clinic-enter">
    <date-select @selectToday="selectToday" @selectYesterday="selectYesterday" @selectThisMonth="selectThisMonth" @selectLastMonth="selectLastMonth"
      @selectQuery="selectQuery"></date-select>
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
import { secondTable } from "@/components/common"
import chainMixins from "./chainMixins"
import { getClinicRegister } from "@/fetch/api"
export default {
  mixins: [chainMixins],
  data() {
    return {
      titleArray: ['机构名称', '挂号次数', '挂号金额'],
    };
  },
  components: {
    secondTable
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
    },
    getChainData(val) {
      let params = {
        page: this.page,
        page_size: this.pageSize,
        create_end_time: val.endTime,
        create_start_time: val.startTime
      }
      getClinicRegister(params).then(res => {
        if (res.code === 1000) {
          res.data.forEach((item) => {
            let params = {
              clinicName: item.clinic_name,
              num: Number(item.offline_count) + Number(item.online_count),
              money: item.price
            }
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
