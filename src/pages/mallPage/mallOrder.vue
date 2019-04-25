<template>
  <!--挂号统计页面 -->
  <div class="medical">
    <section class="medical-bar">
      <div :class="['flex-mid-center',{'nt-bar':navtiveIndex===0}]" @click="changeIndex(0)">待审核</div>
      <div :class="['flex-mid-center',{'nt-bar':navtiveIndex===1}]" @click="changeIndex(1)">待发货</div>
      <div :class="['flex-mid-center',{'nt-bar':navtiveIndex===2}]" @click="changeIndex(2)">订单查询</div>
    </section>
      <component :is="mallComponent" ></component> 
  </div>
</template>
<script>
import auditGoods from "./mallOrderPart/auditGoods";
import orderInquery from "./mallOrderPart/orderInquery";
import shipmentList from "./mallOrderPart/shipmentList";
export default {
  beforeRouteLeave(to, from, next) {
         if(to.name==="homePage"){
            from.meta.nativeIndex = 0;  // 跳回到首页的话,nativeIndex初始化为0
         }
        next();
    },
  data() {
    return {
      navtiveIndex: 0
    };
  },
  components:{
    auditGoods,
    orderInquery,
    shipmentList
  },
  computed:{
    mallComponent() {
      switch (this.navtiveIndex) {
        case 0:
          return "auditGoods";
        case 1:
          return "shipmentList";
        case 2:
          return "orderInquery";
      }
    }
  },
  methods: {
    changeIndex(index) {
      this.navtiveIndex = index;
    }
  },
  created(){
    this.navtiveIndex = this.$route.meta.nativeIndex
  }
};
</script>
<style lang="scss" scoped>
.medical-bar {
  background: #fafafa;
  width: 100%;
  height: 96px;
  z-index: 999;
  position: fixed;
  @extend %aglinItem;
  color: $simpleGray;
  font-size: 32px;
  font-weight: 500;
  @include commonBorder();
  div {
    flex: 1;
    height: 100%;
    text-align: center;
  }
  .nt-bar {
    color: #08bac6;
    font-weight: 600;
    background: #ffff;
    @include commonBorder(bottom, #08bac6, 4px);
  }
}
</style>


