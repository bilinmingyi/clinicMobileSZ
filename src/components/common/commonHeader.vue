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
    }
  }
};
</script>
<style lang="scss" scoped>
.common-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  .header-content {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 88px;
    line-height: 88px;
    text-align: center;
    background: rgba(250, 250, 250, 1);
    .header-left {
      position: absolute;
      left: 38px;
      height: 48px;
      width: 48px;
    }
    .header-title {
      font-size: 32px;
      font-weight: 500;
      color: #3f3f3f;
    }
  }
}
</style>


