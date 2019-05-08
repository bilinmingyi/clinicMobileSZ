<!--
    商城列表的选项的样式
 -->
 <template>
  <div class="mall">
    <div class="mall-item" @click="jumpTo">
      <p class="title">诊所药房</p>
      <p>
        <span>{{itemName}}：{{itemNumber}}</span><span class="time">{{toggleTime(itemTime)}}</span>
      </p>
      <p>
        <span>金额：￥{{itemMoney}}</span>
        <span>
          <slot name="type"> </slot>
        </span>
      </p>
    </div>
  </div>
</template>
 <script>
export default {
  name: "blmyMallItem",
  props: {
    itemName: {
      type: String,
      default: ""
    },
    itemNumber: {
      type: [Number, String],
      default: ""
    },
    itemTime: {
      type: String,
      default: ""
    },
    itemMoney: {
      type: [String, Number],
      default: "0"
    }
  },
  data() {
    return {}
  },
  methods: {
    jumpTo() {
      this.$emit("jumpDetail")
    },
    toggleTime(val) {
      //今天的时间 不显示 年月日 
      let today = new Date()
      let todayTime = this.$options.filters.dateFormat(today, "yyyy/MM/dd")
      if (todayTime === val.toString().substr(0, 10)) {
        return val.toString().substr(11)
      } else {
        return val.toString().substr(2)
      }

      // return val.subString(2)
    }
  }
}
</script>
 <style lang="scss" scoped>
.mall {
  &-item {
    .title {
      font-weight: 600;
    }
    // height: 132px;
    width: 100%;
    padding: 20px 30px;
    background: $bgwhite2;
    @include commonBorder();
    p {
      display: flex;
      justify-content: space-between;
      @extend %normalTitle;
      padding-bottom: 10px;
    }
    .time {
      font-size: 28px;
    }
  }
}
</style>
 
 
 