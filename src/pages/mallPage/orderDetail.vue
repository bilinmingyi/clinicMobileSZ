<template>
  <!-- 待订单详情页面 -->
  <div class="auditDetail" ref="auditDetail">
    <div class="auditDetail-content">
      <common-title :titleName="titleName"></common-title>
      <!-- 订单审核的描述 -->
      <div class="auditDetail-desc">
        <p>
          <span class="left">下单时间：</span>
          <span>2018-12-23 22：26</span>
        </p>
        <p>
          <span class="left">订单号：</span>
          <span>323543545</span>
        </p>
        <p>
          <span class="left">王大锤：</span>
          <span>143355434</span>
        </p>
        <p>
          <span class="left">收件人：</span>
          <span>王尼玛</span>
        </p>
        <p>
          <span class="left">电话：</span>
          <span>15888654678</span>
        </p>
        <p class="flex-p">
          <span class="left">收货地址：</span>
          <span class="right">广州市天河区珠江新城花城汇XXX街道幸 幸福小区小区6栋601</span>
        </p>
        <p>
          <span class="left">发货方式：</span>
          <span>自提</span>
        </p>
      </div>
      <common-title :titleName="titleName2"></common-title>
      <!-- 订单的产品列表 -->
      <div class="drug-list">
        <drugs-item v-for="(item,index) in drugsList" :key="index"></drugs-item>
      </div>
      <div class="detail-bottom">
        <p ><span>订单金额</span><span class="money">￥3522</span></p>
        <p><span>支付方式</span><span>支付宝</span></p>
      </div>
    </div>
  </div>
</template>
<script>
import { commonTitle, drugsItem, inputSelect } from "@/components/common";
export default {
    beforeRouteLeave(to, from, next) {
         // 设置下一个路由的 meta
        to.meta.nativeIndex = 2;  // 跳回原页面 bar不变
        next();
    },
  data() {
    return {
      titleName: "订单信息",
      titleName2: "诊所药房",
      drugsList: [1, 2, 3, 4],
      remark: ""
    };
  },
  components: {
    commonTitle,
    drugsItem,
    inputSelect
  },
  methods: {
    inputFocus() {},
    pass() {
      console.log(this.$refs.doctor.inputValue);
      console.log(this.$refs.mark.inputValue);
    }
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
  }
}
.detail-bottom{
  margin-top:20px;
  margin-bottom: 74px;
  p{
    @extend %aglinItem;
    justify-content: space-between;
    padding:0 30px;
    height: 96px;
    width: 100%;
    background: $bgwhite2;
    @extend %normalTitle;
    .money{
      color: $redColor;
    }
      &:nth-child(1){
    @include commonBorder();
  }
  }
}
</style>