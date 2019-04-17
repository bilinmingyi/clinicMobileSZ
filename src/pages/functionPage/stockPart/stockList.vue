<!-- 接诊统计下面的数据样式组件 -->
<template>
  <div>
    <div class="medical-list">
      <section class="medical-list-wrap" v-for="(item,index) in stockList">
        <div class="medical-list-title">{{index+1}}.{{item.name}}</div>
        <div class="medical-list-content">
          <div class="medical-list-mid">
            <p>库存数量：<span >{{item.stock}}</span>{{item.unit_stock}}</p>
          </div>
           <div class="medical-list-mid">
            <p>规格：{{item.spec}}</p>
          </div>
           <div class="medical-list-mid">
            <p>中药类型：{{item.category|parseHerbalCategory}}</p>
          </div>
           <div class="medical-list-mid">
            <p>零售价：￥{{item.sale_price}}</p>
          </div>
         
         
        </div>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  props:['stockList'],
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.medical-list {
  background: $bgwhite2;
  height: 100%;
  &-wrap {
    padding: 30px;
    @include commonBorder();
  }
  &-content {
    padding-top: 10px;
  }
  &-title {
    font-size: 30px;
    font-weight: 600;
  }
 
  &-mid {
    color: $gray2;
    line-height: 44px;
    font-size: 28px;
    width: 100%;
    span{
      color:$greenColor;
      font-weight: 600;
      font-size: 30px;
    }
  }
}
</style>


