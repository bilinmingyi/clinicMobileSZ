<template>
  <div class="clound">
    <clound-tar></clound-tar>
    <div class="clound-content">
      <!-- <clound-grain></clound-grain> -->
      <clound-patient></clound-patient>
    </div>
    <clound-bottom></clound-bottom>
  </div>
</template>
<script>
import { cloundTar, cloundBottom } from "./cloundPart"
import cloundGrain from "./cloundGrain"
import cloundPatient from "./cloundPatient"
export default {
  data() {
    return {}
  },
  components: {
    cloundTar,
    cloundBottom,
    cloundGrain,
    cloundPatient
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
  height: calc(100vh - 90px);
  width: 100%;
  left: 0;
  padding-bottom: 140px;
}
</style>


