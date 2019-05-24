<!--
 我的连锁诊所页面
 id为1 跳转到我的诊所页面
 id为2 跳转到数据统计的页面 
-->
<template>
  <div class="chain-clinc">
    <div class="fixed-tar">
      <common-tar :tabList="clinicTar" @changeTar="changeTar"></common-tar>
    </div>
    <div class="mt-184px"></div>
    <component :is="showDifFunc"></component>
    <!-- <my-clinic></my-clinic> -->
  </div>
</template>
<script>
import { commonTar } from "@/components/common";
import myClinic from "./chainClinicPart/myClinic"
import staticData from "./chainClinicPart/staticData"
export default {
  beforeRouteEnter(to, from, next) {
    console.log(from)
    next();
  },
  beforeRouteLeave(to, from, next) {
    //一个页面控制4个功能 控制不同功能的标题
    if (to.name === 'myStaticDataPage') {
      switch (to.query.func) {
        case "ENTER":
          to.meta.title = "入库统计";
          break
        case "REGISTER":
          to.meta.title = "挂号统计";
          break
        case "MEDICAL":
          to.meta.title = "就诊统计";
          break
        case "CHARGE":
          to.meta.title = "收费统计";
          break
      }
    }
    next();
  },
  data() {
    return {
      clinicTar: [
        { key: 'MY_CLINIC', value: "我的诊所", id: 1 },
        { key: 'STATIC_DATA', value: "统计数据", id: 2 },
      ],
      showIndex: 1 //默认展示id为1的组件
    };
  },
  components: {
    commonTar,
    myClinic,
    staticData
  },
  computed: {
    showDifFunc() {
      return this.showIndex === 1 ? "myClinic" : "staticData";
    }
  },
  methods: {
    changeTar(val) {
      switch (val) {
        case 'MY_CLINIC':
          this.showIndex = 1;
          break;
        case 'STATIC_DATA':
          this.showIndex = 2;
          break;
      }
    }
  },
  created() {

  }
};
</script>
<style lang="scss" scoped>
.fixed-tar {
  position: fixed;
  top: 88px;
  height: 96px;
  width: 100%;
}
.chain-clinc {
  height: calc(100vh - 184px);
  width: 100%;
  z-index: 99;
}
</style>

