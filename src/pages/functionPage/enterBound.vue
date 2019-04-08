<template>
  <!--挂号统计页面 -->
  <div class="medical">
    <section class="medical-bar">
      <div :class="['flex-mid-center',{'nt-bar':navtiveIndex==0}]" @click="changeIndex(0)">订单查询</div>
      <div :class="['flex-mid-center',{'nt-bar':navtiveIndex==1}]" @click="changeIndex(1)">中药</div>
      <div :class="['flex-mid-center',{'nt-bar':navtiveIndex==2}]" @click="changeIndex(2)">成药</div>
      <div :class="['flex-mid-center',{'nt-bar':navtiveIndex==3}]" @click="changeIndex(3)">产品</div>
    </section>
    <keep-alive>
      <component :is="displayDoctorList" :firstTableList="firstTableList"></component>
    </keep-alive>
  </div>
</template>
<script>
import orderInquiry from "./commonBoundPart/orderInquiry";
import chineseMedical from "./commonBoundPart/chineseMedical";
import westMedical from "./commonBoundPart/westMedical";
import product from "./commonBoundPart/product";
export default {
  data() {
    return {
      navtiveIndex: 0,
        firstTableList: [
        {
          title: "采购次数",
          value: "4",
          location: "right"
        },
        {
          title: "进货价总额",
          value: "230",
          location: "left"
        },
        {
          title: "零售价总额",
          value: "500.21",
          location: "left"
        }
      ]
    };
  },
  components: {
    orderInquiry,
    chineseMedical,
    westMedical,
    product
  },
  methods: {
    changeIndex(index) {
      if (this.navtiveIndex == index) {
        return;
      }
      this.navtiveIndex = index;
    }
  },
  computed: {
    displayDoctorList() {
      switch (this.navtiveIndex) {
        case 0:
          return "orderInquiry";
          break;
        case 1:
          return "chineseMedical";
          break;
        case 2:
          return "westMedical";
          break;
        case 3:
          return "product";
          break;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.medical-bar {
  background: $bgwhite2;
  width: 100%;
  height: 96px;
  z-index: 999;
  @extend %aglinItem;
  color: $simpleGray;
  font-size: 32px;
  font-weight: 500;
  @include commonBorder();
  div {
    width: 25%;
    height: 100%;
    text-align: center;
  }
  .nt-bar {
    color: #08bac6;
    font-weight: 600;
    @include commonBorder(bottom, #08bac6, 4px);
  }
}
</style>


