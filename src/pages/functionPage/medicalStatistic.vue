<template>
  <!--挂号统计页面 -->
  <div class="medical">
    <section class="medical-bar">
      <div :class="['flex-mid-center',{'nt-bar':navtiveIndex==0}]" @click="changeIndex(0)">医生接诊统计</div>
      <div :class="['flex-mid-center',{'nt-bar':navtiveIndex==1}]" @click="changeIndex(1)">接诊流水查询</div>
    </section>
    <div class="pt96"></div>
    <keep-alive>
      <component :is="displayDoctorList"></component>
    </keep-alive>
  </div>
</template>
<script>
import doctorRecord from "./medicalPart/doctorRecord";
import medicalWater from "./medicalPart/medicalWater";

export default {
  data() {
    return {
      navtiveIndex: 0
    };
  },
  components: {
    doctorRecord,
    medicalWater
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
      return this.navtiveIndex == 0 ? "doctorRecord" : "medicalWater";
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
  position: fixed;
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


