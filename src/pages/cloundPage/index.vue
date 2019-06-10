<template>
  <div>
    <common-header :titleName="$route.meta.title" @leftToggle="initData"></common-header>
    <!-- 常用功能一级路由-->
    <router-view />
  </div>
</template>
<script>
import { commonHeader } from "@/components/common";
import { mapMutations } from 'vuex';
export default {
  data() {
    return {
      initCloundTab: { key: 'PATIENT', value: '患者病历', id: 0 },
      initCloundTabList: [
        { key: 'PATIENT', value: '患者病历', id: 0 },
        { key: 'GRAIN', value: '配方颗粒', id: 1 },
        { key: 'CHINA_MEDICINE', value: '中药饮片', id: 2 },
        { key: 'PRODUCT', value: '成药处方', id: 3 }
      ]
    };
  },
  components: {
    commonHeader
  },
  computed: {

  },
  methods: {
    ...mapMutations(["initCloundData"]),
    initData() {
      // 如果是在患者接诊的页面返回的时候 初始化选中的tab选项 和tab数组
      if (this.$route.meta.isInit) {
        let initData = {
          tab: this.initCloundTab,
          tabList: this.initCloundTabList
        }
        this.initCloundData(initData)
      }
    }
  }
};
</script>
