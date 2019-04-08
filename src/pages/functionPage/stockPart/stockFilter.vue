<template>
  <div class="select">
    <section class="select-top">
      <p class="select-title">库存过滤：</p>
      <div :class="{'nt-button':chooseNative==0}" @click="changeNative(0)">全部库存</div>
      <div :class="{'nt-button':chooseNative==1}" @click="changeNative(1)">警告库存</div>
      <div :class="{'nt-button':chooseNative==2}" @click="changeNative(2)">有库存</div>
    </section>
  </div>
</template>
<script>

export default {
  data() {
    return {
      startTime:'2019-04-01',
      endTime:'2019-05-01',
      chooseNative:0
    };
  },
  methods:{
    changeNative(index){
      if(this.chooseNative==index){
        return
      }
      this.chooseNative = index;
    }
  }
};
</script>
<style lang="scss" scoped>
.select{
  background: $bgwhite2;
  width: 100%;
  height: 140px;
  @include commonBorder();
  padding:40px 30px;
  &-top{
    display: flex;
    align-items: center;
    div{
      flex: 1;
      @include simpleButton(50px,140px);
      color:$gray2;
      font-size:26px;
      font-weight: 400;
      margin-right: 40px;
      &:nth-last-child(1){
        margin-right: 0;
      }
    }
    .nt-button{
      @include deepButton(50px,140px)
    }
  }
  &-title{
    font-size: 30px;
    color: $backColor;
  }
}
</style>


