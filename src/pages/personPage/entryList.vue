<template>
  <div>
    <div v-for="(item,index) in entryList" :key="index">
      <entry-item @goDetail="goDetail(item)" :entryData="item"></entry-item>
    </div>
    <load-more v-show="isShowLoad&&isLoad" @loadMore="loadMore"></load-more>

    <without-data v-show="hasData&&isLoad"></without-data>

    <loading v-if="isShowLoading" :isAll="true"></loading>
  </div>
</template>

<script>
import { entryItem, loadMore, Loading, withoutData } from "@/components/common";
import { trainCourseList } from "@/fetch/api";
export default {
  data() {
    return {
      entryList: [],
      isLoad: false,
      isShowLoad: true,
      isShowLoading: true,
      page: 1,
      pageSize: 10
    };
  },
  components: {
    entryItem,
    loadMore,
    Loading,
    withoutData
  },
  computed: {
    hasData() {
      return this.entryList.length === 0
    }
  },
  created() {
    this.getTrainingList()
  },
  methods: {
    goDetail(item) {
      this.$router.push({ path: '/personPage/entryDetail', query: { name: item.title, haveBtn: 'hide', order_seqno: item.order_seqno } })
    },
    loadMore() {
      this.page++;
      this.getTrainingList();
    },
    getTrainingList() {
      this.isShowLoading = true
      const params = {
        page: this.page,
        page_size: this.pageSize
      }
      trainCourseList(params).then(res => {
        if (res.code == 1000) {
          let ArrTmp = res.data
          ArrTmp.forEach(element => {
            element.pubdate = element.train_time
            element.author = element.teacher
          });
          this.entryList.push(...ArrTmp)
          if (ArrTmp.length == this.pageSize) {
            this.isShowLoad = true;
          } else {
            this.isShowLoad = false;
          }
          this.isShowLoading = false
          this.isLoad = true
        } else {
          this.$Message.infor('网络出错！')
        }
      });
    }
  }
}
</script>

<style scoped>
</style>