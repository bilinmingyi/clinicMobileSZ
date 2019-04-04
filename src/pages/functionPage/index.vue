<template>
  <div>
    <common-header :titleName="$route.meta.title"></common-header>
    <!-- 常用功能一级路由-->
    <router-view/>
  </div>
</template>
<script>
import commonHeader from "@/components/common/commonHeader";
export default {
  data() {
    return {
    };
  },
  components: {
    commonHeader
  }
};
</script>

