<template>
  <div>
    <div class="pt96"></div>
     <date-select
      @selectToday="selectToday"
      @selectYesterday="selectYesterday"
      @selectThisMonth="selectThisMonth"
      @selectLastMonth="selectLastMonth"
      @selectQuery="selectQuery"
    ></date-select>
    <div class="doctor">
      <first-table :firstTableList="firstTableList">
        <template slot="left">￥</template>
        <template slot="right" class="pl5">次</template>
      </first-table>
            <charge-list v-show="!hasData" :chargeList="payStreamData"></charge-list>
     <without-data v-show="hasData&&isLoad"></without-data>
      <load-more v-show="isShowLoad&&isLoad" @loadMore="loadMore"></load-more>
    </div>
  </div>
</template>
<script>
import functionMixins from "@/assets/js/functionMixins"
import {firstTable} from "@/components/common";
import chargeList from "./chargeList";
import { registerCharge } from "@/fetch/api";
export default {
     mixins: [functionMixins],
  data() {
    return {
      firstTableList: [
        {
          title: "收费总额",
          value: "0",
          location: "left"
        },
        {
          title: "现金总额",
          value: "0",
          location: "left"
        },
        {
          title: "微信总额",
          value: "0",
          location: "left"
        },
        {
          title: "支付宝总额",
          value: "0",
          location: "left"
        },
        {
          title: "银行卡总额",
          value: "0",
          location: "left"
        },
        {
          title: "医保卡总额",
          value: "0",
          location: "left"
        }
      ]
    };
  },
  components: {
    firstTable,
    chargeList
  },
  methods: {
  getWater(val) {
      let params = {
        end_time: val.endTime,
        order_type: 2,
        page: this.page,
        page_size: this.pageSize,
        start_time: val.startTime
      };
      registerCharge(params).then(res => {
        if (res.code === 1000) {
          res.data.detail.list.forEach(item => {
            this.payStreamData.push(item);
          });
          let detailData = {
            cash: "0",
            weixin: "0",
            aliPay: "0",
            bankCard: "0",
            insurance: "0"
          };
          res.data.prices.forEach(function(item) {
            if (item.pay_type == 1 || item.pay_type == 4) {
              detailData.weixin += item.amount;
            } else if (item.pay_type == 2 || item.pay_type == 5) {
              detailData.aliPay += item.amount;
            } else if (item.pay_type == 3) {
              detailData.bankCard = item.amount;
            } else if (item.pay_type == 6) {
              detailData.cash = item.amount;
            } else if (item.pay_type == 7) {
              detailData.insurance = item.amount;
            }
          });
              this.firstTableList[0].value =
            Number(detailData.cash) +
            Number(detailData.weixin) +
            Number(detailData.aliPay) +
            Number(detailData.bankCard) +
            Number(detailData.insurance);
          this.firstTableList[1].value = Number(detailData.cash);
          this.firstTableList[2].value = Number(detailData.weixin);
          this.firstTableList[3].value = Number(detailData.aliPay);
          this.firstTableList[4].value = Number(detailData.bankCard);
          this.firstTableList[5].value = Number(detailData.insurance);
        } else {
          this.$Message.infor(res.msg);
        }
        if (res.data.detail.list.length != 10) {
          this.isShowLoad = false; //表示没有更多数据了
        }
        this.isLoad = true;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.doctor {
    padding-top: 180px;
  // background: $bgwhite2;
  // max-height: 1000px;
  overflow: auto;
}
</style>

