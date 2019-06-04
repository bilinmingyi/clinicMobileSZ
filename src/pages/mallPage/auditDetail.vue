<template>
  <!-- 待审核详情页面 -->
  <div>
    <common-header :titleName="$route.meta.title" :hasLeft="true" @leftToggle="leftToggle"></common-header>
    <div class="auditDetail" ref="auditDetail" v-if="uploadData">
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
            <span>{{auditDetail.memo||'无'}}</span>
          </p>
        </div>
        <common-title :titleName="titleName2"></common-title>
        <!-- 订单的产品列表 -->
        <div class="drug-list">
          <drugs-item v-for="(item,index) in auditDetail.goods_order_items" :key="index" :drugMoney="item.price" :drugNum="item.num" :drugName="item.name"
            :drugImg="item.img" :drugSpec="item.spec"></drugs-item>
        </div>

        <input-select :modelValue="doctorName" ref="doctor" :isShowInput="false" @selectChange="selectChange" :selectArray="allDoctor"></input-select>
        <input-select :isShowSelect="false" :title="'备注'" :placeHolder="'请输入备注'" ref="mark" :modelValue="auditMemo"></input-select>

        <div class="pb150"></div>
      </div>
      <section class="auditDetail-bottom">
        <div class="cancel" @click="goodsOperation('reject')">拒绝</div>
        <div class="pass" @click="goodsOperation('pass')">通过</div>
      </section>
    </div>
  </div>
</template>
<script>
import { commonTitle, drugsItem, inputSelect, commonHeader } from "@/components/common";
import { goodsOrderDetail, goodsCheck, doctorList } from "@/fetch/api"
import { mapState } from 'vuex';
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
      doctorName: '',
      auditMemo: '',
      auditDetail: {},
      uploadData: false,
      allDoctor: []
    };
  },
  computed: {
    ...mapState(['userInfoState'])
  },
  components: {
    commonTitle,
    drugsItem,
    inputSelect,
    commonHeader
  },
  methods: {
    leftToggle() {
      this.$router.replace({ name: 'mallOrderPage' })
    },
    selectChange(val) {
      this.doctorName = val
    },
    getDetail() {
      return new Promise((resolve) => {
        let detailParams = {
          order_seqno: this.orderSeqno
        }
        goodsOrderDetail(detailParams).then(res => {
          if (res.code === 1000) {
            this.auditDetail = res.data
            resolve()
          } else {
            this.$Message.infor("获取待审核详情内容错误" + res.msg);
          }
        })
      })
    },
    getDoctorList() {
      return new Promise((resolve) => {
        doctorList({}).then(res => {
          if (res.code === 1000) {
            res.data.forEach((item) => {
              let object = {
                value: item.name,
                key: item.id
              }
              if (item.id === this.userInfoState.id) {
                this.doctorName = item.name
              }
              this.allDoctor.push(object)
            })
            resolve()
          } else {
            this.$Message.infor("获取医生列表错误" + res.msg);
          }
        })
      })
    },
    goodsOperation(type) {
      if (this.doctorName === '') {
        this.$Message.infor("请选择订单审核医生!");
        return
      }
      let selectDoctor = this.allDoctor.find(item => {
        return item.value === this.doctorName
      })
      let operationParams = {
        order_seqno: this.orderSeqno,
        doctor_memo: this.$refs.mark.inputValue,
        pass: type === 'pass' ? 1 : 0,
        doctor_name: selectDoctor.value,
        doctor_id: selectDoctor.key
      }
      let tips = type === 'pass' ? '该订单通过审核？' : '该订单不通过审核？'
      this.$Message.confirm(tips, () => {
        goodsCheck(operationParams).then(res => {
          if (res.code === 1000) {
            this.$Message.infor("操作成功", () => {
              this.$router.go(-1)
            })
          } else {
            this.$Message.infor("操作失败")
          }
        })
      })
    },
    async getData() {
      await this.getDetail();
      await this.getDoctorList();
      this.uploadData = true
    }
  },
  created() {
    this.getData()
  }
};
</script>
<style lang="scss" scoped>
@import "./mallOrderPart/commonDetail.scss";
</style>