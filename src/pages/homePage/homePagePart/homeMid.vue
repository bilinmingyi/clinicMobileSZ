<template>
  <div class="home-mid">
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
    margin-top: 24px;
    
  .mid-title{
    background: rgba(255, 255, 255, 1);
    height: 96px;
    width: 100%;
    line-height: 96px;
    span{
      padding-left: 30px;
      color: #3F3F3F;
      font-size: 32px;
    }
  }
 .function-list{
   width: 100%;
   height: 633px;
 background: rgba(255, 255, 255, 1);
   float: left;
   .function-item{
     width: 250px;
     height: 200px;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     float: left;
     img{
       height: 88px;
       width: 88px;
     }
     span{
       color: #3F3F3F;
       font-size: 28px;
       padding-top: 20px;
     }
   }
    
 }
}
</style>


