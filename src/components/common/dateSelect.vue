<template>
  <div class="select">
    <section class="select-top">
      <div :class="{'nt-button':chooseNative==1}" @click="changeNative(1)">今日</div>
      <div :class="{'nt-button':chooseNative==2}" @click="changeNative(2)">昨日</div>
      <div :class="{'nt-button':chooseNative==3}" @click="changeNative(3)">本月</div>
      <div :class="{'nt-button':chooseNative==4}" @click="changeNative(4)">上月</div>
    </section>
    <section class="select-bottom">
      <input type="date" placeholder="起始日期" v-model="startTime">
      <input type="date" placeholder="结束日期" class="work_search_Time FlexOne mr10" v-model="endTime">
      <div class="work_search_btn" @click.stop="queryData">查询</div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      startTime: "2019-04-01",
      endTime: "2019-05-01",
      chooseNative: 1
    };
  },
  methods: {
    /**
     * 今日 昨天 本月 上个月 传出事件和更改样式
     * @param index 1 今日 2 昨日 3 本月 4 上个月
     */
    changeNative(index) {
      if (this.chooseNative == index) {
        return;
      }
      this.formatTime(index);
      this.chooseNative = index;
      let startTimeStr=(new Date(this.startTime)).setHours(0, 0, 0, 0);
      let endTimeStr = (new Date(this.endTime)).setHours(23, 59, 59, 59);
      let timeParams = { startTime: startTimeStr, endTime: endTimeStr};
      console.log(timeParams);
      switch (index) {
        case 1:
          this.$emit("selectToday", timeParams);
          break;
        case 2:
          this.$emit("selectYesterday", timeParams);
          break;
        case 3:
          this.$emit("selectThisMonth", timeParams);
          break;
        case 4:
          this.$emit("selectLastMonth", timeParams);
          break;
      }
    },
    queryData() {
     let startTimeStr=(new Date(this.startTime)).setHours(0, 0, 0, 0);
      let endTimeStr = (new Date(this.endTime)).setHours(23, 59, 59, 59);
      let timeParams = { startTime: startTimeStr, endTime: endTimeStr};
             if(this.startTime>this.endTime){
          this.$Message.infor("开始时间不能大于结束时间");
      }
      this.$emit("selectQuery", timeParams);
    },
    /**
     * 点击事件选择器时 过滤成 yyyy-MM-dd
     * @param index 1 今日 2 昨日 3 本月 4 上个月
     */
    formatTime(index) {
      let today = new Date();
      let start = "",
        end = "";
      if (index == 1) {
        today.setHours(0);
        today.setMinutes(0);
        today.setSeconds(0);
        start = today.getTime();
        end = today.getTime();
      } else if (index == 2) {
        today.setDate(today.getDate() - 1);
        today.setHours(0);
        today.setMinutes(0);
        today.setSeconds(0);
        start = today.getTime();
        end = today.getTime();
      } else if (index == 3) {
        start = new Date(today.getFullYear(), today.getMonth(), 1).getTime();
        end = new Date(today.getFullYear(), today.getMonth() + 1, 0).getTime();
      } else if (index == 4) {
        start = new Date(
          today.getFullYear(),
          today.getMonth() - 1,
          1
        ).getTime();
        end = new Date(today.getFullYear(), today.getMonth(), 0).getTime();
      }
      this.startTime = this.$options.filters.dateFormat(start, "yyyy-MM-dd");
      this.endTime = this.$options.filters.dateFormat(end, "yyyy-MM-dd");
    }
  },
  mounted() {
    this.formatTime(1)
    // this.changeNative(1)
  }
};
</script>
<style lang="scss" scoped>
.select {
  background: $bgwhite2;
  width: 100%;
  height: 200px;
  position:fixed;
  @include commonBorder();
  padding: 20px 30px;
  &-top {
    display: flex;
    div {
      flex: 1;
      @include simpleButton(60px, 140px);
      font-size: 26px;
      font-weight: 400;
      margin-right: 40px;
      &:nth-last-child(1) {
        margin-right: 0;
      }
    }
    .nt-button {
      @include deepButton(60px, 140px);
    }
  }
  &-bottom {
    padding-top: 30px;
    display: flex;
    input {
      @include newsButton(60px, 220px);
      font-size: 24px;
      color: $gray2;
      line-height: 60px;
      text-align: center;
      margin-right: 30px;
      flex: 1;
    }
    div {
      @include deepButton(60px, 140px);
    }
  }
}
</style>


