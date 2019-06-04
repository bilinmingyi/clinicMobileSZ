<template>
  <div>
    <common-header :titleName="showDifTitle"></common-header>
    <component :is="showDifFunc"></component>
  </div>
</template>

<script>
import { commonHeader } from "@/components/common";
import clinicEnter from "./chainClinicPart/clinicEnter"
import clinicCharge from "./chainClinicPart/clinicCharge"
import clinicMedical from "./chainClinicPart/clinicMedical"
import clinicRegister from "./chainClinicPart/clinicRegister"
export default {
  beforeRouteLeave(to, from, next) {
    if (to.name === 'myChainClinicPage') {
      to.meta.tarIndex = 2
    }
    next()
  },
  data() {
    return {
      fromFuc: ''
    };
  },
  components: {
    clinicEnter,
    clinicCharge,
    clinicMedical,
    clinicRegister,
    commonHeader
  },
  computed: {
    showDifFunc() {
      switch (this.fromFuc) {
        case "ENTER":
          return clinicEnter;
        case "REGISTER":
          return clinicRegister;
        case "MEDICAL":
          return clinicMedical;
        case "CHARGE":
          return clinicCharge;
      }
    },
    showDifTitle() {
      switch (this.fromFuc) {
        case "ENTER":
          return '入库统计';
        case "REGISTER":
          return '挂号统计';
        case "MEDICAL":
          return '就诊统计';
        case "CHARGE":
          return '收费统计';
      }
    }
  },
  created() {
    this.fromFuc = this.$route.query.func
  }
}
</script>

<style lang="scss" scoped>
</style>
