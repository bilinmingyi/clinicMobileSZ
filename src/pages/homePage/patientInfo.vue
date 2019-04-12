<template>
  <div class="patient-info">
    <common-header :titleName="'患者信息'"></common-header>
    <input-search></input-search>
    <section class="patient-bar">
      <div :class="['flex-mid-center',{'nt-bar':navtiveIndex==0}]" @click="changeIndex(0)">最新消息</div>
      <div :class="['flex-mid-center',{'nt-bar':navtiveIndex==1}]" @click="changeIndex(1)">患者列表</div>
    </section>
    <div v-show="navtiveIndex==0">
      <div class="patient-infolist" v-for="(item,index) in chatList" @click="goClinicChat(item)" :key="index">
        <div class="infolist-item">
          <img :src="imgNormalToggle(item.avatar)" alt @error="error(item,$event)">
          <div class="item-mid ml24">
            <p class="item-name">{{item.username}}/{{item.sex|parseSex}}/{{item.age}}岁</p>
            <p class="item-content" v-if="item.recent_msg">{{msgDataType(item.recent_msg.msgdata)}}</p>
            <span class="item-time" v-if="item.recent_msg">{{item.recent_msg.msgts|dateFormat('yyyy-MM-dd hh:mm')|detailDate}}</span>
            <span class="info-nums" v-show="item.unread!=0">{{item.unread}}</span>
          </div>
        </div>
      </div>
    </div>
    <div v-show="navtiveIndex==1">
      <div class="patient-infolist" @click="goClinicChat('111')">
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
import { chatSessionList } from "@/fetch/api";
import commonHeader from "@/components/common/commonHeader";
import inputSearch from "@/components/common/inputSearch";
//添加公共的混入 里面有图片的默认图和错误处理
import imgMixins from "@/assets/js/imgMixins";
export default {
  mixins:[imgMixins],
  data() {
    return {
      navtiveIndex: 0,
      chatList: {} // 聊天列表
    };
  },
  methods: {
    leftToggle() {
      this.$router.go(-1);
    },
    changeIndex(index) {
      this.navtiveIndex = index;
    },
    goClinicChat(item) {
      this.$router.push({
        path: "clinicChat",
        query: {
          username:item.username,
          session_id:item.session_id,
          session_type:item.session_type,
          userId:item.userId,
          avatar:item.avatar
        }
      });
    },
    //获取最新消息的患者列表
    getChatSessionList() {
      chatSessionList({}).then(res => {
        if (res.code == 1000) {
          this.chatList = res.data.session_list;
          // console.log(this.chatList);
        } else {
          console.log(res);
        }
      });
    },
    msgDataType(params) {
      switch (params.msg_type) {
        case "text":
          return params.text;
          break;
        case "image":
          return "您收到一张图片信息";
          break;
        case "link":
          return "您收到一条连接信息";
          break;
        case "withdraw_msg":
          return "对方撤回了一条信息";
          break;
      }
    }
  },
  components: {
    commonHeader,
    inputSearch
  },
  created() {
    this.getChatSessionList();
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
    @include commonBorder(bottom, #08bac6, 4px);
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
      border-radius: 100px;
    }
    .item-name {
      color: $grayColor;
      font-size: 32px;
      font-weight: 600;
    }
    .item-content {
      color: $gray3;
      @include textEllipsis(40px, 448px);
      margin-top: 8px;
    }
    .item-time {
      color: $gray3;
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


