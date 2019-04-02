<template>
  <div class="home-mid mt24">
    <div class="mid-title"><span>常用功能</span></div>
     <hr class="full-screen-hr"></hr>
    <div class="function-list">
      <div class="function-item">
        <img src="@/assets/images/patient_logo.png" alt="患者接诊">
        <span>患者接诊</span>
      </div>
      <div class="function-item">
        <img src="@/assets/images/project_logo.png" alt="项目执行">
        <span>项目执行</span>
      </div>
      <div class="function-item">
        <img src="@/assets/images/clound_logo.png" alt="云处方开方">
        <span>云处方开方</span>
      </div>
       <div class="function-item">
        <img src="@/assets/images/project_logo.png" alt="项目执行">
        <span>项目处置</span>
      </div>
      <div class="function-item">
        <img src="@/assets/images/mall_logo.png" alt="商城订单">
        <span>商城订单</span>
      </div>
      
    </div>
    
  </div>
</template>

<script>
export default {
  data(){
    return{

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


