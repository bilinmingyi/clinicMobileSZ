<template>
  <div class="platformNew">
    <common-header :titleName="'平台动态'"></common-header>
    <div class="platform">
      <div class="platform-title">{{platformTitle}}</div>
      <p>平台消息</p>
      <p>{{detailData.create_time |dateFormat('yyyy-MM-dd')}}</p>
      <div class="platform-content" v-html="detailData.content"></div>
      <div class="full-screen-hr mt188"></div>
      <p class="platform-font">你把我读完了</p>
    </div>
    <div class="comment">
      <div class="comment-title">
        <span>最新评论</span>
        <span class="comment-add" @click="goAddComment">添加评论</span>
      </div>
      <div class="comment-content" v-for="(item,index) in commentList">
        <p class="comment-name">{{item.user_name}}</p>
        <p class="comment-detail">
       {{item.content}}
        </p>
        <p class="comment-time">{{item.create_time|dateFormat}}</p>
      </div>
      <div class="no-comment">
        <span class="left"></span>没有更多评论
        <span class="right"></span>
      </div>
    </div>
  </div>
</template>
<script>
import { getArticleDetail, getCommentList } from "@/fetch/api";
import commonHeader from "@/components/common/commonHeader";
export default {
  props: ["platformTitle", "id"],
  data() {
    return {
      detailData: {},
      commentList:[]
    };
  },
  methods: {
    goAddComment() {
      this.$router.push({ name: "addCommentPage" });
    },
    _initData() {
      //获取动态的详情内容
      getArticleDetail(this.id).then(res => {
        if (res.code == 1000) {
          this.detailData = res.data;
        } else {
          console.log(res);
        }
      });
      //获取评论的内容
      let params = {
        content_id: this.id,
        content_type: 1
      };
      console.log(params)
      getCommentList(params).then(res => {
        if(res.code===1000){
          this.commentList = res.data;
          console.log( this.commentList)
        }else{
        console.log(res);
        }

      });
    }
  },
  components: {
    commonHeader
  },
  created() {
    this._initData();
  }
};
</script>
<style lang="scss" scoped>
.platform {
  background: $bgwhite2;
  height: 100%;
  padding: 60px 30px;
  width: 750px;
  // overflow: hidden;
  p {
    color: $simpleGray;
    font-size: 30px;
    margin-top: 20px;
  }
  &-title {
    @extend %normalTitle;
    font-weight: 600;
  }
  &-content {
    width: 100%;
    padding-top: 20px;
    @extend %normalTitle;
    div,
    p,
    img {
      // box-sizing: border-box;
      max-width: 100% !important;
      height: auto !important;
    }
  }

  &-font {
    font-size: 32px;
    text-align: center;
  }
}
.comment {
  padding: 60px 40px;
  &-title {
    display: flex;
    justify-content: flex-end;
    @extend %normalTitle;
    @include textLineHeight(80px);
    @include commonBorder();
  }
  &-add {
    flex: 1;
    text-align: right;
    color: #4dbc89;
  }
  &-content {
    padding: 20px 0px 20px 20px;
    width: 100%;
    height: auto;
    @include commonBorder();
    font-size: 28px;
  }
  &-name {
    color: $blueColor;
    font-size: 28px;
  }
  &-detail {
    font-size: 28px;
    line-height: 40px;
  }
  &-time {
    margin-top: 10px;
    color: $simpleGray;
  }
  .no-comment {
    margin-top: 30px;
    @include textLineHeight(60px);
    color: #cccccc;
    font-size: 32px;
    text-align: center;
    position: relative;
    .left {
      position: absolute;
      content: "";
      width: 150px;
      height: 6px;
      background: #cccccc;
      top: 30px;
      left: 80px;
    }
    .right {
      position: absolute;
      content: "";
      width: 150px;
      height: 6px;
      background: #cccccc;
      top: 30px;
      right: 80px;
    }
  }
}
</style>



