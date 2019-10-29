let defaultReply = [
  {
    key: 1,
    replyName: '你好'
  },
  {
    key: 2,
    replyName: '请问有什么可以帮助你'
  }
]
let defaultKey = 2
// localStorage.defaultKey = 2;
// localStorage.defaultReply = [];
try {
  if (localStorage.defaultReply) {
    defaultReply = JSON.parse(localStorage.getItem('defaultReply'))
  }
  if (localStorage.defaultKey) {
    defaultKey = localStorage.defaultKey
  }
} catch (e) {}

const state = {
  clinicOrigin: 'shenZhen',
  SZLogo: require('@/assets/images/banner-yun.png'),
  WHLogo: require('@/assets/images/wuHan.png'),
  clinic: {
    id: '',
    name: '',
    customerPhone: '',
    provinceName: '',
    provinceCode: '',
    cityName: '',
    cityCode: '',
    countyName: '',
    countyCode: '',
    address: '',
    logo: '',
    rest: ''
  },
  defaultGoods: require('@/assets/images/normalGoods.png'), //商品的默认图
  //物流公司
  logisticsCompany: [
    { key: 'SFEXPRESS', value: '顺丰速运' },
    { key: 'JD', value: '京东快递' },
    { key: 'QT', value: '其他' },
    { key: 'ZT', value: '自提' }
  ],
  //商品的类别
  goodsTypeList: [
    { code: 8, value: '全部' },
    { code: 7, value: '热门' },
    { code: 1, value: '饮片' },
    { code: 2, value: '颗粒' },
    { code: 3, value: '成药' },
    { code: 4, value: '西药' },
    { code: 5, value: '产品' },
    { code: 6, value: '器械' }
  ],
  userInfoState: {}, //客户信息
  chatSessionList: [], //session的聊天室数据
  defaultReply,
  defaultKey,
  clinicsList: []
}
export default state
