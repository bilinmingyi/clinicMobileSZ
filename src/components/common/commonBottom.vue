<template>
  <div class="common-bottom footerNav footer">
    <div class="bottom-list">
       <div :class="['footer-item',{'cur':navtiveIndex==0}] ">
            <span class="iconfont">{{navtiveIndex==0? '&#xe60d;':'&#xe60e; '}}</span>
            <span class="footer-text">消息</span>
        </div>
           <div :class="['footer-item',{'cur':navtiveIndex==1}] ">
            <span class="yunicon">{{navtiveIndex==1? '&#xe60a;':'&#xe60c; '}}</span>
            <span class="footer-text">工作</span>
        </div>
         <!-- <div :class="['footer-item',{'cur':navtiveIndex==2}] ">
            <span class="yunicon">{{navtiveIndex==0? '&#xe60f;':'&#xe610; '}}</span>
            <span class="footer-text">云药房</span>
        </div> -->
         <div :class="['footer-item',{'cur':navtiveIndex==3}] ">
            <span class="yunicon">{{navtiveIndex==0? '&#xe60d;':'&#xe609;'}}</span>
            <span class="footer-text">个人</span>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      navtiveIndex:1
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/css/common.scss";
.common-bottom{
 @include psFixed(bottom,110px);
  .bottom-list{
    @extend %aglinItem;
    .footer-item{
     .yunicon{
       font-size:48px;
     }
     .footer-text{
       font-size: 22px;
     }
      flex: 1;
    }
  }
}
</style>


