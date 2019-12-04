
<template>
  <!-- 待审核详情页面 -->
  <div>
    <div class="auditDetail" ref="auditDetail">
      <div class="auditDetail-content">
        <common-title :titleName="title">
        </common-title>
        <!-- 订单审核的描述 -->
        <div class="auditDetail-desc">
          <p>
            <span class="left">讲师名称：</span>
            <span>{{author}}</span>
          </p>
          <p>
            <span class="left">培训时间：</span>
            <span>{{pubdate}}</span>
          </p>
          <!-- <p>
            <span class="left">培训时长：：</span>
            <span>2小时</span>
          </p> -->
          <p>
            <span class="left">培训地点：</span>
            <span>{{addr}}</span>
          </p>
        </div>
        <input-select :isShowSelect="false" :title="'报名人员'" :placeHolder="'请输入报名人员'" ref="mark1" :hasFocus="false"></input-select>
        <input-select :isShowSelect="false" :title="'联系电话'" :placeHolder="'请输入联系电话'" ref="mark2" :hasFocus="false" iType="number"></input-select>
        <input-select :isShowSelect="false" :title="'缴费金额'" ref="mark3" :modelValue="price" :isReadonly="true" :isRed="true">
        </input-select>
        <div class="mt-20px remark">
          <p>备注信息：</p>
          <textarea :placeholder="remark" v-model="entryRemark" @blur="textBlur"></textarea>
        </div>

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
import { commonTitle, inputSelect, commonHeader } from "@/components/common";
import { trainCourseOrder, trainCoursePay } from "@/fetch/api"
export default {
  props: ['title', 'author', 'pubdate', 'addr', 'price', 'id', 'remark'],
  data() {
    return {
      auditMemo: '',
      auditDetail: {},
      uploadData: false,
      allDoctor: [],
      entryRemark: ''
    };
  },
  components: {
    commonTitle,
    inputSelect,
    commonHeader
  },

  methods: {
    goodsOperation(type) {
      if (type === 'reject') {
        this.$router.go(-1)
        return
      }
      if (!/^\d{11}$/.test(this.$refs.mark2.inputValue.trim())) {
        this.$Message.infor('请输入正确的联系电话')
        return
      }
      if (this.$refs.mark1.inputValue.trim() === '') {
        this.$Message.infor("请输入报名人员的名字")
        return
      }

      // if (this.$refs.mark2.inputValue.trim() === '') {
      //   this.$Message.infor("请输入联系电话")
      //   return
      // }
      let operationParams = {
        article_id: this.id,
        register_name: this.$refs.mark1.inputValue,
        register_mobile: this.$refs.mark2.inputValue,
        remark: this.entryRemark
        // register_name: this.$refs.mark.inputValue,
      }
      trainCourseOrder(operationParams).then(res => {
        if (res.code === 1000) {
          if (this.price == 0) {
            this.$Message.infor("报名成功!", () => {
              this.$router.replace({ path: '/personPage/entryDetail', query: { name: this.title, haveBtn: 'hide', order_seqno: res.data, isGOTwo: 1 } })
            })
          } else {
            this.$router.replace({ path: '/personPage/entryDetail', query: { name: this.title, haveBtn: 'hide', order_seqno: res.data, isGOTwo: 1 } })
          }
        } else {
          this.$Message.infor(res.msg)
        }
      })
    },
    textBlur() {
      window.scrollTo(0, 0)
    },
    goToPay(order) {
      let params = {
        order_seqno: order,
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
    }
  },
  created() { }
};
</script>
<style lang="scss" scoped>
@import "../mallPage/mallOrderPart/commonDetail.scss";
.remark {
  padding: 16px 30px;
  background: #ffffff;
  p {
    @extend %normalTitle;
  }
  textarea {
    margin-top: 20px;
    border: 1px solid #666666;
    padding: 10px;
    width: 90%;
    height: 140px;
    font-size: 30px;
  }
}
</style>
