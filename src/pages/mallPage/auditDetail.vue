<template>
  <!-- 待审核详情页面 -->
  <div class="auditDetail" ref="auditDetail" v-show="uploadData">
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
          <span>{{auditDetail.create_time|dateFormat}}</span>
        </p>
        <p>
          <span class="left">订单号：</span>
          <span>{{auditDetail.order_seqno}}</span>
        </p>
        <p>
          <span class="left">{{auditDetail.contact}}：</span>
          <span>{{auditDetail.phone_num}}</span>
        </p>
        <p>
          <span class="left">患者备注：</span>
          <span>{{auditDetail.memo}}</span>
        </p>
      </div>
      <common-title :titleName="titleName2"></common-title>
      <!-- 订单的产品列表 -->
      <div class="drug-list">
        <drugs-item v-for="(item,index) in auditDetail.goods_order_items" :key="index" :drugMoney="item.price" :drugNum="item.num"
          :drugName="getDrugName(item)"></drugs-item>
      </div>
      <input-select :modelValue="doctorName" ref="doctor" :isShowInput="false" @selectChange="selectChange"></input-select>
      <input-select :isShowSelect="false" :title="'备注'" :placeHolder="'请输入备注'" ref="mark" :modelValue="auditMemo"></input-select>

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
import { goodsOrderDetail, } from "@/fetch/api"
export default {
  props: ['orderSeqno'],
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
      remark: '',
      doctorName: '梁伯亮',
      auditMemo: '',
      auditDetail: {},
      uploadData: false
    };
  },
  components: {
    commonTitle,
    drugsItem,
    inputSelect
  },
  methods: {
    getDrugName(item) {
      return item.name + item.spec
    },
    selectChange(val) {
      this.doctorName = val
    },
    pass() {
      // this.$refs.doctor.inputValue = 888;
      console.log(this.$refs.mark.inputValue)
      console.log(this.doctorName)
    },
    getDetail() {
      let detailParams = {
        order_seqno: this.orderSeqno
      }
      goodsOrderDetail(detailParams).then(res => {
        if (res.code === 1000) {
          this.auditDetail = res.data
        } else {
          this.$Message.infor("获取待审核详情内容错误" + res.msg);
        }
        this.uploadData = true
        console.log(res)
      })
    }
  },
  created() {
    this.getDetail()
    console.log(this.orderSeqno)
  }
};
</script>
<style lang="scss" scoped>
@import "./mallOrderPart/commonDetail.scss";
</style>