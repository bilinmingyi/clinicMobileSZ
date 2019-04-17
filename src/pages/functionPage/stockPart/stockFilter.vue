<template>
  <div class="select">
    <section class="select-top">
      <p class="select-title">库存过滤：</p>
      <div :class="{'nt-button':chooseNative==1}" @click="changeNative(1)">全部库存</div>
      <div :class="{'nt-button':chooseNative==2}" @click="changeNative(2)">警告库存</div>
      <div :class="{'nt-button':chooseNative==3}" @click="changeNative(3)">有库存</div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      chooseNative: 1
    };
  },
  methods: {
    changeNative(index) {
      if (this.chooseNative == index) {
        return;
      }
      this.chooseNative = index;
      switch (index) {
        case 1:
          this.$emit("allStock",'');
          break;
        case 2:
          this.$emit("warnStock",1);
          break;
        case 3:
          this.$emit("hasStock",2);
          break;
      }
    }
  },
  mounted(){
    this.changeNative(1);
  }
};
</script>
<style lang="scss" scoped>
.select {
  background: $bgwhite2;
  width: 100%;
  height: 140px;
  @include commonBorder();
  padding: 40px 30px;
  &-top {
    display: flex;
    align-items: center;
    div {
      flex: 1;
      @include simpleButton(50px, 140px);
      color: $gray2;
      font-size: 26px;
      font-weight: 400;
      margin-right: 40px;
      &:nth-last-child(1) {
        margin-right: 0;
      }
    }
    .nt-button {
      @include deepButton(50px, 140px);
    }
  }
  &-title {
    font-size: 30px;
    color: $backColor;
  }
}
</style>


