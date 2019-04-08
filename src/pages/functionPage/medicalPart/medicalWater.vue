<template>
  <div>
    <date-select></date-select>
    <section class="water">
      <div class="water-content">
        <div>
          <span>2019-03-13 15:16:48</span>
          <span>demo</span>
        </div>
        <div>
          <span>A5: 13728089836</span>
          <span class="success">完成</span>
        </div>
        <p>
          <span>应收金额：￥0.2</span>
          <span>优惠金额：￥0</span>
          <span>欠费金额：￥0</span>
        </p>
      </div>
      <div class="water-content">
        <div>
          <span>2019-03-13 15:16:48</span>
          <span>demo</span>
        </div>
        <div>
          <span>A5: 13728089836</span>
          <span class="success">完成</span>
        </div>
        <p>
          <span>应收金额：￥0.222222</span>
          <span>优惠金额：￥0.2222222</span>
          <span>欠费金额：￥2222220</span>
        </p>
      </div>
    </section>
  </div>
</template>
<script>
import dateSelect from "@/components/common/dateSelect";
export default {
  data() {
    return {};
  },
  components: {
    dateSelect
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


