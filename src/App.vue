<template>
  <div id="app" v-cloak>
    <router-view/>
  </div>
</template>

<script>
import { mapState,mapActions } from "vuex";
export default {
  name: 'App',
  methods:{
    ...mapActions(['getUserInfo'])
  },
  mounted(){
    this.getUserInfo();
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
