import { mallItem, withoutData, loadMore } from "@/components/common";
export default{
  data() {
    return {
      mallList: [
        {
          name: "李四",
          time: "2019/4/24 10:36",
          number: "13631780571",
          money: "100"
        },
        {
          name: "李四2",
          time: "2019/4/24 10:36",
          number: "13631780572",
          money: "200"
        },
        {
          name: "李四3",
          time: "2019/4/24 10:36",
          number: "13631780573",
          money: "300"
        },
        {
          name: "李四4",
          time: "2019/4/24 10:36",
          number: "13631780574",
          money: "400"
        }
      ],
      isShowLoad: true,
      isLoad: true,
      page: "1",
      pageSize: "10"
    };
  },
  computed:{
          hasData() {
            return this.mallList.length !== 0;
        }
  },
  components: {
    mallItem,
    withoutData,
    loadMore
  },
  methods:{
    loadMore() {
    this.page++;
    let self = this;
    this.getWater(self.copyval);
}
}
}