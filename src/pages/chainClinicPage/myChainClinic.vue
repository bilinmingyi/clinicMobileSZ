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
import { changeClinic } from "@/fetch/api";
import { getClinicList } from '@/fetch/api'
import { getQueryString } from '@/assets/js/wx.js'
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
    },
    toggleEmployee(cliniclist = []) {
      let { clinic_id, employeeId, username, session_id, session_type } = this.$route.query;
      let user = cliniclist.find(item => {
        // console.log(item.clinic_id)
        // console.log(clinic_id)
        return item.clinic_id == clinic_id
      })
      console.log(cliniclist)
      console.log(clinic_id)
      console.log(user)
      let params = {
        user_id: Number(user.user_id) || '',
        clinic_id: Number(clinic_id)
      }
      console.log(params)
      changeClinic(params).then(res => {
        if (res.code === 1000) {
          // this.$router.push({ name: "homePage" })
          window.location.href = `/yzshis/weixin/homePage#/homePage/clinicChat?employeeInfor=1&username=${username}&session_id=${session_id}&session_type=${session_type}&userId=${employeeId}&sex=0`;
        } else {
          this.$Message.infor("进去机构失败！！！" + res.msg);
        }
        this.isComplete = false
      })
    }
  },
  async created() {
    const { employeeInfor, mobile } = this.$route.query;
    this.showIndex = this.$route.meta.tarIndex
    //处理客服信息问题
    if (employeeInfor) {
      let params = { mobile }
      getClinicList(params).then(res => {
        if (res.code == 1000) {
          this.toggleEmployee(res.data)
        } else {
          this.$Message.infor('获取机构列表出错！')
        }
      })
      return
    }
    //   //兜底 防止某些手机有刷新功能 不刷新不会请求
    if (this.clinicsList.length === 0) {
      await this.getActClinic()

    }
    if (this.clinicsList.length === 1) {
      let params = {
        user_id: this.clinicsList[0].user_id,
        clinic_id: this.clinicsList[0].clinic_id
      }
      changeClinic(params).then(res => {
        if (res.code === 1000) {
          // this.$router.push({ name: "homePage" })
          window.location.href = "/yzshis/weixin/homePage#/homePage/"
        } else {
          this.$Message.infor("进去机构失败！！！" + res.msg);
        }
        this.isComplete = false
      })
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

