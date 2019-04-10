 <!--
  type:第一种类型表格 左标题（浅色） 右内容（白色）
  desc:需要传入一个数组 firstTableList
     有两个属性 title和value
     对于插槽 可以自主添加属性或文字 样式可自己在父组件调整
   -->
<template>
<div class="first-wrap">
  <div class="first" v-show="firstTableList.length>0">
    <div class="first-list" v-for="(item,index) in firstTableList" :key="index">
      <span class="first-title">{{item.title}}</span>
      <span class="first-content"><slot name="left" v-if="item.location=='left'" ></slot>{{item.value}}<span class="pl5"><slot name="right" v-if="item.location=='right'" ></slot></span></span>
    </div>
  </div>
</div>
</template>
<script>
export default {
  props:{
    firstTableList:{
      type:Array,
      default:()=>[]
    }
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.first-wrap{
    background: $bgwhite2;
    padding:10px 0 ;
    margin-top: 10px;
}
.first {
  background: $bgwhite2;
  max-height: 1000px;
  overflow: auto;
  margin: 30px;
  border-radius: 10px;
  border: 2px solid $greenColor;
  border-bottom: 0px;
  &-list {
    display: flex;
    height: 88px;
    line-height: 88px;
    width: 100%;
  }
  &-title {
    width: 180px;
    text-align: center;
        @include commonBorder(bottom, $greenColor);
    @include commonBorder(right, $greenColor);
    font-size: 30px;
    background: rgba(235, 248, 249, 1);
    color: $backColor;
  }
  &-content {
        @include commonBorder(bottom, $greenColor);
    flex: 1;
    text-align: center;
    font-size: 30px;
  }
}
</style>

