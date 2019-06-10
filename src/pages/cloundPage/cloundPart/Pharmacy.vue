<!-- 药房选择栏 -->
<template>
  <!-- key值需要加的 让component辨别不一样的组件 -->
  <div v-if="!isNoShowPharamcy" :key="cloundTab.id">
    <div class="info-item">
      <div class="radio-group">
        <input type="radio" name="choose-drug" id="choose-drug-clinic" :checked="drugs_statues==1" @click="changeStatue(1)">
        <label for="choose-drug-clinic" :class="[{'no-ative':drugs_statues===2}]">诊所药房</label>
        <input type="radio" id="choose-drug-clound" name="choose-drug" :checked="drugs_statues==2" @click="changeStatue(2)">
        <label for="choose-drug-clound" :class="[{'no-ative':drugs_statues===1}]">国大药房</label>
      </div>
      <div class="delte-btn" @click="deleteTab">
        删除处方
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
export default {
  data() {
    return {
      drugs_statues: 1,
      noShowPharmacy: ["PROJECT", "METERIAL"]
    }
  },
  computed: {
    ...mapState(["cloundTab"]),
    isNoShowPharamcy() {
      return this.noShowPharmacy.includes(this.cloundTab.key)
    }
  },
  methods: {
    ...mapMutations(["deleteCloundTab"]),
    changeStatue(index) {
      let self = this
      if (self.drugs_statues === index) {
        return;
      }
      self.drugs_statues = index;
    },
    deleteTab() {
      this.$Message.confirm('确认删除处方么？', () => {
        this.deleteCloundTab(this.cloundTab)
      })
    }
  }

}
</script>
<style lang="scss" scoped>
.info-item {
  // margin-top: 184px;
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  padding-right: 30px;
  background: #fff;
  height: 96px;
  width: 100%;
  @extend %aglinItem;
  font-size: 30px;
  padding-left: 20px;
  .radio-group {
    @extend %aglinItem;
    input {
      width: 80px;
      height: 40px;
      background: $yellowColor;
    }
    label {
      font-size: 30px;
      color: #3f3f3f;
      width: 140px;
    }
    .no-ative {
      color: #7c7c7c;
    }
  }
}
.radio-group label {
  position: relative;
  width: 96px;
}
.radio-group label::after {
  position: absolute;
  top: 0;
  left: -52px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  content: "";
  border: 2px solid #7c7c7c;
  border-radius: 50%;
  background: #fff;
}
.radio-group input {
  visibility: hidden;
}
.radio-group input:checked + label::after {
  border: none;
  background-image: url("../../../assets/images/xuanze@2x.png");
  background-size: 40px 40px;
}

.delte-btn {
  background: $redColor;
  color: $bgwhite2;
  width: 168px;
  height: 64px;
  text-align: center;
  line-height: 64px;
  font-size: 28px;
  border-radius: 8px;
}
</style>

