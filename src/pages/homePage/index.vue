<template>
  <div v-show="isComplete">
    <router-view />
  </div>
</template>
<script>
import { getClinc } from '@/fetch/api'
export default {
  data() {
    return {
      isComplete: false
    }
  },
  beforeRouteLeave(to, from, next) {
    from.matched[0].meta.isGetClinic = false
    next()
  },
  methods: {

  },
  created() {
    if (this.$route.matched[0].meta.isGetClinic) {
      getClinc().then(res => {
        if (res.data.name === '大医联帮测试诊所') {
          this.$router.push({ name: 'myChainClinicPage' })
        } else {
          this.isComplete = true
        }
      })
    } else {
      this.isComplete = true
    }

  }
}
</script>
<style lang="scss" scoped>
</style>


