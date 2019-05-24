<!-- 收费统计 -->
<template>
  <div>
    2
  </div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    alert(123)
    // to.meta.title = this.nextTitle
    console.log(to)
    next();
  },
  data() {
    return {
    };
  },
}
</script>

<style lang="scss"scoped>
</style>