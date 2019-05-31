<!--
 我的连锁诊所页面
 id为1 跳转到我的诊所页面
 id为2 跳转到数据统计的页面 
-->
<template>
  <div v-if="isComplete">
    <common-header :titleName="$route.meta.title" :isShowLeft="false"></common-header>
    <div class="chain-clinc">
      <div class="fixed-tar">
        <common-tar :tabList="clinicTar" @changeTar="changeTar" :navtiveIndex="showIndex"></common-tar>
      </div>
      <div class="mt-184px"></div>
      <component :is="showDifFunc"></component>
    </div>
  </div>
</template>
<script>
import { commonTar, commonHeader } from "@/components/common";
import myClinic from "./chainClinicPart/myClinic"
import staticData from "./chainClinicPart/staticData"
import { mapState, mapActions } from 'vuex';
export default {
  beforeRouteLeave(to, from, next) {
    //如果不是进入统计数据 默认tar栏显示在我的诊所上
    if (to.name !== 'myStaticDataPage') {
      from.meta.tarIndex = 1
    }
    next()
  },
  data() {
    return {
      clinicTar: [
        { key: 'MY_CLINIC', value: "我的机构", id: 1 },
        { key: 'STATIC_DATA', value: "统计数据", id: 2 },
      ],
      showIndex: '', //默认展示id为1的组件
      isComplete: false
    };
  },
  components: {
    commonTar,
    myClinic,
    staticData,
    commonHeader
  },
  computed: {
    ...mapState(['clinicsList']),
    showDifFunc() {
      return this.showIndex === 1 ? "myClinic" : "staticData";
    }
  },
  methods: {
    ...mapActions(['getActClinic']),
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
  async created() {
    this.showIndex = this.$route.meta.tarIndex
    //   //兜底 防止某些手机有刷新功能 不刷新不会请求
    if (this.clinicsList.length === 0) {
      await this.getActClinic()
    }
    if (this.clinicsList.length === 1) {
      window.location.href = "/yzshis/weixin/homePage#/homePage/"
      this.isComplete = false
    } else {
      this.isComplete = true
    }

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

