<template>
  <div class="entry-detail">
    <div v-if="isComplete">
      <article-detail :detailData="detailData" :inforArr="inforArr">
        <template slot="entryCourse" v-if="haveBtn==='show'">
          <div class="btn mt-20px" @click="goEntry">我要报名</div>
        </template>
      </article-detail>

      <common-title :titleName="'简介'" class="mt-20px">
      </common-title>
      <div class="platform">
        <div class="platform-content " v-html="detailData.content"></div>
      </div>
      <div class="mb-120px"></div>
      <section class="pay-bottom" v-if="haveBtn!=='show'&&status=='UNPAID'">
        <div class="pay-btn" @click="goToPay">微信支付</div>
      </section>
    </div>
    <loading v-if="isShowLoading" :isAll="true"></loading>

  </div>
</template>

<script>
import { getArticleDetail, trainCoursePay } from "@/fetch/api";
import { articleDetail, Loading, commonTitle } from "@/components/common";
export default {
  props: ['name', 'haveBtn', 'id', 'register_name', 'register_mobile', 'status', 'order_seqno'],
  components: {
    articleDetail,
    Loading,
    commonTitle
  },
  data() {
    return {
      detailData: {},
      inforArr: [],
      isShowLoading: true,
      isShowBtn: true,
      isComplete: false
    };
  },
  created() {
    this._initData()
  },
  mounted() {

  },
  methods: {
    goEntry() {
      this.$router.push({
        path: '/personPage/trainingCoure',
        query: {
          title: this.detailData.title,
          author: this.detailData.author,
          pubdate: this.$options.filters.dateFormat(this.detailData.pubdate, "yyyy-MM-dd hh:mm"),
          addr: this.detailData.addr,
          price: Number(this.detailData.price),
          id: this.detailData.id
        }
      })
    },
    goToPay() {
      let params = {
        order_seqno: this.order_seqno,
        order_type: 10,
        type: 'url'
      }
      trainCoursePay(params).then(res => {
        if (res.code === 1000) {
          window.location.href = res.data
        } else {
          this.$Message.infor("跳转支付失败！")
        }
      })
    },
    _initData() {
      //获取动态的详情内容
      getArticleDetail(this.id).then(res => {
        if (res.code == 1000) {
          this.detailData = res.data;
          //haveBtn 判断入口不一样 样式的不一样
          this.inforArr = this.haveBtn === 'show' ?
            [
              { key: '时间：', value: this.$options.filters.dateFormat(this.detailData.pubdate, "yyyy-MM-dd hh:mm") },
              { key: '地点：', value: this.detailData.addr }
            ] : [
              { key: '时间：', value: this.$options.filters.dateFormat(this.detailData.pubdate, "yyyy-MM-dd hh:mm") },
              { key: '地点：', value: this.detailData.addr },
              { key: '报名人员：', value: this.register_name + '/' + this.register_mobile },
              { key: '订单状态：', value: this.orderStatus() }
            ]
        } else {
          this.$Message.infor('网络出错！')
        }
        this.isShowLoading = false
        this.isComplete = true
      });
    },
    orderStatus() {
      switch (this.status) {
        case 'UNPAID':
          return '待支付'
        case 'CANCEL':
          return '取消'
        case 'DONE':
          return '完成'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.entry-detail {
  overflow: auto;
}
.btn {
  background: $yellowColor;
  width: 690px;
  height: 80px;
  border-radius: 8px;
  color: #ffffff;
  font-size: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}
.platform {
  background: $bgwhite2;
  height: 100%;
  padding: 10px 30px;
  width: 750px;
  overflow: hidden;
  &-content {
    width: 100%;
    @extend %normalTitle;
    div,
    p,
    img {
      // box-sizing: border-box;
      max-width: 100% !important;
      height: auto !important;
    }
  }
}
.pay-bottom {
  position: fixed;
  bottom: 0px;
  left: 0px;
  height: 112px;
  width: 100%;
  background: $bgwhite2;
  padding: 0 43px;
  z-index: 999;
  @extend %aglinItem;
}
.pay-btn {
  background: #4dbc89 !important;
  width: 690px;
  height: 80px;
  border-radius: 8px;
  color: #ffffff;
  font-size: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.mb-120px {
  margin-bottom: 120px;
}
</style>
<style lang="scss" scoped>
@import "../mallPage/mallOrderPart/commonDetail.scss";
</style>