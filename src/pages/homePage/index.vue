<template>
  <div v-show="isComplete">
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
  async created() {
    try {
      await this.getActClinic()
      if (this.$route.matched[0].meta.isGetClinic) {
        if (this.clinicsList.length > 1) {
          this.$router.push({ name: 'myChainClinicPage' })
        } else {
          this.isComplete = true
        }
      } else {
        this.isComplete = true
      }
    } catch (error) {
      this.isComplete = true
    }
  }
}
</script>
<style lang="scss" scoped>
</style>


