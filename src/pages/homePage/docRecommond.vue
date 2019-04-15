<template>
  <div class="doctor">
    <common-header :titleName="'医生查询'"></common-header>
    <input-search :placeholder="'医生姓名'"></input-search>
    <div class="doc-content">
      <div class="doc">
        <img src="@/assets/images/bm.png" alt>
        <div class="doc-detail">
          <p class="doc-title">
            王凯歌
            <span :class="{'docColor':docJob==0}">医师</span>
          </p>
          <p class="doc-subTitle">中山大学附属医院/耳鼻喉科</p>
        </div>
        <div class="doc-button ml64 ">推荐</div>
      </div>
    </div>
    <div class="doc-content">
      <div class="doc">
        <img src="@/assets/images/bm.png" alt>
        <div class="doc-detail">
          <p class="doc-title">
            王凯歌
            <span :class="{'docColor':docJob==1}">主任</span>
          </p>
          <p class="doc-subTitle">中山大学附属医院/耳鼻喉科</p>
        </div>
        <div class="doc-button ml64 ">推荐</div>
      </div>
    </div>
    <!-- <div :class="['doctor-job',color_list[itemData.title-1]]"></div> -->
  </div>
</template>

<script>
import commonHeader from "@/components/common/commonHeader";
import inputSearch from "@/components/common/inputSearch";
import {doctorList} from "@/fetch/api"
export default {
  data() {
    return {
      docJob:1,
      color_list:['color-4DBC89', 'color-EDAB15', 'color-08BAC6', 'color-29BBFF']
    };
  },
  components: {
    commonHeader,
    inputSearch
  },
  methods:{
    getData(){
       let today=new Date(this.selectDate);
        let todayStr=today.getFullYear().toString()+((today.getMonth()+1)>9?(today.getMonth()+1):"0"+(today.getMonth()+1)).toString()+(today.getDate()>9?today.getDate():"0"+today.getDate()).toString();
        let params = {
           "appointDate":todayStr
        }
        console.log(11)
      doctorList(params).then(res=>{
        console.log(res)
      })
    }
  },
  created(){
    this.getData();
  }
};
</script>
<style lang="scss" scoped>

.doc-content {
  width: 100%;
  height: 160px;
  background: $bgwhite2;
  @include commonBorder();
  .doc {
    padding: 24px 30px;
    //  display: flex;
    @extend %aglinItem;
    img {
      @extend %mediumIcon;
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
        width: 72px;
        height: 40px;
        background: $yellowColor;
        line-height: 40px;
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
    }
    &-button {
      @include newsButton(64px,136px);
    }
    .docColor{
      background: #4DBC89;
    }
  }
}

  .color-29BBFF {
    background: #29BBFF;
  }

  .color-4DBC89 {
    background: #4DBC89;
  }

  .color-08BAC6 {
    background: #08BAC6;
  }

  .color-EDAB15 {
    background: #EDAB15;
  }
</style>


