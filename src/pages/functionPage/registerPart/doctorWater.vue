<template>
  <div>
    <date-select @selectToday="selectToday" @selectYesterday="selectYesterday" @selectThisMonth="selectThisMonth" @selectLastMonth="selectLastMonth" @selectQuery="selectQuery"></date-select>
    <section class="water">
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
      <div class="no-platform" v-show="hasData&&isLoad">没有更多数据了...</div>
         <load-more v-show="isShowLoad&&isLoad" @loadMore="loadMore"></load-more>
    </section>


  </div>
</template>
<script>
import dateSelect from "@/components/common/dateSelect";
import loadMore from "@/components/common/loadMore";
import {registerStream} from "@/fetch/api";
export default {
  data() {
    return {
      page:1,
      pageSize:10,
      payStreamData:[],
      isShowLoad: true,
      isLoad:false,
      copyVal:{
        startTime:'',
        endTime:''
      }
    };
  },
  computed: {
    hasData() {
      return this.payStreamData.length === 0;
    }
  },
  methods:{
      getWater(val){
        let params={
            "start_time":val.startTime,
            "end_time":val.endTime,
            "page":this.page,
            "statusArr":['DONE','TREAT_WAITING'],
            "page_size":this.pageSize
        }
        registerStream(params).then(res=>{
          console.log(res)
          if(res.code===1000){
            res.data.forEach((item)=>{
                this.payStreamData.push(item)
            })
            // this.payStreamData = this.payStreamData.push(...res.data)
              console.log(res)
          }else{
            this.$Message.infor(res.msg)
          }
          if(res.data.length!=10){
            this.isShowLoad = false;//表示没有更多数据了
          }
          this.isLoad = true;
        })
      },
      selectToday(val){
           this.$set(this.copyVal,'startTime',val.startTime);
        this.$set(this.copyVal,'endTime',val.endTime);
        this._initData();

        this.getWater(val)
      },
      selectYesterday(val){
           this.$set(this.copyVal,'startTime',val.startTime);
        this.$set(this.copyVal,'endTime',val.endTime);
        this._initData();
           this.getWater(val)
      },
      selectThisMonth(val){
          this.$set(this.copyVal,'startTime',val.startTime);
        this.$set(this.copyVal,'endTime',val.endTime);
      this._initData();
           this.getWater(val)
      },
      selectLastMonth(val){
        let templ=val;
        this.copyVal=templ;
             console.log(templ)
             console.log(11)
             console.log(this.copyVal)
            this._initData();
           this.getWater(val)
      },
      selectQuery(val){
        this.$set(this.copyVal,'startTime',val.startTime);
        this.$set(this.copyVal,'endTime',val.endTime);
      this._initData();
           this.getWater(val)
      },
      _initData(){
     this.page=1;
        this.pageSize = 10;
        this.payStreamData=[];
        this.isShowLoad = true;
        this.isLoad = false;
      },
      loadMore(){
        this.page++;
        console.log(this.copyval)
        this.getWater(this.copyval)
      }
  },
  components: {
    dateSelect,
    loadMore
  },
  created(){
    let startTimeStr = (new Date()).setHours(0, 0, 0, 0);
    let endTimeStr =(new Date()).setHours(23, 59, 59, 59)
    let val ={ startTime: startTimeStr, endTime: endTimeStr}
    this.selectToday(val);
  }
};
</script>
<style lang="scss" scoped>
.water {
  margin-top: 20px;
  overflow: auto;
  max-height: 1000px;
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


