<template>
  <div class="home-mid mt24">
    <div class="mid-title"><span>常用功能</span></div>
    <hr class="full-screen-hr">
    </hr>
    <div class="function-list">
      <div class="function-item" @click="goFunctionPage(1)" v-if="isShowReport">
        <img src="@/assets/images/ghtj@2x.png" alt="挂号统计">
        <span>挂号统计</span>
      </div>
      <div class="function-item" @click="goFunctionPage(2)" v-if="isShowReport">
        <img src="@/assets/images/jztj@2x.png" alt="就诊统计">
        <span>就诊统计</span>
      </div>
      <div class="function-item" @click="goFunctionPage(3)" v-if="isShowReport">
        <img src="@/assets/images/sftj@2x.png" alt="收费统计">
        <span>收费统计</span>
      </div>
      <div class="function-item" @click="goFunctionPage(4)" v-if="isShowReport">
        <img src="@/assets/images/rktj@2x.png" alt="入库统计">
        <span>入库统计</span>
      </div>
      <div class="function-item" @click="goFunctionPage(5)" v-if="isShowReport">
        <img src="@/assets/images/cktj@2x.png" alt="出库统计">
        <span>出库统计</span>
      </div>
      <div class="function-item" @click="goFunctionPage(6)" v-if="isShowReport">
        <img src="@/assets/images/kuchun@2x.png" alt="库存统计">
        <span>库存统计</span>
      </div>
      <div class="function-item" @click="goFunctionPage(7)" v-if="isShowMall">
        <img src="@/assets/images/mall_logo.png" alt="库存统计">
        <span>商城订单</span>
      </div>

    </div>

  </div>
</template>

<script>
import { personPermission } from "@/fetch/api"
export default {
  data() {
    return {
      permisson: []
    }
  },
  computed: {
    /***
     * 个人权限枚举值
     * TREAT_MNG = "TREAT_MNG"; // 就诊管理
      DOCTOR_TREAT = "DOCTOR_TREAT"; // 医生门诊
      STOCK_MNG = "STOCK_MNG"; // 库存管理
      STAT_REPORT = "STAT_REPORT"; // 统计报表
        SETTING = "SETTING"; // 系统设置
     */
    //是否展示统计
    isShowReport() {
      return this.permisson.includes('STAT_REPORT')
    },
    //是否展示商城
    isShowMall() {
      return this.permisson.includes('TREAT_MNG') || this.permisson.includes('DOCTOR_TREAT')
    }
  },
  methods: {
    goFunctionPage(index) {
      switch (index) {
        case 1:
          this.$router.push({ name: "registerStatisticPage" });
          break;
        case 2:
          this.$router.push({ name: "medicalStatisticPage" });
          break;
        case 3:
          this.$router.push({ name: "chargeStatisticPage" });
          break;
        case 4:
          this.$router.push({ name: "enterBoundPage" });
          break;
        case 5:
          this.$router.push({ name: "outerBoundPage" });
          break;
        case 6:
          this.$router.push({ name: "stockStatisticPage" });
          break;
        case 7:
          this.$router.push({ path: "/mallPage" });
          break;
      }
    }
  },
  created() {
    personPermission({}).then(res => {
      if (res.code === 1000) {
        this.permisson = res.data
      } else {
        this.$Message.infor('获取个人权限失败' + res.msg + '请重新加载')
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.home-mid {
  height: 100%;
  .mid-title {
    background: $bgwhite2;
    @include textLineHeight(88px);
    width: 100%;
    span {
      padding-left: 30px;
      @extend %normalTitle;
    }
  }
  .function-list {
    width: 100%;
    height: calc(100vh - 600px);
    //  min-height: 833px;
    margin-bottom: 20px;
    // height: 100%;
    // height: (100vh- 100px);
    background: $bgwhite2;
    float: left;
    .function-item {
      width: 250px;
      height: 200px;
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
  }
}
</style>


