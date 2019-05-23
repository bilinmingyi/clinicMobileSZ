<template>
  <!--
  tab 导航栏组件 
  通用的公共组件
 -->
  <div>
    <div class="tab">
      <section class="medical-tab" ref="headTab">
        <div v-for="(item,index) in tabList" :key="item.id" :class="['flex-mid-center',{'nt-tab':changeNative===item.id}]" @click="changeIndex(item)">{{item.value}}</div>
      </section>
      <div></div>
    </div>
    <div class="mt-184"></div>
  </div>
</template>
<script>
export default {
  props: {
    tabList: {
      type: Array,
      default: () => [
        { key: 'MY_CLINIC', value: "我的诊所", id: 0 },
        { key: 'STATIC_DATA', value: "统计数据", id: 1 },
      ],
    },
    //默认的显示
    navtiveIndex: {
      type: [String, Number],
      default: 0
    }
  },
  data() {
    return {
      changeNative: 0,
      isShowAdd: false,
      tabId: 3 //便于添加之后 跳转到新增的bar选项栏中
    }
  },
  methods: {
    changeIndex(item) {
      if (this.changeNative === item.id) {
        return
      }
      this.changeNative = item.id;
      this.$emit(item.key)
    }
  },
  created() {
    this.changeNative = this.navtiveIndex
  }
}
</script>
<style lang="scss" scoped>
.tab {
  width: 100%;
  height: 96px;
  z-index: 99;
  background: #fafafa;
  @include commonBorder();
  .medical-tab {
    width: 100%;
    z-index: 99;
    height: 96px;
    // position: absolute;
    @extend %aglinItem;
    color: $simpleGray;
    font-size: 30px;
    font-weight: 500;
    overflow-x: auto;
    //去除bar 滚动条
    &::-webkit-scrollbar {
      display: none;
    }
    div {
      flex: 1;
      // min-width: 160px;
      height: 100%;
      text-align: center;
    }
    .nt-tab {
      color: $greenColor;
      font-weight: 600;
      background: #ffff;
      @include commonBorder(bottom, $greenColor, 4px);
    }
  }
  &-add {
    position: absolute;
    right: 40px;
    bottom: 28px;
    img {
      @extend %searchIcon;
    }
  }
  &-list {
    background: #fff;
    border: 2px solid #cccccc;
    border-radius: 10px;
    font-size: 28px;
    z-index: 999;
    color: #3f3f3f;
    letter-spacing: 0;
    line-height: 52px;
    padding: 8px 20px;
    width: 200px;
    position: absolute;
    right: 10px;
    top: 80px;
    li {
      @extend %aglinItem;
    }
    span {
      color: $greenColor;
      font-size: 46px;
      font-weight: 600;
      padding-right: 4px;
    }
  }
}
.mt-184 {
  // margin-top: 184px;
}
</style>


