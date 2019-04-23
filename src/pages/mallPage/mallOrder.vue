<template>
  <!--挂号统计页面 -->
  <div class="medical">
    <section class="medical-bar">
      <div :class="['flex-mid-center',{'nt-bar':navtiveIndex==0}]" @click="changeIndex(0)">待审核</div>
      <div :class="['flex-mid-center',{'nt-bar':navtiveIndex==1}]" @click="changeIndex(1)">待发货</div>
      <div :class="['flex-mid-center',{'nt-bar':navtiveIndex==2}]" @click="changeIndex(2)">订单查询</div>
    </section>
    <keep-alive>
      <component :is="mallComponent"></component>
    </keep-alive>
  </div>
</template>
<script>
import auditGoodsList from "./mallOrderPart/auditGoodsList";
import orderInqueryList from "./mallOrderPart/orderInqueryList";
import shipmentList from "./mallOrderPart/shipmentList";
export default {
  data() {
    return {
      navtiveIndex: 0
    };
  },
  methods: {
    changeIndex(index) {
      this.navtiveIndex = index;
    },
    mallComponent() {
      switch (this.navtiveIndex) {
        case 0:
          return "auditGoodsList";
        case 1:
          return "shipmentList";
        case 2:
          return "orderInqueryList";
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.medical-bar {
  background: #fafafa;
  width: 100%;
  height: 96px;
  z-index: 999;
  position: fixed;
  @extend %aglinItem;
  color: $simpleGray;
  font-size: 32px;
  font-weight: 500;
  @include commonBorder();
  div {
    flex: 1;
    height: 100%;
    text-align: center;
  }
  .nt-bar {
    color: #08bac6;
    font-weight: 600;
    background: #ffff;
    @include commonBorder(bottom, #08bac6, 4px);
  }
}
</style>


