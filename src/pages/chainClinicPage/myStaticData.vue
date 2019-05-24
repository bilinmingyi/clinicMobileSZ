<template>
  <div>
    <component :is="showDifFunc"></component>
  </div>
</template>

<script>
import clinicEnter from "./chainClinicPart/clinicEnter"
import clinicCharge from "./chainClinicPart/clinicCharge"
import clinicMedical from "./chainClinicPart/clinicMedical"
import clinicRegister from "./chainClinicPart/clinicRegister"
export default {
  data() {
    return {
      fromFuc: ''
    };
  },
  components: {
    clinicEnter,
    clinicCharge,
    clinicMedical,
    clinicRegister
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
    }
  },
  methods: {
  },
  created() {
    this.fromFuc = this.$route.query.func
  }
}
</script>

<style lang="scss" scoped>
</style>
