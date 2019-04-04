<template>
  <div class="home-mid mt24">
    <div class="mid-title"><span>常用功能</span></div>
     <hr class="full-screen-hr"></hr>
    <div class="function-list">
      <div class="function-item" @click="goFunctionPage(1)">
        <img src="@/assets/images/ghtj@2x.png" alt="挂号统计">
        <span>挂号统计</span>
      </div>
      <div class="function-item" @click="goFunctionPage(2)">
        <img src="@/assets/images/jztj@2x.png" alt="就诊统计">
        <span>就诊统计</span>
      </div>
      <div class="function-item" @click="goFunctionPage(3)">
        <img src="@/assets/images/sftj@2x.png" alt="收费统计">
        <span>收费统计</span>
      </div>
       <div class="function-item" @click="goFunctionPage(4)">
        <img src="@/assets/images/rktj@2x.png" alt="入库统计">
        <span>入库统计</span>
      </div>
      <div class="function-item" @click="goFunctionPage(5)">
        <img src="@/assets/images/cktj@2x.png" alt="出库统计">
        <span>出库统计</span>
      </div>
        <div class="function-item" @click="goFunctionPage(6)">
        <img src="@/assets/images/kuchun@2x.png" alt="库存统计">
        <span>库存统计</span>
      </div>
      
    </div>
    
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  methods:{
    goFunctionPage(index){
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
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.home-mid{
  .mid-title{
    background: $bgwhite2;
    @include textLineHeight(88px);
    width: 100%;
    span{
      padding-left: 30px;
      @extend %normalTitle;
    }
  }
 .function-list{
   width: 100%;
   min-height: 633px;
   background:  $bgwhite2;
   float: left;
   .function-item{
     width: 250px;
     height: 200px;
     @extend %columnMC;
     float: left;
     img{
       @extend %minICon;
     }
     span{
       color: $grayColor;
       font-size: 28px;
       padding-top: 20px;
     }
   }
    
 }
}
</style>


