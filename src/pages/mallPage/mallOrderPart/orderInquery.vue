<template>
  <!-- 订单查询组件 -->
  <div class="mall-type">
    <div class="order-top">
      <input-search :isShowButton="false" ref="inputSearch"></input-search>
      <date-select @selectToday="selectToday" @selectYesterday="selectYesterday" @selectThisMonth="selectThisMonth" @selectLastMonth="selectLastMonth"
        @selectQuery="selectQuery"></date-select>
    </div>
    <div class="pt200"></div>
    <mall-item v-for="(item,index) in mallList" :itemName="item.contact" :itemTime="item.create_time|dateFormat('yyyy/MM/dd hh:mm:ss')" :itemMoney="item.price"
      :itemNumber="item.phone_num" :key="index" @jumpDetail="jumpDetail(item)">
      <template slot="type">
        <span class="type">{{item.status|orderStatus}}</span>
      </template>
    </mall-item>
    <without-data v-show="hasData&&isLoad"></without-data>
    <load-more v-show="isShowLoad&&isLoad" @loadMore="loadMore"></load-more>
  </div>
</template>
<script>
import { inputSearch, dateSelect } from "@/components/common";
import { goodsOrderLists } from '@/fetch/api'
import mallMixins from "./mallMixins";
export default {
  mixins: [mallMixins],
  data() {
    return {};
  },
  components: {
    inputSearch,
    dateSelect
  },
  methods: {
    jumpDetail(item) {
      this.$router.push({ name: 'orderDetailPage', params: { orderSeqno: item.order_seqno } })
    },
    mallData(val) {
      let self = this
      let auditParams = {
        // status_list: ['REFUSED']
        start_create_time: val.startTime,
        end_create_time: val.endTime,
        query: self.$refs.inputSearch.inputText,
        page: this.page,
        page_size: this.pageSize
      }
      goodsOrderLists(auditParams).then(res => {
        if (res.code === 1000) {
          res.data.forEach((item) => {
            this.mallList.push(item)
          })
          //当数据总条数等于返回来的总条数 不显示加载更多
          this.isShowLoad = this.mallList.length === res.total_num ? false : true
        } else {
          this.isShowLoad = false
          this.$Message.infor("获取待审核列表错误" + res.msg);
        }

        this.isLoad = true
      })
    },
    selectToday(val) {
      let self = this
      self.copyval = val
      this._initData()
      this.mallData(val)
    },
    selectYesterday(val) {
      let self = this
      self.copyval = val
      this._initData()
      this.mallData(val)
    },
    selectThisMonth(val) {
      let self = this
      self.copyval = val
      this._initData()
      this.mallData(val)
    },
    selectLastMonth(val) {
      let self = this
      self.copyval = val
      this._initData()
      this.mallData(val)
    },
    selectQuery(val) {
      let self = this
      self.copyval = val
      this._initData()
      this.mallData(val)
    },
    _initData() {
      this.page = 1
      this.pageSize = 10
      this.mallList = []
      this.isShowLoad = true
      this.isLoad = false
    }
  },
  mounted() {
    let startTimeStr = new Date().setHours(0, 0, 0, 0)
    let endTimeStr = new Date().setHours(23, 59, 59, 59)
    let val = { startTime: startTimeStr, endTime: endTimeStr }
    this.selectToday(val)
  }
};
</script>
<style lang="scss" scoped>
.pt200 {
  margin-top: 100px;
}
.mall-type {
  padding-top: 96px;
  .order-top {
    position: fixed;
    width: 100%;
    background: $bgwhite2;
    z-index: 999;
  }
  .type {
    color: $redColor;
    font-size: 30px;
  }
}
</style>