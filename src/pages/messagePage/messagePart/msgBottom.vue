<template>
  <div>
    <section class="msg-bottom">
      <div>

        <div class="msg-title">
          <div :class="{'msg-left':true,'over-auto':isShowMore}">
            <!-- <div v-for="(item,index) in typeList" :key="index" :class="{'nt-button':chooseNative==index}" @click="changeNative(index)">最新</div> -->
            <div v-for="(item,index) in typeList" :key="index" :class="{'nt-button':chooseNative==index,'utn-btn':true}" @click="changeNative(item,index)">
              {{item.key}}
            </div>

          </div>
          <!-- <div class="msg-right" @click="showMore">
            {{isShowMore?'收起':'更多'}}
          </div> -->
        </div>
      </div>
      <div v-if=" this.selectId===2">
        <div v-for="(item,index) in platformList" :key="index">
          <entry-item @goDetail="goDetail(item)" :entryData="item" :hasBorder="true"></entry-item>
        </div>

      </div>
      <div v-else>
        <div class="news pl30" v-for="(item,index) in platformList" :key="index" @click="goPlatform(item)">
          <img :src="item.img_url?item.img_url:normalPic" alt>
          <div class="news-mid">
            <p>{{item.title}}</p>
            <div class="news-mid-bottom">
              <span class="news-mid-button">{{item.type?item.type:'咨询类别'}}</span>
              <span class="news-mid-time">{{item.start_time|dateFormat('yyyy-MM-dd')}}</span>
            </div>
          </div>
        </div>
      </div>

      <load-more v-show="isShowLoad&&isLoad" @loadMore="loadMore"></load-more>
      <div class="no-platform" v-show="hasPlatform&&isLoad">暂时无数据</div>
    </section>
    <loading v-if="isShowLoading" :isAll="true"></loading>
  </div>
</template>
<script>
import { loadMore, Loading, entryItem } from "@/components/common";
import { getPlatformList, getArticleType } from "@/fetch/api";
export default {
  data() {
    return {
      page: 1,
      pageSize: 10,
      platformList: [],
      normalPic: require("@/assets/images/banner-yun.png"),
      isShowLoad: true,
      isShowLoading: true,
      isLoad: false,
      type: '',
      chooseNative: 0,
      typeList: [{ key: '咨讯', value: '咨讯', id: 0 }, { key: '平台动态', value: '平台动态', id: 1 }, { key: '培训报名', value: '培训报名', id: 2 }],
      isShowMore: false,
      searchType: '咨讯',
      selectId: 0
    };
  },
  components: {
    loadMore,
    Loading,
    entryItem
  },
  created() {
    this.chooseNative = this.selectId = this.$route.meta.isSelectId ? 2 : 0
    this.getPlatformData();
    // this.getArticleType()
  },
  computed: {
    hasPlatform() {
      return this.platformList.length == 0;
    }
  },

  methods: {
    goDetail(item) {
      this.$router.push({ path: '/personPage/entryDetail', query: { name: item.title, haveBtn: 'show', id: item.id } })
    },
    getArticleType() {
      getArticleType({}).then(res => {
        console.log(res)
        if (res.code === 1000) {
          this.typeList = res.data
        } else {
          this.$Message.infor('网络出错！')

        }
      });
    },
    showMore() {
      this.isShowMore = !this.isShowMore
    },
    changeNative(item, index) {
      if (this.chooseNative == index) {
        return
      }
      this.chooseNative = index
      this.searchType = item.value
      this.selectId = item.id
      this.platformList = []
      this.isShowLoad = true
      this.isLoad = false
      this.getPlatformData()
    },
    goPlatform(item) {
      this.$router.push({
        name: "platformNewPage",
        params: { platformTitle: item.title, id: item.id }
      });
    },
    getPlatformData() {
      this.isShowLoading = true
      let category = this.selectId == 2 ? 1 : 0
      let params = {
        page: this.page,
        page_size: this.pageSize,
        category
      };
      if (this.selectId != 2) {
        params['type'] = this.searchType
      }
      getPlatformList(params).then(res => {
        if (res.code === 1000) {
          this.type = res.data.type;
          res.data.forEach(item => {
            this.platformList.push(item);
          });
          if (this.platformList.length == this.pageSize) {
            this.isShowLoad = true;
          } else {
            this.isShowLoad = false;
          }

          this.isLoad = true;
        } else {
          this.$Message.infor('网络出错！')
          this.isShowLoad = false;
        }
        this.isShowLoading = false
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
  .over-auto {
    overflow: auto !important;
  }
  margin-top: 24px;
  background: $bgwhite2;
  .msg-title {
    @include commonBorder();
    // @extend %aglinItem;
    display: flex;
    .msg-left {
      height: 96px;
      padding-left: 30px;
      display: flex;
      flex-wrap: wrap;
      width: 91%;
      height: 100%;
      @extend %normalTitle;
      @extend %aglinItem;
      overflow: hidden;
    }

    .msg-right {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      color: rgba(8, 186, 198, 1);
      cursor: pointer;
      margin-top: 24px;
      flex: 1;
    }
    .utn-btn {
      @include blackWBtn();
      font-size: 28px;
      font-weight: 400;

      margin: 10px !important;
      margin-right: 40px;

      &:nth-last-child(1) {
        margin-right: 0;
      }
    }
    .nt-button {
      background: rgba(8, 186, 198, 1);
      color: #ffffff;
    }
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


