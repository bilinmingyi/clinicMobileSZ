<template>
  <div class="doctor">
    <common-header :titleName="'医生查询'"></common-header>
    <div class="input-search">
  <input-search :placeholder="'医生姓名'" ></input-search>
    </div>
    <div class="mt88"></div>
    <div class="doc-content" @click="recommend(item)" v-for="(item,index) in allDoctor" :key="index">
      <div class="doc">
        <img :src="imgNormalToggle(item.avatar,item)" alt @error="error(item,$event)">
        <div class="doc-detail">
          <p class="doc-title">
            {{item.name}}
            <span :class="color_list[item.title-1]">{{item.title|doctorTypes}}</span>
          </p>
          <p class="doc-subTitle">   {{item.hospital}}
          <span v-if="item.hospital!='' && item.department!=''">/</span>
          {{item.department}}</p>
        </div>
        <div class="doc-button ml64">推荐</div>
      </div>
    </div>
    <!-- <div class="doc-content">
      <div class="doc">
        <img src="@/assets/images/bm.png" alt>
        <div class="doc-detail">
          <p class="doc-title">
            王凯歌
            <span :class="{'docColor':docJob==1}">主任</span>
          </p>
          <p class="doc-subTitle">中山大学附属医院/耳鼻喉科</p>
        </div>
        <div class="doc-button ml64">推荐</div>
      </div>
    </div> -->
    <!-- <div :class="['doctor-job',color_list[itemData.title-1]]"></div> -->
  </div>
</template>

<script>
import imgMixins from "@/assets/js/imgMixins";
import commonHeader from "@/components/common/commonHeader";
import inputSearch from "@/components/common/inputSearch";
import { doctorList } from "@/fetch/api";
import { msgSend } from "@/fetch/api";
export default {
   mixins:[imgMixins],
  data() {
    return {
      docJob: 1,
      color_list: [
        "color-4DBC89",
        "color-EDAB15",
        "color-08BAC6",
        "color-29BBFF"
      ],
      queryData: {},
      allDoctor:[]
    };
  },
  components: {
    commonHeader,
    inputSearch
  },
  methods: {
    getData() {
      let params = { job_type: "1", page_size: "50" };
      // console.log(params);
      doctorList(params).then(res => {
        if(res.code===1000){
          this.allDoctor = res.data
        }else{
           this.$Message.infor("网络出错！");
        }
        // console.log(res);
      });
    },
    recommend(item) {
      let oject={
           avatar: item.avatar,
            name: item.name,
            job_type: item.job_type,
            id: item.id,
            sex:item.sex,
            title:item.title
      }
      let params = {
        last_msgid: this.queryData.last_msgid,
        to_userid: this.queryData.to_userid,
        from_username: this.queryData.from_username,
        from_userimg: this.queryData.from_userimg,
        session_type: this.queryData.session_type,
        msgdata: {
          msg_type: "link",
          link_type: "treatment_order_create",
          link_url: "",
          link_desc: JSON.stringify(oject)
        }
      };
      // console.log(params);
      this.$Message.confirm(
        `推荐${item.name}医生给病人${this.queryData.username}？`,
        () => {
          msgSend(params).then(res => {
            if (res.code === 1000) {
              this.$router.go(-1);
            } else {
              this.$Message.infor("网络出错！");
            }
          });
        }
      );
      // console.log(params)
    }
  },
  created() {
    this.getData();
    this.queryData = this.$route.query;
    // console.log(this.queryData);
  }
};
</script>
<style lang="scss" scoped>
.input-search{
  position: fixed;
  width: 100%;
  background: #f5f5f5;
}
.mt88{
  padding-top: 88px;
}
.doc-content {
  width: 100%;
  height: 160px;
  background: $bgwhite2;
  @include commonBorder();
  .doc {
    padding: 24px 30px;
    //  display: flex;
    @extend %aglinItem;
    justify-content: space-between;
    img {
      @extend %mediumIcon;
      border-radius: 100px;
    }
    &-detail {
      padding-left: 24px;
      p {
        text-align: left;
      }
    }
    &-title {
      @extend %normalTitle;
      font-weight: 600;
      span {
        min-width: 80px;
        height: 50px;
        padding:0 10px;
        border-radius: 8px;
        line-height: 50px;
        text-align: center;
        margin-left: 16px;
        color: $bgwhite2;
        font-size: 20px;
        font-weight: 400;
        display: inline-block;
      }
    }
    &-subTitle {
      padding-top: 6px;
      font-size: 28px;
      color: $simpleGray;
      width: 350px;
      flex:1;
    }
    &-button {
      @include newsButton(64px, 136px);
      
    }
    .docColor {
      background: #4dbc89;
    }
  }
}

.color-29BBFF {
  background: #29bbff;
}

.color-4DBC89 {
  background: #4dbc89;
}

.color-08BAC6 {
  background: #08bac6;
}

.color-EDAB15 {
  background: #edab15;
}
</style>


