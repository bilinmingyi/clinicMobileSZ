<template>
  <!--
  tab 导航栏组件
  // 下面是例子的枚举值
  主要兼容云处方的导航栏（可以添加导航栏）和正常的一个页面导航栏
  如果是类似云处方的导航栏 一个width固定160 
  tabList  传入的导航栏 id的值 要从1开始
  addList  右边栏+号添加的数组
  hasAdd   右边是否展示+号栏
  navtiveIndex 默认显示的第几个导航栏
  normalTar  正常的一个页面导航栏 铺满div
 -->
  <div>
    <div class="tab">
      <section class="medical-tab" ref="headTab" :class="[{'normal-tar':normalTar}]">
        <div v-for="(item,index) in copyTabList" :key="item.id" :class="['flex-mid-center',{'nt-tab':changeNative===item.id}]" @click="changeIndex(item)">{{item.value}}</div>
      </section>
      <div></div>
      <div class="tab-add" @click="isShowList" v-if="hasAdd">
        <img src="@/assets/images/jia@2x.png" alt="">
      </div>
      <ul class="tab-list" v-show="isShowAdd">
        <li v-for="(addItem,index) in addList" :key="index" @click="addTab(addItem.key)"><span>+</span>{{addItem.value}}</li>
      </ul>
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
        { key: 'PATIENT', value: "患者病历", id: 1 },
        { key: 'GRAIN', value: "配方颗粒", id: 2 },
        { key: 'CHINA_MEDICINE', value: "中药饮片", id: 3 },
        { key: 'PRODUCT', value: "产品处方", id: 4 }
      ],
    },
    //默认的显示
    navtiveIndex: {
      type: [String, Number],
      default: 1
    },
    addList: {
      type: Array,
      default: () => [
        { key: 'CHINA_MEDICINE', value: "中药饮片" },
        { key: 'GRAIN', value: "配方颗粒" },
        { key: 'DONE_MEDICINE', value: "成药处方" },
        { key: 'PRODUCT', value: "产品处方" }
      ]
    },
    hasAdd: {
      type: Boolean,
      default: false
    },
    normalTar: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      changeNative: 0,
      isShowAdd: false,
      tabId: '', //便于添加之后 跳转到新增的bar选项栏中
      copyTabList: []
    }
  },
  methods: {
    changeIndex(item) {
      if (this.changeNative === item.id) {
        return
      }
      this.changeNative = item.id;
      this.isShowAdd = false
      this.$emit('changeTar', item.key)

    },
    isShowList() {
      this.isShowAdd = !this.isShowAdd
    },
    addTab(params) {
      this.tabId++;
      switch (params) {
        case "CHINA_MEDICINE":
          this.copyTabList.push({ key: 'CHINA_MEDICINE', value: "中药饮片", id: this.tabId })
          break;
        case "GRAIN":
          this.copyTabList.push({ key: 'GRAIN', value: "配方颗粒", id: this.tabId })
          break;
        case "DONE_MEDICINE":
          this.copyTabList.push({ key: 'DONE_MEDICINE', value: "成药处方", id: this.tabId })
          break;
        case "PRODUCT":
          this.copyTabList.push({ key: 'PRODUCT', value: "产品处方", id: this.tabId })
          break;
      }
      this.changeNative = this.tabId
      this.isShowAdd = false
      let MaxWidth = this.$refs.headTab.scrollWidth
      this.$nextTick(() => {
        this.$refs.headTab.scrollBy(MaxWidth, 0)
      })
    }
  },
  created() {
    this.changeNative = this.navtiveIndex
    this.tabId = this.tabList.length
    this.copyTabList = this.tabList
  }
}
</script>
<style lang="scss" scoped>
.tab {
  width: 100%;
  height: 96px;
  position: relative;
  // top: 0px;
  z-index: 99;
  background: #fafafa;
  @include commonBorder();
  .normal-tar {
    width: 100% !important;
    div {
      width: auto;
      flex: 1;
    }
  }
  .medical-tab {
    width: 640px;
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
      min-width: 160px;
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


