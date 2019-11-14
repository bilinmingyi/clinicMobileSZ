
<template>
  <!-- 待审核详情页面 -->
  <div>
    <div class="auditDetail" ref="auditDetail" v-if="true||uploadData">
      <div class="auditDetail-content">
        <common-title :titleName="titleName">

        </common-title>
        <!-- 订单审核的描述 -->
        <div class="auditDetail-desc">
          <p>
            <span class="left">讲师名称：</span>
            <span>王大明医生</span>
          </p>
          <p>
            <span class="left">培训时间：</span>
            <span>2019-05-15 下午3点到5点</span>
          </p>
          <p>
            <span class="left">培训时长：：</span>
            <span>2小时</span>
          </p>
          <p>
            <span class="left">培训地点：</span>
            <span>深圳市福田区福民路东方欣悦居楼2B</span>
          </p>
        </div>
        <input-select :isShowSelect="false" :title="'报考人员'" :placeHolder="'请输入报考人员'" ref="mark1" :modelValue="'888'" :hasFocus="false"></input-select>
        <input-select :isShowSelect="false" :title="'联系电话'" :placeHolder="'请输入联系电话'" ref="mark2" :modelValue="'888'" :hasFocus="false"></input-select>
        <input-select :isShowSelect="false" :title="'缴费金额'" ref="mark3" :modelValue="'66666'" :isReadonly="true" :isRed="true" :hasFocus="false"></input-select>
        <!-- <div class="pb150"></div> -->
      </div>
      <section class="auditDetail-bottom">
        <div class="cancel" @click="goodsOperation('reject')">取消</div>
        <div class="pass" @click="goodsOperation('pass')">去支付</div>
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
    // WeixinJSBridge.showShareMenu({
    //   shareTicket: true
    // })
    // WeixinJSBridge.Page({
    //   onShareAppMessage: function () {
    //     return {
    //       title: 'lbl好好好',
    //       path: '/personPage/trainingCoure'
    //     }
    //     // return custom share data when user share.
    //   }
    // })
  }
};
</script>
<style lang="scss" scoped>
@import "../mallPage/mallOrderPart/commonDetail.scss";
</style>
