<template>
  <div>
    <section class="water">
      <div class="water-content" v-for="(item,index) in chargeList">
        <div>
          <span>{{item.createTime|dateFormat}}</span>
          <span class="success">{{item.type|priceType}}</span>
        </div>
        <div>
          <span>{{item.patientName}}: {{item.patientMobile}}</span>
        </div>
        <div>
          <span>医生：{{item.doctorName}}</span>
          <span>{{item.payType | payTypeDetail}}：￥{{item.amount}}</span>
        </div>
      </div>

    </section>
  </div>
</template>
<script>
export default {
  props:['chargeList'],
  data() {
    return {};
  },
  components: {
  }
};
</script>
<style lang="scss" scoped>
.water {
  margin-top: 20px;
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
          font-weight: 600;
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


