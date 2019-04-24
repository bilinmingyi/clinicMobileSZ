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
import { mallItem, withoutData, loadMore } from "@/components/common";
export default {
  data() {
    return {
      mallList: [
        {
          name: "李四",
          time: "2019/4/24 10:36",
          number: "13631780571",
          money: "100"
        },
        {
          name: "李四2",
          time: "2019/4/24 10:36",
          number: "13631780572",
          money: "200"
        },
        {
          name: "李四3",
          time: "2019/4/24 10:36",
          number: "13631780573",
          money: "300"
        },
        {
          name: "李四4",
          time: "2019/4/24 10:36",
          number: "13631780574",
          money: "400"
        }
      ],
      isShowLoad: true,
      isLoad: true,
      page: "1",
      pageSize: "10"
    };
  },
  computed:{
          hasData() {
            return this.mallList.length !== 0;
        }
  },
  components: {
    mallItem,
    withoutData,
    loadMore
  },
  methods:{
            loadMore() {
            this.page++;
            let self = this;
            this.getWater(self.copyval);
        }
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