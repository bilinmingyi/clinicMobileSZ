<template>
  <div class="platformNew">
    <common-header :titleName="'平台动态'"></common-header>
    <div class="platform">
      <div class="platform-title">{{platformTitle}}</div>
      <p>平台消息</p>
      <p>2018-03-24 00:00</p>
      <div class="platform-content">
        据悉，梅奥亚洲医疗服务中心将为中国及亚洲患者提供协助，对于中国患者来说，今后不必远赴美国即可享受到梅奥的医疗服务。
        梅奥诊作为非营利性的综合医院在国际医疗界享有很高的声誉，被誉为医学领域的“最高法院”，已经有150多年的历史。
        2015年梅奥诊所被美国新闻周刊评为“年度最佳医院”，其9个医疗专科在全美排名第一。梅奥也是美国多位历任总统及名人首选医院。
        美国政界、商界的不少人士会专程到这里来治病。中国不少名人也曾于梅奥诊所就诊。
      </div>
      <div class="full-screen-hr mt188"></div>
      <p class="platform-font">你把我读完了</p>
    </div>
    <div class="comment">
      <div class="comment-title">
        <span>最新评论</span>
        <span class="comment-add" @click="goAddComment">添加评论</span>
      </div>
      <div class="comment-content">
        <p class="comment-name">啊伯伯亮</p>
        <p class="comment-detail">
          据悉，梅奥亚洲医疗服务中心将为中国及亚洲患者提供协助，对于中国患者来说，今后不必远赴美国即可享受到梅奥的医疗服务。
          梅奥诊作为非营利性的综合医院在国际医疗界享有很高的声誉，被誉为医学领域的“最高法院”，已经有150多年的历史。
          2015年梅奥诊所被美国新闻周刊评为“年度最佳医院”，其9个医疗专科在全美排名第一。梅奥也是美国多位历任总统及名人首选医院。
          美国政界、商界的不少人士会专程到这里来治病。中国不少名人也曾于梅奥诊所就诊。
        </p>
        <p class="comment-time">2018-2018-03-24 19:00</p>
      </div>
      <div class="no-comment">
        <span class="left"></span>没有更多评论
        <span class="right"></span>
      </div>
    </div>
  </div>
</template>
<script>
import commonHeader from "@/components/common/commonHeader";
export default {
  props: ["platformTitle"],
  data() {
    return {};
  },
  methods:{
    goAddComment(){
      this.$router.push({name:'addCommentPage'})
    }
  },
  components: {
    commonHeader
  }
};
</script>
<style lang="scss" scoped>
.platform {
  background: $bgwhite2;
  height: 100%;
  padding: 60px 30px;
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
    padding-top: 20px;
    @extend %normalTitle;
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



