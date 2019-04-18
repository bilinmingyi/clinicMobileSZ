<template>
  <div class="patient-info">
    <common-header :titleName="'患者信息'"></common-header>
    <div class="fixtop">
      <input-search @query="inquery" @inputBlur="inputBlur" ></input-search>
      <section class="patient-bar">
        <div :class="['flex-mid-center',{'nt-bar':navtiveIndex==0}]" @click="changeIndex(0)">最新消息</div>
        <div :class="['flex-mid-center',{'nt-bar':navtiveIndex==1}]" @click="changeIndex(1)">患者列表</div>
      </section>
    </div>
    <div class="pt150">
      <div v-show="navtiveIndex==0">
        <div
          class="patient-infolist"
          v-for="(item,index) in chatList"
          @click="goClinicChat(item,1)"
          :key="index"
        >
          <div class="infolist-item">
            <img :src="imgNormalToggle(item.avatar,item)" alt @error="error(item,$event)">
            <div class="item-mid ml24">
              <p class="item-name">{{item.username}}/{{item.sex|parseSex}}/{{item.age}}岁</p>
              <p
                class="item-content"
                v-if="item.recent_msg"
              >{{msgDataType(item.recent_msg.msgdata)}}</p>
              <span
                class="item-time"
                v-if="item.recent_msg"
              >{{item.recent_msg.msgts|dateFormat('yyyy-MM-dd hh:mm')|detailDate}}</span>
              <span class="info-nums" v-show="item.unread!=0">{{item.unread}}</span>
            </div>
          </div>
        </div>
      </div>
      <div v-show="navtiveIndex==1">
        <div
          class="patient-infolist"
          @click="goClinicChat(item,2)"
          v-for="(item,index) in patientList"
        >
          <div class="infolist-item">
            <img :src="imgNormalToggle(item.avatar,item)" alt>
            <div class="item-mid ml24">
              <p class="item-name">{{item.name}}/{{item.sex|parseSex}}/{{item.age}}</p>
            </div>
          </div>
        </div>
            <without-data v-show="hasData&&isLoad"></without-data>
        <load-more v-show="isShowLoad&&isLoad" @loadMore="loadMore"></load-more>
      </div>
    </div>
  </div>
</template>
<script>
import { chatSessionList, patientList } from "@/fetch/api";
import commonHeader from "@/components/common/commonHeader";
import inputSearch from "@/components/common/inputSearch";
import loadMore from "@/components/common/loadMore";
import withoutData from "@/components/common//withoutData";
//添加公共的混入 里面有图片的默认图和错误处理
import imgMixins from "@/assets/js/imgMixins";
export default {
  mixins: [imgMixins],
  data() {
    return {
      navtiveIndex: 0,
      chatList: {}, // 聊天列表
      isLoad: false, // 加载是否完成
      isShowLoad: true, //是否有更多加载
      patientList: [],
      page: 1,
      pageSize: 10,
      copyVal: "",
      timeout:null
    };
  },
      computed: {
        hasData() {
            return this.patientList.length === 0;
        }
    },
  methods: {
    leftToggle() {
      this.$router.go(-1);
    },
    changeIndex(index) {
      this.navtiveIndex = index;
    },
    goClinicChat(item, index) {
      if (index == 1) {
        this.$router.push({
          path: "clinicChat",
          query: {
            username: item.username,
            session_id: item.session_id,
            session_type: "CLINIC_PATIENT",
            userId: item.userId,
            avatar: item.avatar
          }
        });
      } else {
        this.$router.push({
          path: "clinicChat",
          query: {
            username: item.name,
            session_id: "",
            session_type: "CLINIC_PATIENT",
            userId: item.id,
            avatar: item.avatar
          }
        });
      }
    },
    //获取最新消息的患者列表
    getChatSessionList() {
      chatSessionList({}).then(res => {
        if (res.code == 1000) {
          this.chatList = res.data.session_list;
        } else {
          this.$Message.infor("网络出错！");
        }
      });
      this.getPatientList("");
    },
    getPatientList(val) {
      let params = {
        query: val,
        page: this.page,
        page_size: this.pageSize
      };
      patientList(params).then(res => {
        if (res.code === 1000) {
          res.data.forEach(item => {
             this.patientList.push(item)
          });
        } else {
          this.$Message.infor(res.msg);
        }
        if (res.data.length !==2) {
          this.isShowLoad = false;
        }
        //  this.$Message.infor("网络出错！");
        this.isLoad = true;
      });
    },
    inputBlur(val){
      if(val==''){
        this.inquery(val);
      }
    },
    inquery(val) {
      let self = this;
      self.copyVal = val;
      this.navtiveIndex = 1;
      this.isLoad = false; // 加载是否完成
      this.isShowLoad = true; //是否有更多加载
      this.patientList = [];
      this.page = 1;
      this.pageSize = 10;
      this.getPatientList(val);
    },
    loadMore() {
      let self = this;
      this.page++;
      this.getPatientList(self.copyVal);
    },
    msgDataType(params) {
      console.log(params.msg_type)
      switch (params.msg_type) {
        case "text":
          return params.text;
          break;
        case "image":
          return "一张图片信息";
          break;
        case "link":
          return "一条连接信息";
          break;
        case "withdraw_msg":
          return "撤回了一条信息";
          break;
      }
    }
  },
  components: {
    commonHeader,
    inputSearch,
    loadMore,
    withoutData
  },
  created() {
    this.getChatSessionList();
  }
};
</script>
<style lang="scss" scoped>
.pt150 {
  padding-top: 184px;
}
.fixtop {
  position: fixed;
  width: 100%;
  background: #f5f5f5;
  z-index: 999;
}
.patient-bar {
  // @include psFixed(112px);
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
      // @extend %searchIcon;
      min-width: 40px;
      min-height: 40px;
      background: $redColor;
      border-radius: 20px;
      text-align: center;
      line-height: 40px;
    }
  }
}
</style>


