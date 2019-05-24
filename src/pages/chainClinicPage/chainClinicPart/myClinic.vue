<template>
  <div class="clinic">
    <div v-for="(item,index) in clinicList" :key="index" :class="['clinic-item',{'has-rihgt-margin':(index%2)==0}]">
      <img :src="defaultClinic" alt="">
      <p>广州天河中医药门医药门医药门医药门诊…</p>
      <div class="clinic-toggle" @click="toggleClinic">进入诊所</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      clinicList: [1, 2, 3, 4, 5, 6, 7],
      defaultClinic: require('@/assets/images/menzhen@2x.png')
    }
  },
  methods: {
    toggleClinic() {
      alert(222)
      this.$router.push({ name: "homePage" })
    }
  }
}
</script>
<style lang="scss" scoped>
.clinic {
  overflow: auto;
  padding: 0px 30px;
  width: 100vw;
  height: 100%;
  padding-bottom: 150px;
  &-item {
    float: left;
    width: 336px;
    z-index: 98;
    height: 360px;
    background: $bgwhite2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.1);
    margin-top: 30px;
    img {
      @include sameWH(164px);
    }
    p {
      margin-top: 17px;
      height: 40px;
      width: 284px;
      font-weight: 600;
      @include textEllipsis(40px, 284px);
      color: $grayColor;
    }
  }
  &-toggle {
    @include deepButton(64px, 240px);
    border-radius: 32px;
    margin-top: 24px;
  }
  .has-rihgt-margin {
    margin-right: 18px;
  }
  &::after {
    clear: both;
  }
}
</style>
