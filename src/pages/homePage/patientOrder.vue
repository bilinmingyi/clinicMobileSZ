<template>
  <div v-show="isLoad" @touchmove.prevent>
    <div class="order2">
      <!-- <Header :canReturn="true" titleText="预约订单详情"></Header> -->
      <div class="mt888"></div>
      <common-header :titleName="'预约订单详情'" :hasLeft="true" @leftToggle="leftToggle"></common-header>

      <div class="white-back">
        <SmallTitle :hasBlock="true">
          <span class="ml-16px">挂号信息</span>
        </SmallTitle>
        <div class="register-item">
          <div class="mb-8px">
            <span class="label-three">预约地点：</span>
            <span class="label-two">{{clinic.provinceName}}省{{clinic.cityName}}市{{clinic.countyName}}区{{clinic.address}}</span>
          </div>
          <div class="mb-8px">
            <span class="label-three">预约时间：</span>
            <span class="label-two">{{orderInfo.appoint_date|dateFormat('yyyy-MM-dd W ')}}{{orderInfo.start_time}}-{{orderInfo.end_time}}</span>
          </div>
          <div class="mb-8px">
            <span class="label-three">预约医生：</span>
            <span class="label-two">{{orderInfo.doctor_name}}</span>
          </div>
          <div>
            <span class="label-three">挂号费用：</span>
            <span class="label-red">{{orderInfo.price}}元</span>
          </div>
        </div>
      </div>
      <div class="white-back">
        <SmallTitle :hasBlock="true">
          <span class="ml-16px">就诊人信息</span>
        </SmallTitle>
        <div class="patient-infor">
          <div class="line-item">
            <label class="label-span mr-32px">手机号码</label>
            <span class="label-span">{{orderInfo.patient_mobile}}</span>
          </div>
          <hr class="line-hr">
          <div class="line-item">
            <label class="label-span mr-96px">姓名</label>
            <span class="label-span">{{orderInfo.patient_name}}</span>
          </div>
          <hr class="line-hr">
          <div class="line-item">
            <label class="label-span mr-96px">性别</label>
            <span class="label-span">{{orderInfo.patient_sex|parseSex}}</span>
          </div>
          <hr class="line-hr">
          <div class="line-item">
            <label class="label-span mr-96px">年龄</label>
            <span class="label-span">{{orderInfo.patient_age}}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="add-block">
      <button class="add-btn" @click.stop="nextDone">{{orderInfo.status === 'UNPAID'?'去支付':'关闭'}}</button>
    </div> -->
  </div>
  </div>
</template>

<script>
import { SmallTitle, commonHeader } from "@/components/common"
import { mapState } from "vuex"
import { orderDetail } from "@/fetch/api.js"

export default {
  name: "appointOrderDetail",
  props: ["orderSeqno"],
  components: {
    commonHeader,
    SmallTitle
  },
  data() {
    return {
      orderInfo: {},
      isLoad: false
    }
  },
  computed: {
    ...mapState({
      clinic: state => state.clinic
    })
  },
  created() {
    this.getDetail()
  },
  methods: {
    getDetail() {
      orderDetail({
        order_seqno: this.orderSeqno
      })
        .then(res => {
          if (res.code === 1000) {
            this.orderInfo = res.data
            let time = this.orderInfo.appoint_date
            this.orderInfo.appoint_date = new Date(
              time.substr(0, 4) +
              "-" +
              time.substr(4, 2) +
              "-" +
              time.substr(6, 2)
            )
          } else {
            this.$Message.infor(res.msg)
          }
          this.isLoad = true
        })
        .catch(error => {
          this.$Message.infor("网络出错！")
        })
    },
    leftToggle() {
      this.$emit("leftToggle")
    }
  }
}
</script>

<style lang="scss" scoped>
.order2 {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999 !important;
  background: #f5f5f5;
}
.title {
  z-index: 999;
  background: red;
  position: absolute;
  height: 500px;
}
.white-back {
  background: #ffffff;
}

.register-item {
  padding: 20px 30px;
}

.label-one {
  font-size: 28px;
  color: $simpleGray;
  line-height: 45px;
}

.label-two {
  font-size: 30px;
  color: $grayColor;
  line-height: 42px;
}

.label-three {
  font-size: 30px;
  color: $simpleGray;
  line-height: 42px;
}

.label-red {
  color: #eb6262;
  font-size: 30px;
  line-height: 42px;
  font-weight: bold;
}

.line-item {
  padding: 26px 0px;
  @extend %displayFlex;
}

.line-hr {
  @extend %lineHr;
}

.label-span {
  color: $grayColor;
  line-height: 45px;
  font-size: 32px;
}

.patient-infor {
  padding: 0 30px;
}

// .add-block {
//   @include psFixed(bottom, 112px);
//   @extend %displayFlex;
//   background: $backColor;
//   padding: 16px 30px 15px;
//   width: 100%;
//   border-top: 1px solid $borderColor;
// }

.add-btn {
  @include deepButton(80px, 100%);
}
</style>
