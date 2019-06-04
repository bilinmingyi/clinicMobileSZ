<template>
  <div class="static">
    <div class="function-item" @click="goFunctionPage('ENTER')">
      <img src="@/assets/images/rktj@2x.png" alt="入库统计">
      <span>入库统计</span>
    </div>
    <div class="function-item" @click="goFunctionPage('REGISTER')">
      <img src="@/assets/images/ghtj@2x.png" alt="挂号统计">
      <span>挂号统计</span>
    </div>
    <div class="function-item" @click="goFunctionPage('MEDICAL')">
      <img src="@/assets/images/jztj@2x.png" alt="就诊统计">
      <span>就诊统计</span>
    </div>
    <div class="function-item" @click="goFunctionPage('CHARGE')">
      <img src="@/assets/images/sftj@2x.png" alt="收费统计">
      <span>收费统计</span>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      nextTitle: ''
    }
  },

  methods: {
    goFunctionPage(val) {
      this.nextTitle = val
      this.$router.push({ path: '/chainClinicPage/myStaticData', query: { func: val } })
    }
  }
}
</script>
<style lang="scss" scoped>
.static {
  // padding: 0 30px;
  height: 100%;
  background: $bgwhite2;
}
.function-item {
  width: 250px;
  height: 200px;
  // background: #ffffff;
  @extend %columnMC;
  float: left;
  img {
    @extend %minICon;
  }
  span {
    color: $grayColor;
    font-size: 28px;
    padding-top: 20px;
  }
}
</style>


