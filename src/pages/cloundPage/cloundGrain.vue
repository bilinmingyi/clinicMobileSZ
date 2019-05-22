<!-- 云药房 配方颗粒组件 -->
<template>
  <div>
    <pharmacy></pharmacy>
    <selected-drug></selected-drug>
    <usage-drug></usage-drug>
  </div>
</template>
<script>
import { Pharmacy, selectedDrug, usageDrug } from "./cloundPart"
export default {
  data() {
    return {}
  },
  components: {
    Pharmacy,
    selectedDrug,
    usageDrug
  }
}
</script>
<style lang="scss" scoped>
</style>

