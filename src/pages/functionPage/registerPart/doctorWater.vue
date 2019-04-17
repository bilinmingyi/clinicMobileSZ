<template>
  <div>
    <date-select
      ref="dateSelect"
      @selectToday="selectToday"
      @selectYesterday="selectYesterday"
      @selectThisMonth="selectThisMonth"
      @selectLastMonth="selectLastMonth"
      @selectQuery="selectQuery"
    ></date-select>
    <section class="water">
      <div class="mt88"></div>
      <div class="water-content" v-for="(item,index) in payStreamData" :key="index">
        <div>
          <span>{{item.createTime|dateFormat}}</span>
          <span>{{item.doctorName}}</span>
        </div>
        <div>
          <span>{{item.patientName}}: {{item.patientMobile}}</span>
          <span class="success">{{item.status|appointStatus}}</span>
        </div>
        <p>
          <span>应收金额：￥{{item.amountReceivable}}</span>
          <!-- <span>优惠金额：￥0</span> -->
          <span>欠费金额：￥{{item.amountRefund}}</span>
        </p>
      </div>
      <without-data v-show="hasData&&isLoad"></without-data>
      <load-more v-show="isShowLoad&&isLoad" @loadMore="loadMore"></load-more>
    </section>
  </div>
</template>
<script>
import functionMixins from "@/assets/js/functionMixins"
import { registerStream } from "@/fetch/api";
export default {
    mixins: [functionMixins],
  data() {
    return {
    };
  },
  methods: {
    getWater(val) {
      let params = {
        start_time: val.startTime,
        end_time: val.endTime,
        page: this.page,
        statusArr: ["DONE", "TREAT_WAITING"],
        page_size: this.pageSize
      };
      registerStream(params).then(res => {
        if (res.code === 1000) {
          res.data.forEach(item => {
            this.payStreamData.push(item);
          });
        } else {
          this.$Message.infor(res.msg);
        }
        if (res.data.length != 10) {
          this.isShowLoad = false; //表示没有更多数据了
        }
        this.isLoad = true;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.mt88{
  padding-top: 100px;
}
.water {
  overflow: auto;
  width: 100%;
  &-content {
    background: $bgwhite2;
    padding: 30px 20px 30px 30px;
    @include commonBorder();
    div {
      display: flex;
      justify-content: space-between;
      @extend %normalTitle;
      font-size: 30px;
      padding-bottom: 16px;
      .success {
        color: $simpleGray;
      }
    }
    p {
      // display: flex;
      font-size: 28px;
      color: $grayColor;
      // word-wrap: break-word;
      span {
        padding-right: 30px;
        word-wrap: break-word;
        &:nth-last-child(1) {
          padding-right: 0;
        }
      }
    }
  }
}
</style>


