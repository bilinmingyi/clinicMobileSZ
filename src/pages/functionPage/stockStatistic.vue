<template>
  <!--挂号统计页面 -->
  <div class="medical">
    <section class="medical-bar">
      <div :class="['flex-mid-center',{'nt-bar':navtiveIndex==0}]" @click="changeIndex(0)">中药</div>
      <div :class="['flex-mid-center',{'nt-bar':navtiveIndex==1}]" @click="changeIndex(1)">成药</div>
      <div :class="['flex-mid-center',{'nt-bar':navtiveIndex==2}]" @click="changeIndex(2)">产品</div>
    </section>
    <keep-alive>
      <component :is="displayDoctorList" ></component>
    </keep-alive>
  </div>
</template>
<script>
import chineseMedical from "./stockPart/chineseMedical";
import westMedical from "./stockPart/westMedical";
import product from "./stockPart/product";
export default {
  data() {
    return {
      navtiveIndex: 0
    };
  },
  components: {
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
          return "chineseMedical";
          break;
        case 1:
          return "westMedical";
          break;
        case 2:
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
    width: 50%;
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


