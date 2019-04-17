<template>
  <div>
     <date-select
      @selectToday="selectToday"
      @selectYesterday="selectYesterday"
      @selectThisMonth="selectThisMonth"
      @selectLastMonth="selectLastMonth"
      @selectQuery="selectQuery"
    ></date-select>
    <section class="water">
      <div class="water-content" v-for="(item,index) in payStreamData">
        <div>
          <span>{{item.create_time| dateFormat}}</span>
          <span>{{item.doctor_name}}</span>
        </div>
        <div>
          <span>{{item.patient_name}}: {{item.patient_mobile}}</span>
          <span class="success">{{item.status|appointStatus}}</span>
        </div>
        <p>
          <span>应收金额：￥{{item.amount_receivable}}</span>
          <span>优惠金额：￥{{item.discount}}</span>
          <span>欠费金额：￥{{item.amount_arrears}}</span>
        </p>
      </div>

            <without-data v-show="hasData&&isLoad"></without-data>
      <load-more v-show="isShowLoad&&isLoad" @loadMore="loadMore"></load-more>
    </section>
  </div>
</template>
<script>
import functionMixins from "@/assets/js/functionMixins"
import { medicalWater } from "@/fetch/api";
export default {
    mixins: [functionMixins],
  data() {
    return {
    };
  },
  methods:{
       getWater(val) {
            let params = {
                dispense_start_time: val.startTime,
                dispense_end_time: val.endTime,
                page: this.page,
                page_size: this.pageSize
            };
            console.log(params);
            medicalWater(params).then(res => {
                console.log(res);
                if (res.code === 1000) {
                    res.data.treatStreamList.forEach(item => {
                        this.payStreamData.push(item);
                    });
                    console.log(this.payStreamData);
                } else {
                    this.$Message.infor(res.msg);
                }
                console.log(res.data.length);
                if (res.data.treatStreamList.length != 10) {
                    this.isShowLoad = false; //表示没有更多数据了
                }
                this.isLoad = true;
            });
        },
  }
};
</script>
<style lang="scss" scoped>
.water {
   padding-top: 180px;
  // margin-top: 20px;
  overflow: auto;
  // max-height: 1000px;
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
      font-size: 28px;
      color: $grayColor;
      word-wrap: break-word;
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


