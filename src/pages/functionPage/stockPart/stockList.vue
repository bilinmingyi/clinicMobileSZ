<!-- 接诊统计下面的数据样式组件 -->
<template>
  <div>
    <div class="medical-list">
      <section class="medical-list-wrap">
        <div class="medical-list-title">1.甘草</div>
        <div class="medical-list-content">
          <div class="medical-list-mid">
            <p>库存数量：<span >985</span>克</p>
          </div>
           <div class="medical-list-mid">
            <p>规格：1克/克</p>
          </div>
           <div class="medical-list-mid">
            <p>中药类型：饮片</p>
          </div>
           <div class="medical-list-mid">
            <p>零售价：￥2</p>
          </div>
         
         
        </div>
      </section>

     <section class="medical-list-wrap">
        <div class="medical-list-title">1.甘草</div>
        <div class="medical-list-content">
          <div class="medical-list-mid">
            <p>库存数量：<span >985</span>克</p>
          </div>
           <div class="medical-list-mid">
            <p>规格：1克/克</p>
          </div>
           <div class="medical-list-mid">
            <p>中药类型：饮片</p>
          </div>
           <div class="medical-list-mid">
            <p>零售价：￥2</p>
          </div>
         
         
        </div>
      </section>
        <section class="medical-list-wrap">
        <div class="medical-list-title">1.甘草</div>
        <div class="medical-list-content">
          <div class="medical-list-mid">
            <p>库存数量：<span >985</span>克</p>
          </div>
           <div class="medical-list-mid">
            <p>规格：1克/克</p>
          </div>
           <div class="medical-list-mid">
            <p>中药类型：饮片</p>
          </div>
           <div class="medical-list-mid">
            <p>零售价：￥2</p>
          </div>
         
         
        </div>
      </section>
        <section class="medical-list-wrap">
        <div class="medical-list-title">1.甘草</div>
        <div class="medical-list-content">
          <div class="medical-list-mid">
            <p>库存数量：<span >985</span>克</p>
          </div>
           <div class="medical-list-mid">
            <p>规格：1克/克</p>
          </div>
           <div class="medical-list-mid">
            <p>中药类型：饮片</p>
          </div>
           <div class="medical-list-mid">
            <p>零售价：￥2</p>
          </div>
         
         
        </div>
      </section>
        <section class="medical-list-wrap">
        <div class="medical-list-title">1.甘草</div>
        <div class="medical-list-content">
          <div class="medical-list-mid">
            <p>库存数量：<span >985</span>克</p>
          </div>
           <div class="medical-list-mid">
            <p>规格：1克/克</p>
          </div>
           <div class="medical-list-mid">
            <p>中药类型：饮片</p>
          </div>
           <div class="medical-list-mid">
            <p>零售价：￥2</p>
          </div>
         
         
        </div>
      </section>
        <section class="medical-list-wrap">
        <div class="medical-list-title">1.甘草</div>
        <div class="medical-list-content">
          <div class="medical-list-mid">
            <p>库存数量：<span >985</span>克</p>
          </div>
           <div class="medical-list-mid">
            <p>规格：1克/克</p>
          </div>
           <div class="medical-list-mid">
            <p>中药类型：饮片</p>
          </div>
           <div class="medical-list-mid">
            <p>零售价：￥2</p>
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
  margin-bottom:50px;
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


