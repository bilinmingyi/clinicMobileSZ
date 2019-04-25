<template>
  <!-- 待审核详情页面 -->
  <div class="auditDetail" ref="auditDetail">
    <div class="auditDetail-content">
      <common-title :titleName="titleName">
        <template slot="rightContent">
          <span class="rightIcon">待审核</span>
        </template>
      </common-title>
      <!-- 订单审核的描述 -->
      <div class="auditDetail-desc">
        <p>
          <span class="left">下单时间：</span>
          <span>2018-12-23 22：26</span>
        </p>
        <p>
          <span class="left">订单号：</span>
          <span>323543545</span>
        </p>
        <p>
          <span class="left">王大锤：</span>
          <span>143355434</span>
        </p>
        <p>
          <span class="left">患者备注：</span>
          <span>早上起床头疼，发热</span>
        </p>
      </div>
      <common-title :titleName="titleName2"></common-title>
      <!-- 订单的产品列表 -->
      <div class="drug-list">
        <drugs-item v-for="(item,index) in drugsList" :key="index"></drugs-item>
      </div>
      <input-select @inputFocus="inputFocus" :modelValue="'梁医生'" ref="doctor"></input-select>
        <input-select :isShowSelect="false" :title="'备注'" :placeHolder="'请输入备注'" ref="mark"></input-select>
  
      <div class="pb150"></div>
    </div>
    <section class="auditDetail-bottom">
      <div class="cancel">拒绝</div>
      <div class="pass" @click="pass">通过</div>
    </section>
  </div>
</template>
<script>
import { commonTitle, drugsItem, inputSelect } from "@/components/common";
export default {
    beforeRouteLeave(to, from, next) {
         // 设置下一个路由的 meta
        to.meta.nativeIndex = 0;  // 跳回原页面 bar不变
        next();
    },
 data() {
    return {
      titleName: "订单信息",
      titleName2: "诊所药房",
      drugsList: [1, 2, 3, 4],
      remark:''
    };
  },
  components: {
    commonTitle,
    drugsItem,
    inputSelect
  },
  methods: {
    inputFocus() {
    },
    pass(){
      console.log(this.$refs.doctor.inputValue)
       console.log(this.$refs.mark.inputValue)
    }
  }
};
</script>
<style lang="scss" scoped>
@import './mallOrderPart/commonDetail.scss';
</style>