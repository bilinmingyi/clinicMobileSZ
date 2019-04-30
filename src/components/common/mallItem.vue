<!--
    商城列表的选项的样式
 -->
 <template>
  <div class="mall">
    <div class="mall-item" @click="jumpTo">
      <p>
        <span>{{itemName}}：{{itemNumber}}</span><span class="time">{{itemTime}}</span>
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
    }
  }
}
</script>
 <style lang="scss" scoped>
.mall {
  &-item {
    height: 132px;
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
    time {
      font-size: 28px;
    }
  }
}
</style>
 
 
 