<template>
  <!--
  tab 导航栏组件
 -->
  <div class="tab">
    <section class="medical-tab" ref="headTab">
      <div v-for="(item,index) in tabList" :key="item.id" :class="['flex-mid-center',{'nt-tab':navtiveIndex===item.id}]" @click="changeIndex(item.id)">{{item.value}}</div>
    </section>
    <div></div>
    <div class="tab-add" @click="isShowList">
      <img src="@/assets/images/jia@2x.png" alt="库存统计">
    </div>
    <ul class="tab-list" v-show="isShowAdd">
      <li @click="addTab('CHINA_MEDICINE')"><span>+</span>中药饮片</li>
      <li @click="addTab('GRAIN')"><span>+</span>配方颗粒</li>
      <li @click="addTab('DONE_MEDICINE')"><span>+</span>成药处方</li>
      <li @click="addTab('PRODUCT')"><span>+</span>产品处方</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navtiveIndex: 0,
      isShowAdd: false,
      tabList: [
        { key: 'PATIENT', value: "患者病历", id: 0 },
        { key: 'GRAIN', value: "配方颗粒", id: 1 },
        { key: 'CHINA_MEDICINE', value: "中药饮片", id: 2 },
        { key: 'PRODUCT', value: "产品处方", id: 3 }
      ],
      tabId: 3 //便于添加之后 跳转到新增的bar选项栏中
    }
  },
  methods: {
    changeIndex(index) {
      this.navtiveIndex = index;
      this.isShowAdd = false
    },
    isShowList() {
      this.isShowAdd = !this.isShowAdd
    },
    addTab(params) {
      this.tabId++;
      switch (params) {
        case "CHINA_MEDICINE":
          this.tabList.push({ key: 'CHINA_MEDICINE', value: "中药饮片", id: this.tabId })
          break;
        case "GRAIN":
          this.tabList.push({ key: 'GRAIN', value: "配方颗粒", id: this.tabId })
          break;
        case "DONE_MEDICINE":
          this.tabList.push({ key: 'DONE_MEDICINE', value: "成药处方", id: this.tabId })
          break;
        case "PRODUCT":
          this.tabList.push({ key: 'PRODUCT', value: "产品处方", id: this.tabId })
          break;
      }
      this.navtiveIndex = this.tabId
      this.isShowAdd = false
      let MaxWidth = this.$refs.headTab.scrollWidth
      this.$nextTick(() => {
        this.$refs.headTab.scrollBy(MaxWidth, 0)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.tab {
  width: 100%;
  height: 96px;
  position: relative;
  background: #fafafa;
  @include commonBorder();
  .medical-tab {
    width: 640px;
    z-index: 99;
    height: 96px;
    position: absolute;
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
</style>


