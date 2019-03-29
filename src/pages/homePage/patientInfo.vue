<template>
  <div class="patient-info">
    <common-header :titleName="'患者信息'" @leftToggle="leftToggle"></common-header>
    <div class="mt88"></div>
    <input-search></input-search>
    <section class="patient-bar">
      <div :class="['flex-mid-center',{'nt-bar':navtiveIndex==0}]" @click="changeIndex(0)">最新消息</div>
      <div :class="['flex-mid-center',{'nt-bar':navtiveIndex==1}]" @click="changeIndex(1)">患者列表</div>
    </section>
    <div v-show="navtiveIndex==0">
      <div class="patient-infolist" @click="goClinicChat('王凯歌')">
        <div class="infolist-item">
          <img src="@/assets/images/nan@2x.png" alt>
          <div class="item-mid ml24">
            <p class="item-name">王凯歌/男/26</p>
            <p class="item-content">这是消息这是消息这是消息这这是消息这是消息这是消息这这是…这是消息这是消息这是消息这这是…这是消息这是消息这是消息这这是…</p>
            <span class="item-time">上午12:45</span>
            <span class="info-nums">2</span>
          </div>
        </div>
      </div>
      <div class="patient-infolist" @click="goClinicChat('王凯歌')">
        <div class="infolist-item">
          <img src="@/assets/images/nv@2x.png" alt>
          <div class="item-mid ml24">
            <p class="item-name">王凯歌/男/26</p>
            <p class="item-content">这是消息这是消息这是消息这这是消息这是消息这是消息这这是…这是消息这是消息这是消息这这是…这是消息这是消息这是消息这这是…</p>
            <span class="item-time">上午12:45</span>
            <span class="info-nums">2</span>
          </div>
        </div>
      </div>
      <div class="patient-infolist">
        <div class="infolist-item">
          <img src="@/assets/images/bm.png" alt>
          <div class="item-mid ml24">
            <p class="item-name">王凯歌/男/26</p>
            <p class="item-content">这是消息这是消息这是消息这这是消息这是消息这是消息这这是…这是消息这是消息这是消息这这是…这是消息这是消息这是消息这这是…</p>
            <span class="item-time">上午12:45</span>
            <span class="info-nums">2</span>
          </div>
        </div>
      </div>
      <div class="patient-infolist">
        <div class="infolist-item">
          <img src="@/assets/images/nan@2x.png" alt>
          <div class="item-mid ml24">
            <p class="item-name">王凯歌/男/26</p>
            <p class="item-content">这是消息这是消息这是消息这这是消息这是消息这是消息这这是…这是消息这是消息这是消息这这是…这是消息这是消息这是消息这这是…</p>
            <span class="item-time">上午12:45</span>
            <span class="info-nums">2</span>
          </div>
        </div>
      </div>
    </div>
    <div v-show="navtiveIndex==1">
      <div class="patient-infolist">
        <div class="infolist-item">
          <img src="@/assets/images/nan@2x.png" alt>
          <div class="item-mid ml24">
            <p class="item-name">王凯歌/男/26</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import commonHeader from "@/components/common/commonHeader";
import inputSearch from "@/components/common/inputSearch";
export default {
  data() {
    return {
      navtiveIndex: 0
    };
  },
  methods: {
    leftToggle() {
      this.$router.go(-1);
    },
    changeIndex(index) {
      this.navtiveIndex = index;
    },
    goClinicChat(name){
      this.$router.push({name:'clinicChatPage',params:{patientName:name}})
    }
  },
  components: {
    commonHeader,
    inputSearch
  }
};
</script>
<style lang="scss" scoped>
.patient-bar {
  width: 100%;
  height: 96px;
  display: flex;
  align-items: center;
  color: #7c7c7c;
  font-size: 32px;
  font-weight: 500;
  border-bottom: 1px solid #d9d9d9;
  div {
    width: 50%;
    height: 100%;
    text-align: center;
  }
  .nt-bar {
    color: #08bac6;
    background: rgba(255, 255, 255, 1);
    border-bottom: 4px solid #08bac6;
  }
}
.patient-infolist {
  width: 100%;
  height: 160px;
  background: rgba(255, 255, 255, 1);
  border-bottom: 1px solid #d9d9d9;
  display: flex;
  align-items: center;
  .infolist-item {
    position: relative;
    display: flex;
    width: 100%;
    padding: 0 30px;
    align-items: center;
    img {
      height: 112px;
      width: 112px;
    }

    .item-name {
      color: #3f3f3f;
      font-size: 32px;
      font-weight: 600;
    }
    .item-content {
      width: 448px;
      height: 40px;
      margin-top: 8px;
      line-height: 40px;
      color: rgba(140, 140, 140, 1);
      font-size: 28px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .item-time {
      position: absolute;
      right: 30px;
      top: 14px;
    }
    .info-nums {
      position: absolute;
      right: 30px;
      bottom: 10px;
      width: 40px;
      height: 40px;
      background: rgba(235, 98, 98, 1);
      border-radius: 20px;
      text-align: center;
      line-height: 40px;
    }
  }
}
</style>


