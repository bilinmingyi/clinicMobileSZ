<template>
  <!-- 待审核商品组件 -->
  <div class="mall-type">
    <mall-item
      v-for="(item,index) in mallList"
      :itemName="item.name"
      :itemTime="item.time"
      :itemMoney="item.money"
      :itemNumber="item.number"
      :key="index"
      @jumpDetail="jumpDetail"
    >
      <template slot="type">
        <span class="type">待审核</span>
      </template>
    </mall-item>
    <without-data v-show="hasData&&isLoad"></without-data>
    <load-more v-show="isShowLoad&&isLoad" @loadMore="loadMore"></load-more>
  </div>
</template>
<script>
import mallMixins from "./mallMixins";
export default {
  mixins: [mallMixins],
  data() {
    return {};
  },
  methods: {
    jumpDetail(){
      this.$router.push({name:'auditDetailPage'})
    }
  },
  created() {
    console.log(11111);
  }
};
</script>
<style lang="scss" scoped>
.mall-type {
  padding-top: 96px;
  .type {
    color: $redColor;
    font-size: 30px;
  }
}
</style>