<template>
  <div class="common-header">
    <div class="header-content">
      <img src="@/assets/images/fanghui@3x.png"  class="header-left" v-show="isShowLeft" @click="leftToggle" >
      <span class="header-title">{{titleName}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    isShowLeft:{
      type:Boolean,
      default:true
    },
    titleName:{
      type:String,
      default:'工作台'
    }
  },
  data() {
    return {};
  },
  methods:{
    leftToggle(){
      
      this.$emit('leftToggle')
       this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/common.scss";
.common-header {
 @include psFixed(top);
 line-height: 88px;
  .header-content {
    position: relative;
    width: 100%;
    text-align: center;
    @extend %flexMidCenter;
    background: $bgWhite;
    .header-left {
      position: absolute;
      left: 38px;
      height: 48px;
      width: 48px;
      
    }
    .header-title {
    @extend %normalTitle;
    }
  }
}
</style>


