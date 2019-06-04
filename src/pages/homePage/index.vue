<template>
  <div>
    <router-view />
  </div>
</template>
<script>
import { getClinc } from '@/fetch/api'
import { mapActions, mapState } from 'vuex';
export default {
  data() {
    return {
      isComplete: false,
      clinicList: []
    }
  },
  beforeRouteLeave(to, from, next) {
    from.matched[0].meta.isGetClinic = false
    next()
  },
  computed: {
    ...mapState(['clinicsList'])
  },
  methods: {
    ...mapActions(['getActClinic'])
  },
  created() {
    this.getActClinic()
  }
}
</script>
<style lang="scss" scoped>
</style>


