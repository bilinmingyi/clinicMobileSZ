<template>
  <div>
    <common-header :titleName="$route.meta.title"></common-header>
    <router-view />
  </div>
</template>
<script>
import { commonHeader } from "@/components/common";
export default {
  data() {
    return {}
  },
  components: {
    commonHeader
  }
}
</script>
<style lang="scss" scoped>
</style>
