<!-- 接诊统计下面的数据样式组件 -->
<template>
  <div>
    <div class="medical-list">
      <section class="medical-list-wrap">
        <div class="medical-list-title">1.bobo亮</div>
        <div class="medical-list-content">
          <div class="medical-list-item">
            <p>应收金额：￥120.0000000</p>
            <p>接诊次数：￥2.00</p>
          </div>
          <div class="medical-list-item">
            <p>饮片金额：￥120：00</p>
            <p>颗粒次数：￥2.00</p>
          </div>
          <div class="medical-list-mid">
            <p>中成西药金额：￥120：00000000</p>
          </div>
          <div class="medical-list-item">
            <p>产品金额：￥120：00</p>
            <p>诊疗次数：￥2.00</p>
          </div>
          <div class="medical-list-item">
            <p>材料金额：￥120：00</p>
            <p>附加服务：￥2.00</p>
          </div>
        </div>
      </section>
      <section class="medical-list-wrap">
        <div class="medical-list-title">1.bobo亮</div>
        <div class="medical-list-content">
          <div class="medical-list-item">
            <p>应收金额：￥120.0000000</p>
            <p>接诊次数：￥2.00</p>
          </div>
          <div class="medical-list-item">
            <p>饮片金额：￥120：00</p>
            <p>颗粒次数：￥2.00</p>
          </div>
          <div class="medical-list-mid">
            <p>中成西药金额：￥120：00000000</p>
          </div>
          <div class="medical-list-item">
            <p>产品金额：￥120：00</p>
            <p>诊疗次数：￥2.00</p>
          </div>
          <div class="medical-list-item">
            <p>材料金额：￥120：00</p>
            <p>附加服务：￥2.00</p>
          </div>
        </div>
      </section>
      <section class="medical-list-wrap">
        <div class="medical-list-title">1.bobo亮</div>
        <div class="medical-list-content">
          <div class="medical-list-item">
            <p>应收金额：￥120.0000000</p>
            <p>接诊次数：￥2.00</p>
          </div>
          <div class="medical-list-item">
            <p>饮片金额：￥120：00</p>
            <p>颗粒次数：￥2.00</p>
          </div>
          <div class="medical-list-mid">
            <p>中成西药金额：￥120：00000000</p>
          </div>
          <div class="medical-list-item">
            <p>产品金额：￥120：00</p>
            <p>诊疗次数：￥2.00</p>
          </div>
          <div class="medical-list-item">
            <p>材料金额：￥120：00</p>
            <p>附加服务：￥2.00</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
export default {
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


