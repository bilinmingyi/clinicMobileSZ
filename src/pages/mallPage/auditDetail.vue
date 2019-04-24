<template>
  <!-- 待审核详情页面 -->
  <div class="auditDetail">
    <common-title :titleName="titleName">
      <template slot="rightContent">
        <span class="rightIcon">待审核</span>
      </template>
    </common-title>
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
        <span class="left">患者备注：</span>
        <span>早上起床头疼，发热</span>
      </p>
    </div>
    <common-title :titleName="titleName2">
    </common-title>
    <!-- 订单的产品列表 -->
    <drugs-item></drugs-item>
      <drugs-item></drugs-item>
        <drugs-item></drugs-item>
          <drugs-item></drugs-item>
            <drugs-item></drugs-item>
    <div class="pb130"></div>
    <section class="auditDetail-bottom">
      <div class="cancel">拒绝</div>
        <div class="pass">通过</div>
    </section>
  </div>
</template>
<script>
import { commonTitle, drugsItem, inputSelect } from "@/components/common";
export default {
  data() {
    return {
      titleName: "订单信息",
      titleName2:'诊所药房'
    };
  },
  components: {
    commonTitle,
    drugsItem,
    inputSelect
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.auditDetail{
  .rightIcon {
  @extend %normalTitle;
  color: $redColor;
}
  &-desc{
    margin-bottom:20px;
    width: 100%;
    padding:20px 0px 12px 30px;
    background: $bgwhite2;
    font-size: 30px;
    color: $grayColor;
    .left{
      color: $simpleGray;
    }
    p{
      padding-bottom:8px;
    }
  }
  &-bottom{
    @include psFixed(bottom,112px);
    background: $bgwhite2;
    padding:0 43px;
    @extend %aglinItem;
    .cancel{
      @include simpleButton(80px,320px,30px)
      margin-right:24px;
    }
    .pass{
      @include deepButton(80px,320px,30px)
    }
  }
}

</style>