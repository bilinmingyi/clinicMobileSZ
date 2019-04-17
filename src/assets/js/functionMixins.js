import loadMore from "@/components/common/loadMore";
import withoutData from "@/components/common//withoutData";
import dateSelect from "@/components/common/dateSelect";
export default {
    data() {
        return {
            payStreamData: [],
            isShowLoad: true,
            isLoad: false,
            copyval: {
                startTime: "",
                endTime: ""
            },
            page: "1",
            pageSize: "10"
        }
    },
    components: {
        loadMore,
        withoutData,
        dateSelect
    },
    computed: {
        hasData() {
            return this.payStreamData.length === 0;
        }
    },
    methods: {
        selectToday(val) {
            let self = this;
            self.copyval = val;
            this._initData();
            this.getWater(val);
        },
        selectYesterday(val) {
            let self = this;
            self.copyval = val;
            this._initData();
            this.getWater(val);
        },
        selectThisMonth(val) {
            let self = this;
            self.copyval = val;
            this._initData();
            this.getWater(val);
        },
        selectLastMonth(val) {
            let self = this;
            self.copyval = val;

            this._initData();
            this.getWater(val);
        },
        selectQuery(val) {
            let self = this;
            self.copyval = val;
            this._initData();
            this.getWater(val);
        },
        _initData() {
            this.page = 1;
            this.pageSize = 10;
            this.payStreamData = [];
            this.isShowLoad = true;
            this.isLoad = false;
        },
        loadMore() {
            this.page++;
            let self = this;
            this.getWater(self.copyval);
        }
    },
    mounted() {
        let startTimeStr = new Date().setHours(0, 0, 0, 0);
        let endTimeStr = new Date().setHours(23, 59, 59, 59);
        let val = { startTime: startTimeStr, endTime: endTimeStr };
        this.selectToday(val);
    }
}