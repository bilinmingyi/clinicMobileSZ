<template>
  <!-- 待审核商品组件 -->
  <div class="mall-type">
    <mall-item v-for="(item,index) in mallList" :itemName="item.contact" :itemTime="item.create_time|dateFormat('yyyy/MM/dd hh:mm:ss')" :itemMoney="item.price"
      :itemNumber="item.phone_num" :key="index" @jumpDetail="jumpDetail(item)">
      <template slot="type">
        <span class="type">待审核</span>
      </template>
    </mall-item>
    <without-data v-show="hasData&&isLoad"></without-data>
    <load-more v-show="isShowLoad&&isLoad" @loadMore="loadMore"></load-more>
  </div>
</template>
<script>
import mallMixins from "./mallMixins";
import { goodsOrderLists } from '@/fetch/api'
export default {
  mixins: [mallMixins],
  data() {
    return {};
  },
  methods: {
    jumpDetail(item) {
      this.$router.push({ name: 'auditDetailPage', params: { orderSeqno: item.order_seqno } })
    },
    mallData() {
      let auditParams = {
        status_list: ['AUDIT'],
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