<template>
  <!-- 订单查询组件 -->
  <div class="mall-type">
    <div class="order-top">
<input-search :isShowButton="false" ></input-search>
<date-select></date-select>
    </div>
    <div class="pt200"></div>
    <mall-item
      v-for="(item,index) in mallList"
      :itemName="item.name"
      :itemTime="item.time"
      :itemMoney="item.money"
      :itemNumber="item.number"
      :key="index"
    >
      <template slot="type">
        <span class="type">诊所药房</span>
      </template>
    </mall-item>
  </div>
</template>
<script>
import { mallItem,inputSearch,dateSelect} from "@/components/common";
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
        },
          {
          name: "李四4",
          time: "2019/4/24 10:36",
          number: "13631780574",
          money: "400"
        }
      ]
    };
  },
  components: {
    mallItem,
    inputSearch,
    dateSelect
  }
};
</script>
<style lang="scss" scoped>
.pt200{
  margin-top: 100px;
}
.mall-type {
  padding-top: 96px;
  .order-top{
    position: fixed;
    width: 100%;
    background: $bgwhite2;
    z-index: 999;
  }
  .type {
    color: $simpleGray;
    font-size:30px;
  }
}
</style>