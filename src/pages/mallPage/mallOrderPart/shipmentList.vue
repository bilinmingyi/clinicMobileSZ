<template>
  <!-- 待发货组件 -->
  <div class="mall-type">
    <mall-item v-for="(item,index) in mallList" :itemName="item.contact" :itemTime="item.create_time|dateFormat"
      :itemMoney="item.goods_price" :itemNumber="item.phone_num" :key="index" @jumpDetail="jumpDetail">
      <template slot="type">
        <span class="type">待发货</span>
      </template>
    </mall-item>
    <without-data v-show="hasData&&isLoad"></without-data>
    <load-more v-show="isShowLoad&&isLoad" @loadMore="loadMore"></load-more>
  </div>
</template>
<script>
import mallMixins from "./mallMixins"
import { goodsOrderLists } from '@/fetch/api'
export default {
  mixins: [mallMixins],
  data() {
    return {};
  },
  methods: {
    jumpDetail() {
      this.$router.push({ name: "shipmentDetailPage" });
    },
    mallData() {
      let auditParams = {
        status_list: ['DELIVER'],
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
    }
  },
  created() {
    this.mallData()
    console.log('更新了待发货列表')
  }
};
</script>
<style lang="scss" scoped>
.mall-type {
  padding-top: 96px;
  .type {
    color: $redColor;
    font-size: 30px;
  }
}
</style>