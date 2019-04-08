<template>
  <div class="select">
    <section class="select-top">
      <div :class="{'nt-button':chooseNative==0}" @click="changeNative(0)">今日</div>
      <div :class="{'nt-button':chooseNative==1}" @click="changeNative(1)">昨日</div>
      <div :class="{'nt-button':chooseNative==2}" @click="changeNative(2)">本月</div>
      <div :class="{'nt-button':chooseNative==3}" @click="changeNative(3)">上月</div>
    </section>
    <section class="select-bottom">
      <input
        type="date"
        placeholder="起始日期"
        v-model="startTime"
      >
      <input
        type="date"
        placeholder="结束日期"
        class="work_search_Time FlexOne mr10"
        v-model="endTime"
      >
      <div class="work_search_btn" @click.stop="getDoctorData(true)">查询</div>
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
  height: 200px;
  @include commonBorder();
  padding:20px 30px;
  &-top{
    display: flex;
    div{
      flex: 1;
      @include simpleButton(60px,140px);
      font-size:26px;
      font-weight: 400;
      margin-right: 40px;
      &:nth-last-child(1){
        margin-right: 0;
      }
    }
    .nt-button{
      @include deepButton(60px,140px)
    }
  }
  &-bottom{
    padding-top: 30px;
    display: flex;
    input{
      @include newsButton(60px,220px);
      font-size: 24px;
      color: $gray2;
      line-height: 60px;
      text-align: center;
      margin-right: 30px;
      flex: 1;
    }
    div{
      @include deepButton(60px,140px);
    }
  }
}
</style>


