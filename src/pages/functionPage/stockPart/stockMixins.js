import stockFilter from "./stockFilter";
import inputSearch from "@/components/common/inputSearch";
import stockList from "./stockList";
import loadMore from "@/components/common/loadMore";
import withoutData from "@/components/common//withoutData";
export default {
    data() {
        return {
            payStreamData: [],
            isShowLoad: true,
            isLoad: false,
            page: "1",
            pageSize: "10",
            recondStock: ""
        };
    },
    components: {
        stockFilter,
        inputSearch,
        stockList,
        loadMore,
        withoutData
    },
    computed: {
        hasData() {
            return this.payStreamData.length === 0;
        }
    },
    methods: {
        _initData() {
            this.page = 1;
            this.pageSize = 10;
            this.payStreamData = [];
            this.isShowLoad = true;
            this.isLoad = false;
        },
        allStock(val) {
            var self = this;
            self.recondStock = val;
            this._initData();
            this.getData(val);
        },
        warnStock(val) {
            var self = this;
            self.recondStock = val;
            this._initData();
            this.getData(val);
        },
        hasStock(val) {
            var self = this;
            self.recondStock = val;
            this._initData();
            this.getData(val);
        },
        loadMore() {
            this.page++;
            let self = this;
            this.getData(self.copyval);
        },
        inquery(val) {
            var self = this;
            self.recondStock = val;
            this._initData();
            this.getData(self.copyval, val);
        }
    },
    mounted() {
        this.allStock("");
    }
};