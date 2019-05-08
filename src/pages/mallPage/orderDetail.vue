<template>
  <!-- 待订单详情页面 -->
  <div class="auditDetail" ref="auditDetail" v-if="uploadData">
    <div class="auditDetail-content">
      <common-title :titleName="titleName">
        <template slot="rightContent">
          <span class="rightIcon">{{orderDetail.status|orderStatus}}</span>
        </template>
      </common-title>
      <!-- 订单审核的描述 -->
      <div class="auditDetail-desc">
        <p>
          <span class="left">下单时间：</span>
          <span>{{orderDetail.create_time|dateFormat}}</span>
        </p>
        <p>
          <span class="left">订单号：</span>
          <span>{{orderDetail.order_seqno}}</span>
        </p>

        <p>
          <span class="left">收件人：</span>
          <span>{{orderDetail.contact}}</span>
        </p>
        <p>
          <span class="left">电话：</span>
          <span>{{orderDetail.phone_num}}</span>
        </p>
        <p>
          <span class="left">患者备注：</span>
          <span>{{orderDetail.memo||'无'}}</span>
        </p>
        <p class="flex-p">
          <span class="left">收货地址：</span>
          <span class="right">{{orderDetail.address}}</span>
        </p>
        <div v-if="orderDetail.pay_time>0">
          <p>
            <span class="left">发货方式：</span>
            <span>{{orderDetail.deliver_code==='ZT'?'自提':'邮寄'}}</span>
          </p>
          <p v-if="orderDetail.deliver_code !=='ZT'">
            <span class="left">{{orderDetail.deliver_code|logisticsFilter}}：</span>
            <span>{{orderDetail.deliver_seqno}}</span>
          </p>
        </div>

      </div>
      <common-title :titleName="titleName2"></common-title>
      <!-- 订单的产品列表 -->
      <div class="drug-list">
        <drugs-item v-for="(item,index) in orderDetail.goods_order_items" :key="index" :drugMoney="item.price" :drugNum="item.num" :drugName="getDrugName(item)" :drugImg="item.img"></drugs-item>
      </div>
      <div class="detail-bottom" v-if="orderDetail.pay_time>0">
        <p><span>订单金额</span><span class="money">￥{{orderDetail.price}}</span></p>
        <p><span>支付方式</span><span>支付宝</span></p>
      </div>
    </div>
  </div>
</template>
<script>
import { commonTitle, drugsItem, inputSelect } from "@/components/common";
import { goodsOrderDetail } from "@/fetch/api"
export default {
  props: ['orderSeqno'],
  beforeRouteLeave(to, from, next) {
    // 设置下一个路由的 meta
    to.meta.nativeIndex = 2;  // 跳回原页面 bar不变
    next();
  },
  data() {
    return {
      titleName: "订单信息",
      titleName2: "诊所药房",
      orderDetail: {},
      uploadData: false
    };
  },
  components: {
    commonTitle,
    drugsItem,
    inputSelect
  },
  methods: {
    getDrugName(item) {
      return item.name + item.spec
    },
    /**
     * 是否显示发货方式以及订单金额等内容
     * 枚举值可以在state.js看
     * @param item  该商品的状态 
     * 代发货 待收货 完成   是此商品已经给钱的状态 显示相关内容
     */
    isShowContent(item) {
      let showStatus = ['DELIVER', 'WAIT_INSTOCK', 'DONE']
      return showStatus.includes(item)
    },
    getOrderDetail() {
      let detailParams = {
        order_seqno: this.orderSeqno
      }
      goodsOrderDetail(detailParams).then(res => {
        if (res.code === 1000) {
          this.orderDetail = res.data
          this.uploadData = true
        } else {
          this.$Message.infor("获取订单详情内容错误" + res.msg);
        }
      })
    }
  },
  created() {
    this.getOrderDetail()
  }
};
</script>
<style lang="scss" scoped>
@import "./mallOrderPart/commonDetail.scss";
.adress {
  margin-top: 20px;
  @include commonBorder();
  margin-bottom: 0;
}
.flex-p {
  display: flex;
  .left {
    width: 160px;
  }
  .right {
    flex: 1;
    padding-right: 20px;
  }
}
.detail-bottom {
  margin-top: 20px;
  margin-bottom: 74px;
  p {
    @extend %aglinItem;
    justify-content: space-between;
    padding: 0 30px;
    height: 96px;
    width: 100%;
    background: $bgwhite2;
    @extend %normalTitle;
    .money {
      color: $redColor;
    }
    &:nth-child(1) {
      @include commonBorder();
    }
  }
}
</style>