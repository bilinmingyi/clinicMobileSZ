<template>
  <div>
    <section class="msg-bottom">
      <p class="msg-title">平台动态</p>
      <div class="news pl30" v-for="(item,index) in platformList" :key="index" @click="goPlatform(item)">
        <img :src="item.img_url?item.img_url:normalPic" alt>
        <div class="news-mid">
          <p>{{item.title}}</p>
          <div class="news-mid-bottom">
            <span class="news-mid-button">资讯类别</span>
            <span class="news-mid-time">{{item.pubdate|dateFormat('yyyy-MM-dd')}}</span>
          </div>
        </div>
      </div>
      <load-more v-show="isShowLoad&&isLoad" @loadMore="loadMore"></load-more>
      <div class="no-platform" v-show="hasPlatform&&isLoad">暂时无平台动态</div>
    </section>
  </div>
</template>
<script>
import loadMore from "@/components/common/loadMore";
import { getPlatformList } from "@/fetch/api";
export default {
  data() {
    return {
      page: 1,
      pageSize: 10,
      platformList: [],
      normalPic: require("@/assets/images/banner-yun.png"),
      isShowLoad: true,
      isLoad:false
    };
  },
  components: {
    loadMore
  },
  created() {
    this.getPlatformData();
  },
  computed: {
    hasPlatform() {
      return this.platformList.length == 0;
    }
  },
  methods: {
    goPlatform(item) {
      this.$router.push({
        name: "platformNewPage",
        params: { platformTitle: item.title,id:item.id }
      });
    },
    getPlatformData() {
      let params = {
        page: this.page,
        page_size: this.pageSize
      };
      getPlatformList(params).then(res => {
        if (res.code === 1000) {
          res.data.forEach(item => {
            this.platformList.push(item);
          });
          if (this.platformList.length == this.pageSize) {
            this.isShowLoad = true;
          } else {
            this.isShowLoad = false;
          }
          this.isLoad=true;
        } else {
           this.$Message.infor('网络出错！')
           this.isLoad=true;
          console.log(res);
        }
      });
    },
    loadMore() {
      this.page++;
      this.getPlatformData();
    }
  }
};
</script>
<style lang="scss" scoped>
.msg-bottom {
  margin-top: 24px;
  background: $bgwhite2;
  .msg-title {
    height: 96px;
    padding-left: 30px;
    line-height: 96px;
    @include commonBorder();
    @extend %normalTitle;
  }
  .news {
    height: 184px;
    @include commonBorder();
    @extend %aglinItem;
    img {
      width: 160px;
      height: 128px;
    }
    &-mid {
      padding-left: 24px;
      p {
        @include textEllipsis(80px, 504px, 2);
      }
      &-bottom {
        display: flex;
      }
      &-button {
        display: inline-block;
        @include newsButton(30px, 100px, 20px);
      }
      &-time {
        font-size: 24px;
        color: $borderColor;
        flex: 1;
        text-align: right;
      }
    }
  }
  .no-platform {
    @include textLineHeight(80px);
    text-align: center;
    @extend %normalTitle;
  }
}
</style>


