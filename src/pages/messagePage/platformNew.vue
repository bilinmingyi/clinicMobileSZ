<template>
  <div class="platformNew">
    <common-header :titleName="'平台动态'" :isShowLeft="!noShowLeft"></common-header>
    <div v-if="isComplete">
      <div class="platform">
        <div class="platform-title">{{platformTitle}}</div>
        <p>{{detailData.type|articleType}}</p>
        <p>{{detailData.create_time |dateFormat('yyyy-MM-dd')}}</p>
        <div class="platform-content" v-html="detailData.content"></div>
        <div class="full-screen-hr mt188"></div>
        <p class="platform-font">你把我读完了</p>
      </div>

      <!-- <div class="comment">
        <div class="comment-title">
          <span>最新评论</span>
          <span class="comment-add"></span>
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
      </div> -->
    </div>

  </div>
</template>
<script>
import { getArticleDetail, getCommentList } from "@/fetch/api";
import { commonHeader } from "@/components/common";
import { getWXSign, getQueryString } from '@/assets/js/wx.js'
import menZhen from '@/assets/images/menzhen@2x.png'
import { mapState } from 'vuex';
export default {
  props: ["platformTitle", "id"],
  data() {
    return {
      detailData: {},
      commentList: [],
      isComplete: false,
      noShowLeft: false
    };
  },
  computed: {
    ...mapState({
      clinic: state => state.clinic
    })
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
          // console.log(window.location.origin + window.location.pathname.replace(/homePage/, 'sharePage') + '?path=' + encodeURIComponent(window.location.href.split('#')[1] + '?isWxShare=1'))
          try {
            getWXSign.apply(this).then(({ wx, appId }) => {
              wx.updateAppMessageShareData({
                title: res.data.title, // 分享标题
                desc: res.data.summary || res.data.remark, // 分享描述
                link: window.location.origin + window.location.pathname.replace(/homePage/, 'sharePage') + '?path=' + encodeURIComponent(window.location.href.split('#')[1] + '?isWxShare=1'),
                imgUrl: res.data.imgUrl ? res.data.imgUrl : (this.clinic.logo ? this.clinic.logo : menZhen), // 分享图标
                success: function () {
                  // 设置成功
                }
              })

              wx.updateTimelineShareData({
                title: res.data.title, // 分享标题
                link: window.location.origin + window.location.pathname.replace(/homePage/, 'sharePage') + '?path=' + encodeURIComponent(window.location.href.split('#')[1] + '?isWxShare=1'),
                imgUrl: res.data.imgUrl ? res.data.imgUrl : (this.clinic.logo ? this.clinic.logo : menZhen), // 分享图标
                success: function () {
                  // 设置成功
                }
              })
            })
          } catch (e) {
            console.log(e)
          }
        } else {
          this.$Message.infor('网络出错！')
        }
        this.isComplete = true
      });
      //获取评论的内容
      // let params = {
      //   content_id: this.id,
      //   content_type: 1
      // };
      // getCommentList(params).then(res => {
      //   if (res.code === 1000) {
      //     this.commentList = res.data;
      //   } else {
      //     this.$Message.infor(res.msg)
      //   }
      // });
    }
  },
  components: {
    commonHeader
  },
  created() {
    if (window.location.href.indexOf('isWxShare') > -1) {
      this.noShowLeft = true
    }
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
  overflow: hidden;
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



