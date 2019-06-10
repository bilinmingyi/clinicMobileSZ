<!-- 云药房 开药通用组件 -->
<template >
  <div>
    <pharmacy></pharmacy>
    <selected-drug></selected-drug>
    <usage-drug></usage-drug>
  </div>
</template>
<script>
import { Pharmacy, selectedDrug, usageDrug } from "./cloundPart"
import { mapState } from 'vuex';
export default {
  data() {
    return {}
  },
  computed: {
    ...mapState(["cloundTab"])
  },
  components: {
    Pharmacy,
    selectedDrug,
    usageDrug
  },
  activated() {
    // alert(23)

  }
}
</script>
<style lang="scss" scoped>
</style>

