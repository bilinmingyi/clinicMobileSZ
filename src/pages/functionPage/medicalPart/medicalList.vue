<!-- 接诊统计下面的数据样式组件 -->
<template>
  <div>
    <div class="medical-list">
      <section class="medical-list-wrap" v-for="(item,index) in medicalList">
        <div class="medical-list-title">{{index+1}}.{{item.doctor_name}}</div>
        <div class="medical-list-content">
          <div class="medical-list-item">
            <p class="bold">应收金额：￥{{item.amount_receivable}}</p>
            <p class="bold">接诊次数：{{item.total_count}}次</p>
          </div>
          <div class="medical-list-item">
            <p>中药金额：￥{{item.herbal_price}}</p>
            <p>成药金额：￥{{item.western_price}}</p>
          </div>
          <!-- <div class="medical-list-mid">
            <p>中成西药金额：￥120：00000000</p>
          </div> -->
          <div class="medical-list-item">
            <p>产品金额：￥{{item.product_price}}</p>
            <p>治疗金额：￥{{item.therapy_price}}</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  props:['medicalList'],
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.medical-list {
  background: $bgwhite2;
  height: 100%;
  margin-top: 30px;

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
  &-item {
    display: flex;
    p {
      width: 50%;
      color: $gray2;
      font-size: 26px;
      line-height: 44px;
    }
  }
  &-mid {
    color: $gray2;
    line-height: 44px;
    font-size: 26px;
    width: 100%;
  }
}
</style>


