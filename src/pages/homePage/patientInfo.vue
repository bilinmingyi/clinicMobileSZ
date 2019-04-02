<template>
  <div class="patient-info">
    <common-header :titleName="'患者信息'" ></common-header>
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
  @extend %aglinItem;
  color: $simpleGray;
  font-size: 32px;
  font-weight: 500;
  @include commonBorder();
  div {
    width: 50%;
    height: 100%;
    text-align: center;
  }
  .nt-bar {
    color: #08bac6;
    background: $bgWhite;
     @include commonBorder(bottom,#08bac6,4px);
  }
}
.patient-infolist {
  width: 100%;
  height: 160px;
  background: $bgwhite2;
   @include commonBorder();
  @extend %aglinItem;
  .infolist-item {
    position: relative;
  @extend %aglinItem;
    width: 100%;
    padding: 0 30px;
    img {
     @extend %mediumIcon;
    }
    .item-name {
      color: $grayColor;
      font-size: 32px;
      font-weight: 600;
    }
    .item-content {
      @include textEllipsis(40px,448px);
      margin-top: 8px;
    
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
      @extend %searchIcon;
      background: $redColor;
      border-radius: 20px;
      text-align: center;
      line-height: 40px;
    }
  }
}
</style>


