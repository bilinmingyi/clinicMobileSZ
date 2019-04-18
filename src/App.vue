<template>
  <div id="app" v-cloak>
    <router-view/>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { getClinc } from "@/fetch/api";
export default {
  name: "App",
  methods: {
    ...mapActions(["set_clinic_info", "getUserInfo"]),
    getData() {
      getClinc()
        .then(res => {
          if (res.code === 1000) {
            this.set_clinic_info({
              id: res.data.id,
              name: res.data.name,
              customerPhone: res.data.customer_phone,
              provinceName: res.data.province_name,
              provinceCode: res.data.province_code,
              cityName: res.data.city_name,
              cityCode: res.data.city_code,
              countyName: res.data.county_name,
              countyCode: res.data.county_code,
              address: res.data.address,
              logo: res.data.logo
            });
          } else {
            this.$Message.infor(res.msg);
          }
        })
    }
  },
  mounted() {
    this.getData();
    this.getUserInfo();
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
