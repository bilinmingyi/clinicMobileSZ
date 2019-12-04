<template>
  <div>
    <common-header :titleName="$route.meta.title" :isShowLeft="!noShowLeft" @leftToggle="leftToggle"></common-header>

    <div class="entry-detail">

      <div v-if="isComplete">
        <article-detail :detailData="detailData" :inforArr="inforArr">
          <template slot="entryCourse" v-if="!order_seqno&&!noShowLeft">
            <div class="btn mt-20px" @click="goEntry">我要报名</div>
          </template>
        </article-detail>
        <common-title :titleName="'简介'" class="mt-20px">
        </common-title>
        <div class="platform">
          <div class="platform-content " v-html="detailData.content"></div>
        </div>
        <div class="mb-120px"></div>
        <section class="pay-bottom" v-if="order_seqno&&detailData.status=='UNPAID'&&!noShowLeft">
          <div class="cancel" @click="gotoCancel">取消订单</div>
          <div class="pay-btn" @click="goToPay">微信支付</div>
          <!-- <div class="pay-btn" @click="goToPay"></div> -->
        </section>
      </div>
      <loading v-if="isShowLoading" :isAll="true"></loading>
    </div>
  </div>
</template>

<script>
import { getWXSign, getQueryString } from '@/assets/js/wx.js'
import { getArticleDetail, trainCoursePay, trainCourseList, trainCourseCancel } from "@/fetch/api";
import { articleDetail, Loading, commonTitle, commonHeader } from "@/components/common";
import menZhen from '@/assets/images/menzhen@2x.png'
import { mapState } from 'vuex';
export default {
  props: ['name', 'haveBtn', 'id', 'order_seqno', 'isGOTwo'],
  components: {
    articleDetail,
    Loading,
    commonTitle,
    commonHeader
  },
  data() {
    return {
      detailData: {},
      inforArr: [],
      isShowLoading: true,
      isShowBtn: true,
      isComplete: false,
      noShowLeft: false
    };
  },
  computed: {
    ...mapState({
      clinic: state => state.clinic
    })
  },
  beforeRouteLeave(to, from, next) {
    to.meta.isSelectId = 2
    next()
  },
  created() {
    if (window.location.href.indexOf('isWxShare') > -1) {
      this.noShowLeft = true
    }
    this.order_seqno ? this._getDetailData() : this._initData()
  },
  methods: {
    leftToggle() {
      this.isGOTwo === 1 ? this.$router.go(-2) : this.$router.go(-1)
    },
    goEntry() {
      this.$router.push({
        path: '/personPage/trainingCoure',
        query: {
          title: this.detailData.title,
          author: this.detailData.author,
          pubdate: this.$options.filters.dateFormat(this.detailData.pubdate, "yyyy-MM-dd hh:mm"),
          addr: this.detailData.addr,
          price: Number(this.detailData.price),
          remark: this.detailData.remark,
          id: this.detailData.id
        }
      })
    },
    gotoCancel() {
      this.$Message.confirm(('确定取消订单?'), () => {
        let params = {
          order_seqno: this.order_seqno,
        }
        trainCourseCancel(params).then(res => {
          if (res.code === 1000) {
            this.$Message.infor("取消报名成功!", () => {
              this.$router.go(-1)
            })
          } else {
            this.$Message.infor("取消报名失败!" + res.msg)
          }
        })
      })
    },
    goToPay() {
      let params = {
        order_seqno: this.order_seqno,
        order_type: 10,
        type: 'url'
      }
      trainCoursePay(params).then(res => {
        if (res.code === 1000) {
          window.location.href = res.data
        } else {
          this.$Message.infor("跳转支付失败！")
        }
      })
    },
    _getDetailData() {
      //获取动态的详情内容
      trainCourseList({ order_seqnos: [this.order_seqno] }).then(res => {
        if (res.code == 1000) {
          this.detailData = res.data[0];
          //haveBtn 判断入口不一样 样式的不一样
          this.inforArr =
            [
              { key: '时间：', value: this.$options.filters.dateFormat(this.detailData.train_time, "yyyy-MM-dd hh:mm") },
              { key: '地点：', value: this.detailData.address },
              { key: '报名时间：', value: this.$options.filters.dateFormat(this.detailData.create_time, "yyyy-MM-dd hh:mm") },
              { key: '报名人员：', value: this.detailData.register_name + '/' + this.detailData.register_mobile },
              { key: '订单状态：', value: this.orderStatus(this.detailData.status) }
            ]
        } else {
          this.$Message.infor('网络出错！')
        }
        this.isShowLoading = false
        this.isComplete = true
      });
    },
    _initData() {
      //获取动态的详情内容
      getArticleDetail(this.id).then(res => {
        if (res.code == 1000) {
          this.detailData = res.data;
          //haveBtn 判断入口不一样 样式的不一样
          // console.log(window.location.origin + window.location.pathname.replace(/homePage/, 'sharePage') + '?path=' + encodeURIComponent(window.location.href.split('#')[1] + '&isWxShare=1'))
          this.inforArr =
            [
              { key: '时间：', value: this.$options.filters.dateFormat(this.detailData.pubdate, "yyyy-MM-dd hh:mm") },
              { key: '地点：', value: this.detailData.addr }
            ]
          try {
            getWXSign.apply(this).then(({ wx, appId }) => {
              wx.updateAppMessageShareData({
                title: res.data.title, // 分享标题
                desc: res.data.introduction || '  ', // 分享描述
                link: window.location.origin + window.location.pathname.replace(/homePage/, 'sharePage') + '?path=' + encodeURIComponent(window.location.href.split('#')[1] + '&isWxShare=1'),
                imgUrl: res.data.imgUrl ? res.data.imgUrl : (this.clinic.logo ? this.clinic.logo : menZhen), // 分享图标
                success: function () {
                  // 设置成功
                }
              })

              wx.updateTimelineShareData({
                title: res.data.title, // 分享标题
                link: window.location.origin + window.location.pathname.replace(/homePage/, 'sharePage') + '?path=' + encodeURIComponent(window.location.href.split('#')[1] + '&isWxShare=1'),
                imgUrl: res.data.imgUrl ? res.data.imgUrl : (this.clinic.logo ? this.clinic.logo : menZhen), // 分享图标
                success: function () {
                  // 设置成功
                }
              })
            })
          } catch (e) {
            console.log(e)
          }
        } else {
          this.$Message.infor('网络出错！')
        }
        this.isShowLoading = false
        this.isComplete = true
      });
    },
    orderStatus(item) {
      switch (item) {
        case 'UNPAID':
          return '待支付'
        case 'CANCEL':
          return '取消'
        case 'DONE':
          return '完成'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.entry-detail {
  overflow: auto;
}
.btn {
  background: $yellowColor;
  width: 690px;
  height: 80px;
  border-radius: 8px;
  color: #ffffff;
  font-size: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}
.platform {
  background: $bgwhite2;
  height: 100%;
  padding: 10px 30px;
  width: 750px;
  overflow: hidden;
  &-content {
    width: 100%;
    @extend %normalTitle;
    div,
    p,
    img {
      // box-sizing: border-box;
      max-width: 100% !important;
      height: auto !important;
    }
  }
}
.pay-bottom {
  position: fixed;
  bottom: 0px;
  left: 0px;
  height: 112px;
  width: 100%;
  background: $bgwhite2;
  padding: 0 43px;
  z-index: 999;
  @extend %aglinItem;
}
.pay-btn {
  background: #4dbc89 !important;
  width: 320px;
  height: 80px;
  border-radius: 8px;
  color: #ffffff;
  font-size: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cancel {
  background: #ffffff !important;
  width: 320px;
  height: 80px;
  border-radius: 8px;
  color: #4dbc89;
  border: 2px solid #4dbc89;
  font-size: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 24px;
}

.mb-120px {
  margin-bottom: 120px;
}
</style>
<style lang="scss" scoped>
@import "../mallPage/mallOrderPart/commonDetail.scss";
</style>