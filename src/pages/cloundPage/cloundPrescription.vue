<template>
  <div class="clound">
    <clound-tar></clound-tar>
    <div class="clound-content">
      <pharmacy></pharmacy>
      <selected-drug></selected-drug>
      <usage-drug></usage-drug>
    </div>
    <clound-bottom></clound-bottom>
  </div>
</template>
<script>
import { cloundTar, Pharmacy, selectedDrug, usageDrug, cloundBottom } from "./cloundPart"
export default {
  data() {
    return {}
  },
  components: {
    cloundTar,
    Pharmacy,
    selectedDrug,
    usageDrug,
    cloundBottom
  }
}
</script>
<style lang="scss" scoped>
.clound {
  position: relative;
  height: 100%;
  width: 100%;
}
.clound-content {
  overflow: auto;
  padding-top: 96px;
  max-height: calc(100vh - 90px);
  width: 100%;
  left: 0;
  padding-bottom: 140px;
}
</style>


