import { mallItem, withoutData, loadMore } from '@/components/common'

// status_list:参数
// UNKNOWN("UNKNOWN", "未知"),
// AUDIT("AUDIT", "待审核"),
// REFUSE("REFUSE", "审核拒绝"),
// UNPAID4BUSINESS("UNPAID4BUSINESS", "待付款"),
// UNPAID4CLIENT("UNPAID4CLIENT", "待收款"),
// DELIVER("DELIVER", "待发货"),
// WAIT_INSTOCK("WAIT_INSTOCK", "待收货"),
// DONE("DONE", "完成"),
// CANCEL("CANCEL", "取消"),
export default {
  data() {
    return {
      mallList: [],
      isShowLoad: true,
      isLoad: false,
      page: '1',
      pageSize: '1',
      copyval: ''
    }
  },
  computed: {
    hasData() {
      return this.mallList.length === 0
    }
  },
  components: {
    mallItem,
    withoutData,
    loadMore
  },
  methods: {
    loadMore() {
      this.page++
      let self = this
      this.mallData(self.copyval) //加载数据的一个方法
    }
  }
}
