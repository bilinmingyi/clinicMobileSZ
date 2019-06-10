<!-- 药的用法  -->
<template>
  <div class="usage">
    <input-select :isShowSelect="false" :isShowInput="false" :isNopadding="true">
      <template slot="leftTitle">
        <p class="left">处方金额</p>
      </template>
      <template slot="rightValue">
        <p class="right">￥568</p>
      </template>
    </input-select>
    <div v-show="isShowALLUsage">
      <section class="dosage">
        <div class="dosage-first">
          <p>药量(剂)</p>
          <div>
            <img src="@/assets/images/jian@2x.png" alt="" @click="reduceDosage">
            <input type="number" v-model="dosage">
            <span>剂</span>
            <img src="@/assets/images/jia@2x.png" alt="" @click="addDosage">
          </div>
        </div>
        <div class="dosage-second">
          <div class="temp-btn" v-for="(item,index) in dosageList" :key="index" @click="changeDosage(item)">{{item}}剂</div>
        </div>
      </section>
      <input-select :isShowInput="false" :isNopadding="true" :title="'频次'" :selectArray="herbalRpUsages" :cloundType="true"></input-select>
      <input-select :isShowInput="false" :isNopadding="true" :title="'用法'" :selectArray="medFrequency" :cloundType="true"></input-select>
      <input-select :isShowSelect="false" :isShowInput="false" :isNopadding="true" :title="'用量'">
        <template slot="rightValue">
          <div class="drugWeight">
            <input type="number" v-model="drugWeight" placeholder="请填写" @focus="mixinFocus($event)" @blur="mixinBlurs()">
            <p>ml</p>
          </div>
        </template>
      </input-select>
    </div>
    <input-select :isShowSelect="false" :title="'医嘱'" :isNopadding="true" :placeHolder="'请输入医嘱'" :noBorder="true"></input-select>
  </div>
</template>
<script>
import { inputSelect } from "@/components/common"
import inputToggle from "@/assets/js/inputToggle.js"
import { mapState } from 'vuex';
export default {
  mixins: [inputToggle('dosageBlur', 'dosageFoucs')],
  data() {
    return {
      dosage: 1,
      drugWeight: 0,
      dosageList: [7, 14, 30],
      showAllUsage: ["GRAIN", "CHINA_MEDICINE"]
    }
  },
  computed: {
    ...mapState(["cloundTab", "medFrequency", "herbalRpUsages"]),
    isShowALLUsage() {
      return this.showAllUsage.includes(this.cloundTab.key)
    }
  },
  components: {
    inputSelect
  },
  methods: {
    reduceDosage() {
      if (this.dosage <= 1) {
        return
      }
      this.dosage--
    },
    addDosage() {
      this.dosage++
    },
    changeDosage(item) {
      if (this.dosage == item) {
        return
      }
      this.dosage = item
    }
  }
}
</script>
<style lang="scss" scoped>
.usage {
  margin-top: 24px;
  padding: 0 30px;
  background: #ffffff;
  color: $grayColor;
  .left {
    color: $simpleGray;
  }
  .right {
    color: $redColor;
  }
  .dosage {
    img {
      height: 56px;
      width: 56px;
    }
    &-first {
      height: 96px;
      width: 100%;
      font-size: 32px;
      display: flex;
      p {
        line-height: 96px;
        padding-right: 48px;
      }
      div {
        @include commonBorder();
        flex: 1;
        @extend %aglinItem;
        input {
          width: 200px;
          padding: 0px 40px;
          font-size: 32px;
          text-align: center;
        }
        span {
          padding-right: 30px;
        }
      }
    }
    &-second {
      height: 96px;
      @extend %aglinItem;
      justify-content: flex-end;
      @include commonBorder();
      .temp-btn {
        @include simpleButton(64px, 150px, 32px);
        border-radius: 32px;
        margin-right: 20px;
      }
    }
  }
  .drugWeight {
    @extend %aglinItem;
    padding-left: 60px;
    input {
      position: static;
      width: 100px;
      border: 0px;
      margin-right: 30px;
      text-align: left;
    }
  }
}
</style>


