<!--
   time 2019-5-27 需求3.2.0
 * 由于需求的问题 之前没用封装查到数据的item样式 现在封装一个
     listData: {
      type: Object,
      default: {
        leftTitle: '淳道中医门诊',
        rightTitle: '5000/12',
        detailData: [
          { left: '中西成药', right: '5822' },
          { left: '中药饮片', right: '452323' },
          { left: '配方颗粒', right: '642231' },
          { left: '产品金额', right: '452233' },
          { left: '材料金额', right: '453223' }
        ]
      }
    }
-->
<template>
  <div class="list">
    <div class="list-title">
      <div class="left">{{listData.leftTitle}}</div>
      <div class="right">{{listData.rightTitle}}</div>
    </div>
    <div class="list-content">
      <div class="list-obj" v-for="(item,index) in listData.detailData" :key="index">
        <span>{{item.left}}:</span>
        <span>{{item.right}}</span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    listData: {
      type: Object,
      default: {
        leftTitle: '淳道中医门诊',
        rightTitle: '5000/12',
        detailData: [
          { left: '中西成药', right: '5822' },
          { left: '中药饮片', right: '452323' },
          { left: '配方颗粒', right: '642231' },
          { left: '产品金额', right: '452233' },
          { left: '材料金额', right: '453223' }
        ]
      }
    }
  },
  data() {
    return {
    };
  },
}
</script>

<style lang="scss" scoped>
.list {
  width: 100%;
  padding: 20px 0px;
  font-size: 28px;
  @include commonBorder();
  line-height: 40px;
  &-title {
    padding: 8px 30px;
    display: flex;
    justify-content: space-between;
    color: $grayColor;
    .left {
      font-size: 32px;
      font-weight: 600;
    }
    .right {
      font-size: 30px;
    }
  }
  &-content {
    padding: 0 25px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  &-obj {
    font-size: 28px;
    padding: 12px 0px;
    min-width: 216px;
    text-align: left;
    box-sizing: border-box;
    -moz-box-sizing: border-box; /* Firefox */
    -webkit-box-sizing: border-box; /* Safari */
  }
}
</style>
