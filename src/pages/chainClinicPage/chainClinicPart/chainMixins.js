import { withoutData, dateSelect, Loading } from '@/components/common/index.js'

export default {
  data() {
    return {
      clinicData: [],
      isLoad: false,
      isShowLoading: true,
      copyval: {
        startTime: '',
        endTime: ''
      },
      page: '1',
      pageSize: '50'
    }
  },
  components: {
    withoutData,
    dateSelect,
    Loading
  },
  computed: {
    hasData() {
      return this.clinicData.length === 0
    }
  },
  methods: {
    selectToday(val) {
      let self = this
      self.copyval = val
      this._initData()
      this.getChainData(val)
    },
    selectYesterday(val) {
      let self = this
      self.copyval = val
      this._initData()
      this.getChainData(val)
    },
    selectThisMonth(val) {
      let self = this
      self.copyval = val
      this._initData()
      this.getChainData(val)
    },
    selectLastMonth(val) {
      let self = this
      self.copyval = val
      this._initData()
      this.getChainData(val)
    },
    selectQuery(val) {
      let self = this
      self.copyval = val
      this._initData()
      this.getChainData(val)
    },
    _initData() {
      this.page = 1
      this.pageSize = 50
      this.clinicData = []
      this.isLoad = false
      this.isShowLoading = true
    }
  },
  mounted() {
    let startTimeStr = new Date().setHours(0, 0, 0, 0)
    let endTimeStr = new Date().setHours(23, 59, 59, 59)
    let val = { startTime: startTimeStr, endTime: endTimeStr }
    this.selectToday(val)
  }
}
