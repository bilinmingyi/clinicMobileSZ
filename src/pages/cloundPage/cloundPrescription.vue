<template>
  <div class="clound">
    <clound-tar></clound-tar>
    <pharmacy></pharmacy>
    <selected-drug></selected-drug>
    <usage-drug></usage-drug>
  </div>
</template>
<script>
import { cloundTar, Pharmacy, selectedDrug, usageDrug } from "./cloundPart"
export default {
  data() {
    return {}
  },
  components: {
    cloundTar,
    Pharmacy,
    selectedDrug,
    usageDrug
  }
}
</script>
<style lang="scss" scoped>
</style>


