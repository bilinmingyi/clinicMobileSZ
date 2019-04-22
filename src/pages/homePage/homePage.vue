<template>
  <div>
    <!-- <common-header :isShowLeft="false"></common-header> -->
    <home-top></home-top>
    <home-mid></home-mid>
    <common-bottom :navtiveIndex="navtiveIndex"></common-bottom>
    
  </div>
</template>
<script>
import commonHeader from "@/components/common/commonHeader";
import homeTop from "./homePagePart/homeTop";
import homeMid from "./homePagePart/homeMid";
import commonBottom from "@/components/common/commonBottom";
export default {
  name: "HomePage",
  data() {
    return {
      navtiveIndex:1
    };
  },
  components: {
    commonHeader,
    homeTop,
    homeMid,
    commonBottom
  }
};
</script>
<style lang="scss" scoped>
</style>
