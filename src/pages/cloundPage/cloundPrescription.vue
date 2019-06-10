<template>
  <div class="clound">
    <clound-tab></clound-tab>
    <div class="clound-content">
      <!-- {{cloundTab}} -->
      <!--
        key值一定要有 区分不同的组件
       -->
      <keep-alive>
        <component :is="variousClound" :key="cloundTab.id"></component>
      </keep-alive>

    </div>
    <clound-bottom></clound-bottom>
  </div>
</template>
<script>
import { cloundTab, cloundBottom } from "./cloundPart"
import cloundGrain from "./cloundGrain"
import cloundPatient from "./cloundPatient"
import { mapState } from 'vuex';
export default {
  data() {
    return {}
  },
  computed: {
    ...mapState(["cloundTab"]),
    variousClound() {
      return this.cloundTab.key === "PATIENT" ? cloundPatient : cloundGrain
    }
  },
  components: {
    cloundTab,
    cloundBottom,
    cloundGrain,
    cloundPatient
  },
  methods: {

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


