<!-- 云处方 患者病历-->
<template>
  <div class="patient">
    <common-title :isBold="true"></common-title>
    <div class="patient-content">
      <input-select :isShowSelect="false" :title="'姓名'" :placeHolder="'请输入患者姓名'"></input-select>
      <input-select :isShowSelect="false" :title="'电话'" :placeHolder="'请输入联系电话'"></input-select>
      <sex-change></sex-change>
      <!-- <input-select :isShowSelect="false" :title="'诊金'" :placeHolder="'请输入'" :noBorder="true"></input-select> -->
      <input-select :isShowSelect="false" :title="'诊金'" :placeHolder="'请输入'" :noBorder="true"></input-select>
    </div>
    <div class="patient-Bcontent">
      <input-select :isShowSelect="false" :title="'主述'" :placeHolder="'请输入'"></input-select>
      <input-select :isShowSelect="false" :title="'中医'" :placeHolder="'请输入诊断'"></input-select>
      <input-select :isShowSelect="false" :title="'西医'" :placeHolder="'请输入诊断'" :noBorder="true"></input-select>
    </div>

  </div>
</template>
<script>
import { commonTitle, inputSelect, sexChange } from "@/components/common"
export default {
  data() {
    return {}
  },
  components: {
    commonTitle,
    inputSelect,
    sexChange
  }
}
</script>
<style lang="scss" scoped>
.patient {
  &-content {
    background: #ffffff;
    // padding: 0 30px;
  }
  &-Bcontent {
    background: #ffffff;
    margin-top: 30px;
    // padding: 0 30px;
  }
}
</style>

