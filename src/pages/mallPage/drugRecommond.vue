<template>
  <!-- 药品推荐页面 -->
  <div>
    <common-header :titleName="$route.meta.title"></common-header>

    <div class="recommond">
      <div class="recommond-input">
        <input-search :placeholder="'商品名称'" @query="query" ref="input"></input-search>
      </div>
      <div class="recommond-select">
        <input-select :isShowInput="false" :title="'商品类别'" :modelValue="selectValue" :selectArray="goodsTypeList" @selectChange="selectChange"></input-select>
      </div>
      <div class="recommond-list">
        <drugs-item v-for="(item,index) in recommondList" :key="index" :drugMoney="item.price" :drugNum="item.num" :drugName="item.name" :drugImg="item.img"
          :drugSpec="item.spec">
          <template slot="rightBottom">
            <div class="button" @click="recommondGoods(item)">推荐</div>
          </template>
        </drugs-item>

        <without-data v-show="hasData&&isLoad"></without-data>
        <load-more v-show="isShowLoad&&isLoad" @loadMore="loadMore"></load-more>
      </div>
    </div>
  </div>
</template>
<script>
import {
  drugsItem,
  withoutData,
  loadMore,
  inputSearch,
  inputSelect,
  commonHeader
} from "@/components/common";
import { getGoodsList, msgSend } from "@/fetch/api"
import { mapState } from 'vuex';
export default {
  data() {
    return {
      recommondList: [],
      isLoad: false,
      isShowLoad: true,
      selectValue: '全部', // 进来默认查全部
      queryType: '', // 商品类型
      queryHot: '',
      page: 1,
      pageSize: 10,
      queryData: {},
    };
  },
  computed: {
    ...mapState(['goodsTypeList']),
    hasData() {
      return this.recommondList.length === 0;
    }
  },
  components: {
    drugsItem,
    withoutData,
    loadMore,
    inputSearch,
    inputSelect,
    commonHeader
  },
  methods: {
    loadMore() {
      this.page++
      this.getData();
    },
    /**
 * 获取商品的列表 is_hot 1为热门商品 0 普通 空为全部
 */
    getData() {
      let listParams = {
        name: this.$refs.input.inputText,
        type: this.queryType,
        status: 1, //默认查上线的商品 1 上线 0 下线 空 全部
        is_hot: this.queryHot, // 1 为热门 0 普通 空 全部
        page: this.page,
        page_size: this.pageSize
      }
      getGoodsList(listParams).then(res => {
        if (res.code === 1000) {
          res.data.forEach((item) => {
            this.recommondList.push(item)
          })
          //当数据总条数等于返回来的总条数 不显示加载更多 不用每次都初始化
          this.isShowLoad = this.recommondList.length === res.total_num ? false : true
        } else {
          this.isShowLoad = false
          this.$Message.infor("获取推荐商品列表错误" + res.msg);
        }
        this.isLoad = true
      })
    },
    _initData() {
      this.page = 1;
      this.pageSize = 10;
      this.isLoad = false;
      this.recommondList = [];
    },
    query() {
      this._initData();
      this.getData()
    },
    /**
     * 兼容PC端的接口
     * 类别为热门 HOT为1 TYPE穿''
     * 全部  HOT'' TYPE ''
     * 其他类型 默认传key值
     */
    selectChange(val) {
      this._initData()
      let selectVal = this.goodsTypeList.find((item) => {
        return item.value === val
      })
      switch (val) {
        case '全部':
          this.queryType = ''
          this.queryHot = ''
          break
        case '热门':
          this.queryType = ''
          this.queryHot = 1
          break
        default:
          this.queryType = selectVal.code
          this.queryHot = ''
          break
      }
      this.getData()
    },
    recommondGoods(item) {
      let oject = {
        avatar: item.img,
        name: item.name,
        id: item.id,
        spec: item.spec
      };
      let params = {
        last_msgid: this.queryData.last_msgid,
        to_userid: this.queryData.to_userid,
        from_username: this.queryData.from_username,
        from_userimg: this.queryData.from_userimg,
        session_type: this.queryData.session_type,
        msgdata: {
          msg_type: "link",
          link_type: "goods_recommond",
          link_url: "",
          link_desc: JSON.stringify(oject)
        }
      };
      this.$Message.confirm(
        `推荐${item.name}商品给病人${this.queryData.username}？`,
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
    }
  },
  mounted() {
    this.getData()
    this.queryData = this.$route.query;
  }
};
</script>
<style lang="scss" scoped>
.recommond {
  position: relative;
  &-input {
    //默认在头部地下的Input布局
    position: absolute;
    width: 100%;
    top: 0px;
    left: 0px;
    z-index: 99;
    background: #fafafa;
    padding-bottom: 20px;
  }
  &-select {
    width: 100%;
    position: absolute;
    top: 110px;
    left: 0px;
    z-index: 99;
  }
  &-list {
    padding-top: 210px;
    box-sizing: border-box;
    overflow: hidden;
    padding-bottom: 40px;
    height: calc(100vh - 100px);
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    .button {
      width: 136px;
      height: 64px;
      line-height: 64px;
      text-align: center;
      border-radius: 8px;
      font-size: 28px;
      color: $bgwhite2;
      background: $redColor;
    }
  }
}
</style>