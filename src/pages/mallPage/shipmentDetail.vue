<template>
  <!-- 待发货页面 -->
  <div>
    <common-header :titleName="$route.meta.title" :hasLeft="true" @leftToggle="leftToggle"></common-header>
    <div class="auditDetail" ref="auditDetail" v-if="uploadData">
      <div class="auditDetail-content">
        <common-title :titleName="titleName">
          <template slot="rightContent">
            <span class="rightIcon">待发货</span>
          </template>
        </common-title>
        <!-- 订单审核的描述 -->
        <div class="auditDetail-desc">
          <p>
            <span class="left">下单时间：</span>
            <span>{{shipmentDetail.create_time|dateFormat}}</span>
          </p>
          <p>
            <span class="left">订单号：</span>
            <span>{{shipmentDetail.order_seqno}}</span>
          </p>
          <p>
            <span class="left">{{shipmentDetail.contact}}：</span>
            <span>{{shipmentDetail.phone_num}}</span>
          </p>
          <p>
            <span class="left">患者备注：</span>
            <span>{{shipmentDetail.memo||'无'}}</span>
          </p>
        </div>
        <common-title :titleName="titleName2"></common-title>
        <!-- 订单的产品列表 -->
        <drugs-item v-for="(item,index) in shipmentDetail.goods_order_items" :key="index" :drugMoney="item.price" :drugNum="item.num" :drugName="item.name"
          :drugSpec="item.spec" :drugImg="item.img"></drugs-item>
        <div class="auditDetail-desc adress">
          <p>
            <span class="left">收件人：</span>
            <span>{{shipmentDetail.contact}}</span>
          </p>
          <p>
            <span class="left">电话：</span>
            <span>{{shipmentDetail.phone_num}}</span>
          </p>
          <p class="flex-p">
            <span class="left">收货地址：</span>
            <span class="right">{{shipmentDetail.address}}</span>
          </p>
        </div>
        <input-select :title="'物流公司'" :modelValue="selectLogistics.value" :placeHolder="'请选择物流公司'" ref="doctor" :selectArray="logisticsCompany" @selectChange="selectChange"
          :isShowInput="false"></input-select>
        <!-- key为ZT的话 不显示物流单号 -->
        <input-select :isShowSelect="false" :title="'物流单号'" :placeHolder="'请输入单号'" ref="mark" v-show="selectLogistics.key!=='ZT'"></input-select>
        <div class="pb150"></div>
      </div>

      <section class="auditDetail-bottom">
        <div class="cancel" @click="goodsOperation('reject')">取消订单</div>
        <div class="pass" @click="goodsOperation('pass')">提交</div>
      </section>
    </div>
  </div>
</template>
<script>
import { commonTitle, drugsItem, inputSelect, commonHeader } from "@/components/common";
import { goodsOrderDetail, goodsDeliver, goodsOrderCancel } from "@/fetch/api"
import { mapState } from 'vuex';
export default {
  props: ['orderSeqno'],
  beforeRouteLeave(to, from, next) {
    // 设置下一个路由的 meta
    to.meta.nativeIndex = 1;  // 跳回原页面 bar不变
    next();
  },
  data() {
    return {
      titleName: "订单信息",
      titleName2: "诊所药房",
      uploadData: false,
      shipmentDetail: {},
      //选中的物流公司数据
      selectLogistics: {
        key: '',
        value: ''
      }
    };
  },
  computed: {
    ...mapState(['logisticsCompany'])
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
      this.selectLogistics = this.logisticsCompany.find((item) => {
        return item.value == val
      })
    },
    goodsOperation(type) {
      if (this.selectLogistics.key === '') {
        this.$Message.infor("请选择物流公司!")
        return
      } else if (this.selectLogistics.key !== 'ZT' && this.$refs.mark.inputValue === '') {
        this.$Message.infor("请输入物流单号!")
        return
      }
      let tips = type === 'pass' ? '提交发货订单？' : '确定取消订单？'
      if (type === 'pass') {
        let operationParams = {
          order_seqno: this.orderSeqno,
          deliver_code: this.selectLogistics.key,
          deliver_seqno: this.$refs.mark.inputValue
        }
        this.$Message.confirm(tips, () => {
          goodsDeliver(operationParams).then(res => {
            if (res.code === 1000) {
              this.$Message.infor("操作成功!", () => {
                this.$router.go(-1)
              })
            } else {
              this.$Message.infor("操作失败!" + res.msg)
            }
          })
        })
      } else {
        let orderCancel = {
          order_seqno: this.orderSeqno
        }
        this.$Message.confirm(tips, () => {
          goodsOrderCancel(orderCancel).then(res => {
            if (res.code === 1000) {
              this.$Message.infor("操作成功!", () => {
                this.$router.go(-1)
              })
            } else {
              this.$Message.infor("操作失败!" + res.msg)
            }
          })
        })
      }

    },
    getDetail() {
      let detailParams = {
        order_seqno: this.orderSeqno
      }
      goodsOrderDetail(detailParams).then(res => {
        if (res.code === 1000) {
          this.shipmentDetail = res.data
          this.selectLogistics = this.logisticsCompany[0]
          this.uploadData = true
        } else {
          this.$Message.infor("获取待审核详情内容错误" + res.msg);
        }
      })
    }
  },
  created() {
    this.getDetail()
  }
};
</script>
<style lang="scss" scoped>
@import "./mallOrderPart/commonDetail.scss";
.adress {
  margin-top: 20px;
  @include commonBorder();
  margin-bottom: 0;
}
.flex-p {
  display: flex;
  .left {
    width: 160px;
  }
  .right {
    flex: 1;
  }
}
</style>