<template>
  <div>
    <section class="water">
      <div class="water-content" v-for="(item,index) in orderList">
        <div>
          <span>  {{item.createTime|dateFormat}}</span>
          <span class="success">{{item.recipeType|medType}}</span>
        </div>
        <div>
          <span>供应商: {{item.providerName}}</span>
        </div>
        <div>
          <span>{{item.creator}}</span>
          <span>￥{{item.costPrice}}</span>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  props:['orderList'],
  data() {
    return {};
  },
  components: {
  }
};
</script>
<style lang="scss" scoped>
.water {
  margin-top: 20px;
  width: 100%;
  &-content {
    background: $bgwhite2;
    padding: 30px 20px 30px 30px;
    @include commonBorder();
    div {
      display: flex;
      justify-content: space-between;
      @extend %normalTitle;
      font-size: 30px;
      padding-bottom: 16px;
      .success {
        color: $backColor;
          font-weight: 600;
      }
    }
    p {
      font-size: 28px;
      color: $grayColor;
      span {
        padding-right: 30px;
        word-wrap: break-word;
        &:nth-last-child(1) {
          padding-right: 0;
        }
      }
    }
  }
}
</style>


